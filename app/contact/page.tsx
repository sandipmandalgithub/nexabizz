import Link from "next/link";
import {
ArrowRight,
BriefcaseBusiness,
CheckCircle2,
Mail,
MapPin,
MessageSquare,
Phone,
} from "lucide-react";

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
"Digital Marketing",
"Maintenance & Support",
"IT Consulting",
];

const contactPoints = [
{
icon: Mail,
title: "Email",
value: "[hello@nexabizz.com](mailto:hello@nexabizz.com)",
description: "For project enquiries and general questions.",
},
{
icon: Phone,
title: "Phone",
value: "+91 00000 00000",
description: "For direct project discussions.",
},
{
icon: MapPin,
title: "Location",
value: "India",
description: "Working with businesses through digital collaboration.",
},
];

const processSteps = [
{
number: "01",
title: "Tell us about your idea",
description:
"Share your business goal, current challenge, or the digital product you want to build.",
},
{
number: "02",
title: "Discuss the requirements",
description:
"We can discuss features, users, technology, scope, priorities, and any existing systems.",
},
{
number: "03",
title: "Plan the solution",
description:
"The requirements can then be organized into a practical development and delivery approach.",
},
];

export default function ContactPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
Contact NexaBizz </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Let&apos;s discuss your next digital project.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Have a website idea, business application, e-commerce project,
          mobile app, or automation requirement? Share some details and
          start a conversation.
        </p>
      </div>
    </div>
  </section>

  {/* Contact Content */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Start with a simple conversation.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            You do not need to have every technical detail figured out
            before contacting us. Start with your business goal and we can
            work through the requirements together.
          </p>

          <div className="mt-9 space-y-4">
            {contactPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {point.title}
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold text-slate-950">
                        {point.value}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Not sure where to start?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  That&apos;s okay. Tell us what you are trying to achieve,
                  and we can identify the relevant questions and possible
                  next steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Project Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Tell us about your project.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Complete the form below with whatever information you already
              have. More detailed functionality will be connected in a
              later development stage.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-800"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-slate-800"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or business name"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-slate-800"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-sm font-semibold text-slate-800"
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="" disabled>
                  Select a service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="budget"
                  className="text-sm font-semibold text-slate-800"
                >
                  Estimated Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                  <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                  <option value="3l-plus">₹3,00,000+</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="text-sm font-semibold text-slate-800"
                >
                  Expected Timeline
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  <option value="urgent">As soon as possible</option>
                  <option value="1-2-months">1–2 months</option>
                  <option value="2-3-months">2–3 months</option>
                  <option value="3-plus-months">3+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-800"
              >
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your business, project idea, required features, or current challenge..."
                className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs leading-6 text-slate-500">
                This enquiry form is currently a frontend interface. Form
                submission, validation, database storage, and email
                notifications will be connected in a later development
                stage.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Send Project Enquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* Process */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          What Happens Next
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A simple path from enquiry to planning.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          A good first conversation helps clarify what needs to be built,
          why it matters, and what the practical next steps could look
          like.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className="text-sm font-bold text-slate-400">
              {step.number}
            </span>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        Ready to Start?
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Let&apos;s turn your digital requirement into a clear plan.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        Whether you have a complete specification or only an early idea,
        the first step is a conversation.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          Explore Services
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/case-studies"
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  </section>
</div>
);
}
