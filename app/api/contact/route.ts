import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "Validation failed. Please check your inputs.",
        },
        { status: 400 }
      );
    }

    const { name, email, phone, service, budget, message } = result.data;

    // Check for Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "nexiv25@gmail.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "NEXIV Website <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `New Project Inquiry from ${name} [${service}]`,
            html: `
              <h2>New Project Inquiry - NEXIV Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Selected Service:</strong> ${service}</p>
              <p><strong>Estimated Budget:</strong> ${budget || "Not specified"}</p>
              <h3>Project Details:</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          }),
        });
      } catch (err) {
        console.error("Failed to send via Resend:", err);
      }
    }

    // Formspree Integration Fallback
    const formspreeId = process.env.FORMSPREE_ID;
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, phone, service, budget, message }),
        });
      } catch (err) {
        console.error("Formspree forward failed:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been sent to Nexiv. We will contact you within 24 hours.",
        data: { name, email, service },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
