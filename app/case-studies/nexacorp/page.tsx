import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const challenges = [
  {
    title: "Fragmented digital presence",
    description:
      "Organizations may need a consistent digital experience across company information, service pages, business enquiries, and customer touchpoints.",
    icon: Globe2,
  },
  {
    title: "Complex business workflows",
    description:
      "Different departments and business processes can require structured workflows, clear responsibilities, and connected application services.",
    icon: Workflow,
  },
  {
    title: "Data organization",
    description:
      "Business information needs a consistent structure so application features and future integrations can work with reliable data.",
    icon: Database,
  },
  {
    title: "Security and maintainability",
    description:
      "Enterprise-oriented applications need planned access controls, secure configuration, maintainable code, and a foundation for future changes.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    title: "Corporate website",
    description:
      "Present company information, business capabilities, services, industries, and contact options through a structured digital experience.",
    icon: Building2,
  },
  {
    title: "Business enquiry management",
    description:
      "Capture and organize incoming enquiries to support a more structured process for reviewing and responding to business opportunities.",
    icon: Network,
  },
  {
    title: "Centralized information",
    description:
      "Use a consistent content and data structure for business information, service descriptions, and application records.",
    icon: Database,
  },
  {
    title: "Responsive experience",
    description:
      "Provide interfaces that adapt to mobile, tablet, laptop, and desktop screens for different visitor needs.",
    icon: MonitorSmartphone,
  },
  {
    title: "Integration readiness",
    description:
      "Plan API boundaries and application interfaces so suitable third-party systems can be integrated when required.",
    icon: Workflow,
  },
  {
    title: "Maintainable architecture",
    description:
      "Organize components, application logic, and data access into clear responsibilities to support ongoing development.",
    icon: Layers3,
  },
];

const solutions = [
  "Structured corporate information",
  "Service and capability presentation",
  "Responsive page layouts",
  "Business enquiry workflows",
  "Reusable interface components",
  "API-oriented architecture",
  "Centralized data organization",
  "Future integration planning",
];

const architecture = [
  {
    title: "Presentation layer",
    description:
      "A Next.js and React interface for corporate pages, service information, responsive navigation, and enquiry journeys.",
    icon: MonitorSmartphone,
  },
  {
    title: "Application layer",
    description:
      "TypeScript and reusable components organize interface logic, validation, data flow, and application behavior.",
    icon: Code2,
  },
  {
    title: "API and integration layer",
    description:
      "Well-defined API boundaries can connect the frontend to backend services, business workflows, and approved external systems.",
    icon: Network,
  },
  {
    title: "Data layer",
    description:
      "A relational database such as PostgreSQL can organize structured company information, enquiries, user records, and other application data.",
    icon: Database,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "REST APIs",
  "Git & GitHub",
  "Vercel",
];

const engineeringPrinciples = [
  {
    title: "Security by design",
    description:
      "Production implementations should use appropriate authentication, authorization, server-side validation, secure secrets, and controlled access to sensitive information.",
    icon: LockKeyhole,
  },
  {
    title: "Performance awareness",
    description:
      "Consider efficient rendering, optimized assets, appropriate caching, and responsive page structures when designing the application.",
    icon: Gauge,
  },
  {
    title: "Maintainable code",
    description:
      "Use reusable components, clear naming, separated responsibilities, and consistent project conventions to make future changes easier.",
    icon: Code2,
  },
  {
    title: "Scalable foundations",
    description:
      "Keep application boundaries and data structures clear so additional features can be introduced as requirements evolve.",
    icon: Layers3,
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the organization, its audience, business goals, content needs, and required workflows.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Plan page structure, user journeys, reusable components, data models, APIs, and integration boundaries.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the responsive interface and implement the application features according to the agreed requirements.",
  },
  {
    number: "04",
    title: "Testing & launch",
    description:
      "Test core flows, responsive layouts, validation, accessibility basics, and deployment configuration before release.",
  },
];

const futureScope = [
  "Role-based administration",
  "Content management",
  "CRM integration",
  "Document workflows",
  "Department dashboards",
  "Business analytics",
  "Notification services",
  "Third-party integrations",
];

export default function NexaCorpCaseStudyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Case Studies
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                <Building2 className="h-3.5 w-3.5" />
                Corporate &amp; Enterprise
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                NexaCorp
              </h1>

              <p className="mt-5 text-xl font-medium text-slate-700 sm:text-2xl">
                A corporate digital platform concept for modern organizations.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                NexaCorp explores how a modern corporate website and
                application foundation can bring business information, service
                presentation, enquiries, and future digital workflows together
                in one structured experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Build a Similar Solution
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-950">
                <Building2 className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project Focus
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Corporate experience + connected digital workflows
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Professional corporate presentation",
                  "Structured business information",
                  "Enquiry and workflow planning",
                  "Maintainable application architecture",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                    <span className="text-sm leading-6 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A structured digital foundation for corporate communication
                and business operations.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                A corporate digital platform can serve several purposes:
                communicating company information, presenting services,
                supporting customer enquiries, and providing a foundation for
                additional business applications.
              </p>

              <p>
                NexaCorp explores how these needs can be organized into a
                coherent digital experience with reusable interface
                components, structured content, and clearly defined application
                responsibilities.
              </p>

              <p>
                The concept emphasizes practical software design, responsive
                presentation, maintainability, and the ability to extend the
                platform when new business requirements emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Enterprise Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Common requirements for corporate digital platforms.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The NexaCorp concept considers common challenges involved in
              presenting business information and preparing a website for
              future application capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Proposed Digital Solution
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A consistent experience with room to grow.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The proposed approach connects corporate content, customer
                touchpoints, and application architecture. Specific features
                can be selected according to an organization&apos;s actual
                requirements and operational needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm leading-6 text-slate-700">
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Digital capabilities built around business needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These capabilities describe possible parts of the NexaCorp
              concept. The final scope of a real implementation would depend
              on the organization&apos;s requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      {/* Architecture */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Technical Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Separate responsibilities across the application.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A layered architecture helps organize the user interface,
              application behavior, integrations, and data storage. The exact
              implementation can be adjusted to the scale and needs of the
              business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {architecture.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      {/* Technology Stack */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Technology Stack
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A modern foundation for corporate applications.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The proposed stack combines a React-based frontend with
                TypeScript, structured data storage, API integration, and a
                deployment workflow suited to a modern web application.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Security, Performance &amp; Maintainability
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Engineering considerations for a dependable platform.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These principles guide the proposed implementation. Production
              readiness would require appropriate implementation, testing, and
              verification of each relevant requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {engineeringPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      {/* Development Approach */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From requirements to a deployable solution.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-slate-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">
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

      {/* Future Scope */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Settings2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Future Scope
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Expand capabilities as requirements evolve.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Depending on business needs, the platform could be extended
                with additional administrative tools, integrations, and
                workflow features. Each addition should be scoped and tested
                before production use.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {futureScope.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
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
                  Portfolio concept
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  NexaCorp is presented as a portfolio and development
                  concept. This page describes a proposed digital solution and
                  technical approach; it does not claim specific commercial
                  results or completed work for a named client.
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
                Corporate Digital Solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Planning a digital platform for your organization?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Share your business goals, digital requirements, workflows,
                and integration needs to explore a suitable solution.
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
