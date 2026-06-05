export interface LeadData {
  name: string;
  email: string;
  phone: string;
  program: string;
  qualification: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, message: result.message || "Something went wrong. Please try again." };
    }

    return { success: true, message: "Your application has been submitted successfully!" };
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}
