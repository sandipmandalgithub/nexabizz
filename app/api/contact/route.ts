import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
fullName: z
.string()
.trim()
.min(2, "Please enter your full name.")
.max(100, "Name must be less than 100 characters."),

company: z
.string()
.trim()
.max(100, "Company name must be less than 100 characters.")
.optional()
.or(z.literal("")),

email: z
.string()
.trim()
.email("Please enter a valid email address."),

phone: z
.string()
.trim()
.regex(
/^[+]?[0-9\s()-]{10,15}$/,
"Please enter a valid phone number.",
),

service: z
.string()
.min(1, "Please select a service."),

budget: z
.string()
.min(1, "Please select an estimated budget."),

timeline: z
.string()
.min(1, "Please select an expected timeline."),

projectDetails: z
.string()
.trim()
.min(20, "Please provide at least 20 characters about your project.")
.max(2000, "Project details must be less than 2000 characters."),
});

export async function POST(request: Request) {
try {
const body: unknown = await request.json();


const result = contactSchema.safeParse(body);

if (!result.success) {
  return NextResponse.json(
    {
      success: false,
      message: "Please check the submitted information.",
      errors: result.error.flatten().fieldErrors,
    },
    {
      status: 400,
    },
  );
}

const contactData = result.data;

const enquiry = await prisma.contactEnquiry.create({
  data: {
    fullName: contactData.fullName,
    company: contactData.company || null,
    email: contactData.email,
    phone: contactData.phone,
    service: contactData.service,
    budget: contactData.budget,
    timeline: contactData.timeline,
    projectDetails: contactData.projectDetails,
  },
});

console.log("New contact enquiry saved:", enquiry.id);

try {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["smandal21122001@gmail.com"],
    subject: `New NexaBizz Enquiry from ${contactData.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #0f172a;">
        <h2 style="margin-bottom: 20px;">
          New NexaBizz Contact Enquiry
        </h2>

        <p style="margin-bottom: 20px;">
          A new enquiry has been submitted through the NexaBizz website.
        </p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Full Name
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.fullName}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Company
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.company || "Not provided"}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Email
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.email}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Phone
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.phone}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Service
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.service}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Budget
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.budget}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Timeline
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${contactData.timeline}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; vertical-align: top;">
              Project Details
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; white-space: pre-wrap;">
              ${contactData.projectDetails}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">
              Enquiry ID
            </td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">
              ${enquiry.id}
            </td>
          </tr>
        </table>

        <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
          This email was generated automatically by the NexaBizz website.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend email error:", error);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry was saved successfully, but the email notification could not be sent.",
      },
      {
        status: 201,
      },
    );
  }

  console.log("Contact notification email sent successfully:", data?.id);

  return NextResponse.json(
    {
      success: true,
      message:
        "Your enquiry has been received successfully and the email notification was sent.",
    },
    {
      status: 201,
    },
  );
} catch (emailError) {
  console.error("Resend email error:", emailError);

  return NextResponse.json(
    {
      success: true,
      message:
        "Your enquiry was saved successfully, but the email notification could not be sent.",
    },
    {
      status: 201,
    },
  );
}


} catch (error) {
console.error("Contact API error:", error);


return NextResponse.json(
  {
    success: false,
    message: "Something went wrong while processing your enquiry.",
  },
  {
    status: 500,
  },
);


}
}
