import { NextRequest } from "next/server";

export const runtime = "edge";

function base64url(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function encodeJSON(obj: any): string {
  return base64url(new TextEncoder().encode(JSON.stringify(obj)));
}

function pemToDer(pem: string): ArrayBuffer {
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  
  let base64 = pem;
  if (base64.includes(pemHeader)) {
    base64 = base64.substring(base64.indexOf(pemHeader) + pemHeader.length);
  }
  if (base64.includes(pemFooter)) {
    base64 = base64.substring(0, base64.indexOf(pemFooter));
  }
  base64 = base64.replace(/\s+/g, "");
  
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, qualification } = body;

    // Validate required fields
    if (!name || !email || !phone || !program || !qualification) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

    console.log("[submit-lead] spreadsheetId:", spreadsheetId ? "SET" : "MISSING");
    console.log("[submit-lead] clientEmail:", clientEmail ? clientEmail : "MISSING");
    console.log("[submit-lead] privateKey length:", privateKey ? privateKey.length : 0);

    if (privateKey) {
      // Strip surrounding quotes if present (some env parsers keep them)
      if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
      } else if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
        privateKey = privateKey.slice(1, -1);
      }
      // Replace literal \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, "\n");
    }

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.error("Google Sheets API credentials are not configured.");
      return Response.json(
        { message: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // 1. Convert PEM private key to DER ArrayBuffer
    const privateKeyBuffer = pemToDer(privateKey);

    // 2. Import private key using Web Crypto Subtle API (edge runtime native)
    const cryptoKey = await cryptoKeyForSign(privateKeyBuffer);

    // 3. Create JWT claims for Google OAuth2
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: "RS256", typ: "JWT" };
    const claims = {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    };

    const unsignedToken = `${encodeJSON(header)}.${encodeJSON(claims)}`;

    // 4. Sign JWT using Subtle Crypto
    const signatureBuffer = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      new TextEncoder().encode(unsignedToken)
    );

    const jwt = `${unsignedToken}.${base64url(signatureBuffer)}`;

    // 5. Fetch Access Token from Google OAuth2 endpoint
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error("[submit-lead] Google OAuth token request failed:", tokenResponse.status, errorText);
      return Response.json(
        { message: "Authentication failed with Google Sheets." },
        { status: 500 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 6. Append lead to Google Sheet using REST API
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    console.log("[submit-lead] Appending row via Google Sheets REST API...");
    
    const appendResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Leads!A:F:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[timestamp, name, email, phone, program, qualification]],
        }),
      }
    );

    if (!appendResponse.ok) {
      const errorText = await appendResponse.text();
      console.error("[submit-lead] Google Sheets append request failed:", appendResponse.status, errorText);
      return Response.json(
        { message: "Failed to save lead. Please try again later." },
        { status: 500 }
      );
    }

    console.log("[submit-lead] Row appended successfully!");

    return Response.json(
      { message: "Lead submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[submit-lead] Google Sheets API Error:", error.message);
    return Response.json(
      { message: "Failed to submit lead. Please try again later." },
      { status: 500 }
    );
  }
}

async function cryptoKeyForSign(privateKeyBuffer: ArrayBuffer): Promise<CryptoKey> {
  return await crypto.subtle.importKey(
    "pkcs8",
    privateKeyBuffer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: { name: "SHA-256" },
    },
    false,
    ["sign"]
  );
}
