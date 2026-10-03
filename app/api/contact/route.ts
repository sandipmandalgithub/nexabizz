import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

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

return NextResponse.json(
  {
    success: true,
    message: "Your enquiry has been received successfully.",
  },
  {
    status: 201,
  },
);


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
