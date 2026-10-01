import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Settings2,
  Users,
  Workflow,
} from "lucide-react";

const challenges = [
  {
    title: "Lead management",
    description:
      "Professional service businesses need a structured way to capture, organize, and follow up with potential clients.",
    icon: Users,
  },
  {
    title: "Service presentation",
    description:
      "Services, expertise, and business capabilities need to be presented clearly so visitors can understand the offering.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Enquiry workflow",
    description:
      "Contact and enquiry information should move through a clear workflow instead of remaining scattered across different channels.",
    icon: FileText,
  },
  {
    title: "Business visibility",
    description:
      "The platform should provide useful information and structured workflows that support better day-to-day business operations.",
    icon: BarChart3,
  },
];

const solutions = [
  "Professional service presentation",
  "Lead and enquiry capture",
  "Structured contact workflows",
  "Service category organization",
  "Responsive business dashboard concept",
  "API-driven application structure",
  "Centralized business data",
  "Mobile-friendly user experience",
];

const capabilities = [
  {
    title: "Service management",
    description:
      "Organize services, descriptions, categories, and supporting information through a structured application.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Enquiry management",
    description:
      "Capture and organize customer enquiries so businesses can manage conversations and follow-up activities.",
    icon: FileText,
  },
  {
    title: "Business dashboard",
    description:
      "Provide a centralized interface for reviewing important business information and operational workflows.",
    icon: BarChart3,
  },
  {
    title: "Client experience",
    description:
      "Create a responsive public-facing experience that makes services and contact opportunities easy to understand.",
    icon: MonitorSmartphone,
  },
];

const architecture = [
  {
    title: "Frontend",
    description:
      "A responsive Next.js interface for service discovery, business information, enquiry forms, and customer-facing workflows.",
    icon: MonitorSmartphone,
  },
  {
    title: "Application layer",
    description:
      "TypeScript-based application logic connects user interactions, business rules, validation, and API communication.",
    icon: Code2,
  },
  {
    title: "Backend services",
    description:
      "API-driven services handle business workflows, enquiry operations, data processing, and application integrations.",
    icon: Workflow,
  },
  {
    title: "Database",
    description:
      "Structured PostgreSQL storage can support service records, enquiries, users, business information, and future application data.",
    icon: Database,
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
];

const experiencePoints = [
  {
    title: "Responsive design",
    description:
      "The interface is planned for mobile, tablet, laptop, and desktop experiences without depending on a single screen size.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clear information architecture",
    description:
      "Services, business information, enquiries, and actions are organized into understandable user journeys.",
    icon: Layers3,
  },
  {
    title: "Performance awareness",
    description:
      "The architecture considers efficient rendering, optimized assets, reusable components, and maintainable application structure.",
    icon: Gauge,
  },
  {
    title: "Security considerations",
    description:
      "Production implementations should apply authentication, authorization, input validation, secure configuration, and appropriate access controls.",
    icon: LockKeyhole,
  },
];

const futureScope = [
  "CRM integration",
  "Appointment scheduling",
  "Client accounts",
  "Document management",
  "Email notifications",
  "Business analytics",
  "Team management",
  "Third-party integrations",
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Identify the business model, service structure, customer journey, and operational requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define information architecture, user flows, data structures, APIs, and the technical foundation.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the responsive interface, backend services, business workflows, and database structure.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Test the application, refine usability, improve performance, and prepare the solution for deployment.",
  },
];

export default function BizFlowCaseStudyPage() {
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
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Professional Services
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                BizFlow
              </h1>

              <p className="mt-5 text-xl font-medium text-slate-700 sm:text-2xl">
                A digital business platform concept for professional service
                organizations.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                BizFlow is a portfolio project concept focused on helping
                professional service businesses organize their digital
                presence, capture enquiries, present services, and create
                structured internal workflows.
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
                <BriefcaseBusiness className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project Focus
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Business workflows + professional digital experience
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Service and business information",
                  "Lead and enquiry management",
                  "Responsive customer experience",
                  "Structured application architecture",
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
                Bringing business information and workflows into one digital
                experience.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Professional service organizations often need more than a
                simple brochure website. Their digital platform may need to
                explain services, capture leads, organize enquiries, and
                support internal business operations.
              </p>

              <p>
                BizFlow explores how those requirements can be connected
                through a modern full-stack application with a responsive
                public experience and structured business workflows.
              </p>

              <p>
                The concept is designed to demonstrate practical product
                thinking, application architecture, and business-focused
                software development.
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
              Challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Common digital workflow requirements.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              BizFlow focuses on the kinds of digital requirements that can
              appear when a professional service business wants to move from
              disconnected processes toward a more structured platform.
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
                Solution
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A connected platform for business operations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The BizFlow concept connects the public-facing business
                experience with structured backend workflows, creating a
                foundation that can grow beyond a traditional static website.
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
              Designed around real business workflows.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Different parts of the platform work together to support both
              the customer journey and internal business operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
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
              A modular foundation for a business application.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The architecture separates presentation, application logic,
              backend services, and data storage so individual areas can evolve
              without unnecessarily coupling the whole system.
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

      {/* Technology */}
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
                Modern tools for a maintainable business platform.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                BizFlow uses a TypeScript-oriented full-stack architecture
                designed for responsive interfaces, structured APIs, and
                relational business data.
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

      {/* Experience */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Experience &amp; Engineering
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built with usability and maintainability in mind.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The platform concept considers both the visitor experience and
              the technical requirements of a business application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experiencePoints.map((item) => {
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

      {/* Development Process */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From business requirement to working product.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
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
                Extend the platform as business needs grow.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Additional capabilities can be introduced depending on the
                organization&apos;s workflow, customer journey, team structure,
                and required integrations.
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
                  BizFlow is presented as a portfolio and development concept.
                  The information on this page describes a possible solution
                  approach and technical direction and does not claim specific
                  commercial results or completed work for a named client.
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
                Business Software Development
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Need a digital platform for your business?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Share your business workflows, service requirements, customer
                journey, and integration needs to explore a suitable digital
                solution.
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
