import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  ShoppingCart,
  Smartphone,
  Workflow,
} from "lucide-react";

const caseStudies = [
  {
    title: "NexaCart",
    category: "E-commerce",
    summary:
      "A full-stack e-commerce concept focused on product discovery, shopping workflows, responsive customer experiences, and scalable application architecture.",
    challenge:
      "Create a modern commerce experience that brings products, customer interactions, and business workflows into one digital platform.",
    solution:
      "A responsive e-commerce architecture combining a modern frontend, backend APIs, database-driven product management, and structured shopping flows.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    icon: ShoppingCart,
  },
  {
    title: "BizFlow",
    category: "Professional Services",
    summary:
      "A professional services platform concept designed around business information, operational workflows, structured dashboards, and digital client experiences.",
    challenge:
      "Create a centralized digital experience that can support business operations while keeping information easy to manage and access.",
    solution:
      "A modern web application concept combining structured business workflows, dashboard interfaces, responsive design, and a database-backed architecture.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    icon: Workflow,
  },
  {
    title: "NexaCorp",
    category: "Corporate & Enterprise",
    summary:
      "A corporate digital platform concept focused on professional presentation, scalable architecture, business information, and enterprise-oriented interfaces.",
    challenge:
      "Design a digital platform that communicates corporate information clearly while providing a foundation for future business capabilities.",
    solution:
      "A responsive corporate platform structure using reusable components, modern frontend architecture, and integration-ready application patterns.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: Globe2,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Identify the business objective, target users, workflows, technical requirements, and expected outcomes.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the information architecture, user journeys, interface structure, and technical direction.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution using appropriate technologies, reusable components, APIs, and data structures.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Test the product, refine the experience, optimize performance, and prepare for future requirements.",
    icon: CheckCircle2,
  },
];

const capabilities = [
  "Responsive web applications",
  "E-commerce platforms",
  "Corporate websites",
  "Business dashboards",
  "API-driven applications",
  "Database-backed systems",
  "Workflow-focused products",
  "Mobile-friendly experiences",
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Projects
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Case Studies
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              From business challenges to digital solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore selected portfolio concepts and see how business
              requirements can be translated into structured digital products,
              user experiences, and technical solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Discuss a Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Selected Case Studies
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Three different business scenarios.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These case studies are portfolio concepts created to demonstrate
              product thinking, technical architecture, responsive design, and
              business-focused development.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                    <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-slate-950 p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.22),transparent_45%)]" />

                      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-700 bg-slate-900 text-white">
                        <Icon className="h-10 w-10" />
                      </div>

                      <span className="absolute left-7 top-7 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300">
                        Case Study {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="absolute bottom-7 left-7 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900">
                        {study.category}
                      </span>
                    </div>

                    <div className="p-7 sm:p-9 lg:p-10">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                        {study.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {study.summary}
                      </p>

                      <div className="mt-8 grid gap-7 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Challenge
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Solution
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 border-t border-slate-200 pt-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Technology
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <LayoutDashboard className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Solutions can be shaped around the business.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A project can combine different digital capabilities depending
                on its users, workflows, business objectives, integrations,
                and technical requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm leading-6 text-slate-700">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Case Study Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Understand. Design. Build. Improve.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our project thinking connects business requirements with
              practical design and technology decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Note */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  About these case studies
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The case studies on this page are portfolio concepts and
                  development examples. They are intended to demonstrate
                  solution design, technical capabilities, and product
                  thinking, and should not be interpreted as claims of work
                  completed for a named client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Your Next Project
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s turn your business requirement into a digital
                solution.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Share your idea, business goals, users, workflows, or
                technical requirements and let&apos;s explore the right
                approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
