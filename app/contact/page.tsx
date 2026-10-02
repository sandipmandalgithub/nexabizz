"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
ArrowRight,
CheckCircle2,
Clock3,
Mail,
MapPin,
MessageSquare,
Phone,
Send,
} from "lucide-react";

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
.regex(/^[+]?[0-9\s()-]{10,15}$/, "Please enter a valid phone number."),

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

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
"Web Development",
"E-commerce Solutions",
"Custom Web Applications",
"Mobile App Development",
"UI/UX Design",
"Business Automation",
"Software Development",
"API & Backend Development",
"Cloud & Deployment",
"Digital Marketing Solutions",
"Website Maintenance & Support",
"IT Consulting & Technology Solutions",
];

const budgetOptions = [
"Under ₹50,000",
"₹50,000 – ₹1,00,000",
"₹1,00,000 – ₹3,00,000",
"₹3,00,000+",
"Prefer to discuss",
];

const timelineOptions = [
"As soon as possible",
"1–2 months",
"2–3 months",
"3+ months",
"Flexible",
];

const contactInfo = [
{
icon: Mail,
title: "Email",
value: "[hello@nexabizz.com](mailto:hello@nexabizz.com)",
description: "For general enquiries and project discussions.",
},
{
icon: Phone,
title: "Phone",
value: "+91 00000 00000",
description: "For direct project conversations.",
},
{
icon: MapPin,
title: "Location",
value: "India",
description: "Working with businesses through digital collaboration.",
},
];

const nextSteps = [
{
icon: MessageSquare,
title: "Share your requirements",
description:
"Tell us about your business, project goals, and the kind of solution you need.",
},
{
icon: Clock3,
title: "Discuss the project",
description:
"We can review your requirements, clarify priorities, and discuss possible approaches.",
},
{
icon: CheckCircle2,
title: "Plan the next step",
description:
"Once the scope is clear, the project can move toward a suitable proposal and delivery plan.",
},
];

function FieldError({ message }: { message?: string }) {
if (!message) {
return null;
}

return ( <p className="mt-1.5 text-sm text-red-600" role="alert">
{message} </p>
);
}

export default function ContactPage() {
const [submitted, setSubmitted] = useState(false);

const {
register,
handleSubmit,
reset,
formState: { errors, isSubmitting },
} = useForm<ContactFormData>({
resolver: zodResolver(contactSchema),
defaultValues: {
fullName: "",
company: "",
email: "",
phone: "",
service: "",
budget: "",
timeline: "",
projectDetails: "",
},
});

const onSubmit = async (data: ContactFormData) => {
console.log("Validated contact form data:", data);

```
await new Promise((resolve) => setTimeout(resolve, 500));

setSubmitted(true);
reset();
```

};

return ( <div className="bg-white">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
Contact NexaBizz </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Let&apos;s discuss your next digital project.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Tell us what you are building, what you want to improve, or
          where your business needs digital support. We can start with a
          conversation.
        </p>
      </div>
    </div>
  </section>

  {/* Contact Information */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Icon className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-950">
                {item.title}
              </h2>

              <p className="mt-2 text-base font-medium text-slate-700">
                {item.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Contact Form */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Project Enquiry
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Tell us about your project.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Share a few details about your business and requirements. The
            more context you provide, the easier it is to understand what
            you are looking to build.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-950">
              What happens next?
            </h3>

            <ul className="mt-5 space-y-4">
              {nextSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <li key={step.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {step.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-950">
                Form validated successfully
              </h2>

              <p className="mt-3 max-w-md leading-7 text-slate-600">
                Your enquiry passed the frontend validation. The next
                step will connect this form to the NexaBizz backend and
                enquiry system.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    {...register("fullName")}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                      errors.fullName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  />

                  <FieldError message={errors.fullName?.message} />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    {...register("company")}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                      errors.company
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  />

                  <FieldError message={errors.company?.message} />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  />

                  <FieldError message={errors.email?.message} />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Phone Number{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                      errors.phone
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  />

                  <FieldError message={errors.phone?.message} />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Service <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="service"
                    {...register("service")}
                    className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                      errors.service
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <FieldError message={errors.service?.message} />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Estimated Budget{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="budget"
                    {...register("budget")}
                    className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                      errors.budget
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  >
                    <option value="">Select a budget</option>

                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  <FieldError message={errors.budget?.message} />
                </div>

                {/* Timeline */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="timeline"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Expected Timeline{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="timeline"
                    {...register("timeline")}
                    className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                      errors.timeline
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  >
                    <option value="">Select a timeline</option>

                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>

                  <FieldError message={errors.timeline?.message} />
                </div>

                {/* Project Details */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="projectDetails"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Project Details{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="projectDetails"
                    rows={7}
                    placeholder="Tell us about your business, project goals, required features, target users, or any other useful details..."
                    {...register("projectDetails")}
                    className={`mt-2 w-full resize-y rounded-lg border px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                      errors.projectDetails
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-950 focus:ring-slate-100"
                    }`}
                  />

                  <FieldError
                    message={errors.projectDetails?.message}
                  />
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs leading-5 text-slate-500">
                  This form currently performs frontend validation only.
                  Your information is not being sent to a backend or
                  stored in a database yet.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    Validating...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Start a Conversation
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Have a digital idea in mind?
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Tell us what you are trying to build and explore how a
            structured digital solution could support your business.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          Explore Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
</div>
);
}
