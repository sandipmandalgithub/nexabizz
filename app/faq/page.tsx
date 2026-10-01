import Link from "next/link";
import {
ArrowRight,
BriefcaseBusiness,
Code2,
HelpCircle,
Layers3,
MessageSquare,
ShieldCheck,
} from "lucide-react";

const faqGroups = [
{
title: "General Questions",
icon: HelpCircle,
questions: [
{
question: "What does NexaBizz do?",
answer:
"NexaBizz is a digital solutions brand focused on helping businesses plan, design, build, and improve digital products such as websites, e-commerce platforms, custom web applications, mobile solutions, and business automation systems.",
},
{
question: "What types of businesses can work with NexaBizz?",
answer:
"Digital solutions can be designed for startups, small and medium businesses, retail and e-commerce companies, healthcare organizations, educational businesses, professional service providers, and larger organizations.",
},
{
question: "Can NexaBizz work on an existing website or application?",
answer:
"Yes. Existing websites and applications can be reviewed for improvements, feature development, UI updates, performance work, maintenance, or modernization depending on the project requirements.",
},
{
question: "Do you provide custom solutions?",
answer:
"Yes. Solutions can be structured around the specific business workflow, user requirements, technical environment, and future growth plans instead of relying only on a fixed template.",
},
],
},
{
title: "Services & Development",
icon: Code2,
questions: [
{
question: "What web development services are available?",
answer:
"Services can include business websites, responsive web applications, e-commerce platforms, custom dashboards, API integrations, backend development, and ongoing website improvements.",
},
{
question: "Can you build an e-commerce website?",
answer:
"Yes. An e-commerce solution can include product management, categories, shopping experiences, customer flows, order management, payment integration, and administration features based on project requirements.",
},
{
question: "Do you develop mobile applications?",
answer:
"Mobile application development can be planned for Android and iOS use cases, with the technology selected according to the application's requirements, expected users, and long-term maintenance needs.",
},
{
question: "Can you build custom business software?",
answer:
"Yes. Custom applications can be designed for workflows such as internal operations, customer management, reporting, approvals, dashboards, automation, and other business-specific processes.",
},
],
},
{
title: "Process & Collaboration",
icon: BriefcaseBusiness,
questions: [
{
question: "How does a typical project begin?",
answer:
"A project generally begins with understanding the business requirement, target users, desired functionality, existing systems, timeline, and priorities. The requirements can then be converted into a practical development plan.",
},
{
question: "Will the project be responsive?",
answer:
"Responsive behavior is considered from the beginning so that the final experience can work across mobile phones, tablets, laptops, and desktop screens.",
},
{
question: "How will I receive project updates?",
answer:
"Project communication can be structured around requirements, milestones, development progress, testing, feedback, and delivery so that important decisions remain clear throughout the project.",
},
{
question: "Can requirements change during development?",
answer:
"Requirements can evolve as a project becomes clearer. Changes can be reviewed based on their technical impact, priority, timeline, and relationship to the existing scope before implementation.",
},
],
},
{
title: "Technology & Support",
icon: Layers3,
questions: [
{
question: "What technologies do you work with?",
answer:
"The development ecosystem includes technologies such as React, Next.js, TypeScript, JavaScript, Node.js, Express.js, Java, Spring Boot, MongoDB, PostgreSQL, MySQL, Tailwind CSS, Flutter, Git, Docker, AWS, and Vercel.",
},
{
question: "How do you choose the technology for a project?",
answer:
"Technology selection depends on factors such as project requirements, performance needs, scalability, existing systems, development complexity, team capability, and long-term maintenance.",
},
{
question: "Do you provide maintenance after launch?",
answer:
"Maintenance and support can cover updates, bug fixes, improvements, content or feature changes, monitoring, and other ongoing technical requirements depending on the agreed project scope.",
},
{
question: "Do you consider security during development?",
answer:
"Security considerations can be incorporated throughout development, including appropriate authentication, authorization, input validation, secure configuration, access control, and responsible handling of application data.",
},
],
},
];

const processSteps = [
{
number: "01",
title: "Understand",
description:
"We start by understanding your business, users, goals, and technical requirements.",
},
{
number: "02",
title: "Plan",
description:
"Requirements are organized into a practical structure covering features, technology, and delivery.",
},
{
number: "03",
title: "Build",
description:
"The solution is developed with attention to usability, maintainability, responsiveness, and quality.",
},
{
number: "04",
title: "Validate",
description:
"Features and experiences are tested so issues can be identified and refined before delivery.",
},
];

export default function FAQPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
Frequently Asked Questions </p>


        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Questions about working with NexaBizz?
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Find answers to common questions about our digital solutions,
          development process, technology approach, and ongoing support.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Ask a Question
            <MessageSquare className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Groups */}
  <section className="bg-white">
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-16">
        {faqGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div key={group.title}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {group.title}
                </h2>
              </div>

              <div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {group.questions.map((item) => (
                  <details
                    key={item.question}
                    className="group px-6 sm:px-7"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-200 group-open:rotate-45">
                        <span className="text-xl font-normal leading-none">
                          +
                        </span>
                      </span>
                    </summary>

                    <div className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-slate-600">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Process */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          How We Work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A clear process from idea to delivery.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Every project is different, but a structured process helps keep
          requirements, development, testing, and communication aligned.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

  {/* Security */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Responsible Development
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Security, maintainability, and clarity matter.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Good digital solutions should not only work today. They
              should also be understandable, maintainable, and structured
              with appropriate security considerations for their intended
              use.
            </p>
          </div>

          <Link
            href="/technologies"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            View Technologies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-200 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        Still Have Questions?
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Let&apos;s talk about what you&apos;re trying to build.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        Share your idea, requirements, or current digital challenge and
        we can start with a clear conversation.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
      >
        Contact NexaBizz
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
</div>
);
}
