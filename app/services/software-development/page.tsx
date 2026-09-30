import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Cog,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Puzzle,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const softwareSolutions = [
  {
    icon: AppWindow,
    title: "Business Applications",
    description:
      "Custom software applications designed around the workflows, processes, and operational requirements of your business.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web-Based Software",
    description:
      "Browser-based platforms that give teams and customers convenient access to business functionality from modern devices.",
  },
  {
    icon: Database,
    title: "Data-Driven Systems",
    description:
      "Software solutions that organize, process, search, and manage business information through structured data systems.",
  },
  {
    icon: Puzzle,
    title: "Custom Integrations",
    description:
      "Connect your software with APIs, databases, third-party services, and existing digital systems when required.",
  },
];

const capabilities = [
  "Custom business applications",
  "Admin and management dashboards",
  "User authentication and authorization",
  "Role-based access control",
  "Database-driven functionality",
  "REST API integration",
  "Search and filtering",
  "Reports and analytics",
  "Forms and validation",
  "File and document handling",
  "Workflow management",
  "Scalable application architecture",
];

const applicationTypes = [
  {
    icon: BarChart3,
    title: "Management Systems",
    description:
      "Centralize business information, workflows, records, and operational activities in one structured application.",
  },
  {
    icon: Settings2,
    title: "Internal Tools",
    description:
      "Build purpose-specific tools that help teams manage repetitive processes, information, and internal operations.",
  },
  {
    icon: Server,
    title: "Business Portals",
    description:
      "Create secure portals for customers, employees, partners, or other users who need access to specific services.",
  },
  {
    icon: Cog,
    title: "Workflow Platforms",
    description:
      "Turn business processes into structured digital workflows with defined users, actions, statuses, and rules.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Improve Efficiency",
    description:
      "Replace disconnected manual processes with structured software that helps teams manage work more consistently.",
  },
  {
    icon: Layers3,
    title: "Centralize Operations",
    description:
      "Bring important business information and workflows together in a system designed around your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Support Better Control",
    description:
      "Use authentication, permissions, validation, and structured workflows to control access and business operations.",
  },
  {
    icon: Rocket,
    title: "Prepare for Growth",
    description:
      "Build a technical foundation that can evolve as your users, features, data, and business requirements increase.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business objectives, users, workflows, existing systems, technical requirements, and expected outcomes.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define the application structure, modules, data model, user roles, integrations, and technical approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the interface, backend logic, database integration, authentication, APIs, and required business functionality.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "We test important workflows, fix issues, refine the experience, and prepare the application for deployment and future development.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Cloud Services",
];

const architecturePoints = [
  "Modular application structure",
  "Secure authentication flows",
  "Role-based permissions",
  "Validated data handling",
  "API-based integrations",
  "Database-backed functionality",
  "Responsive interfaces",
  "Scalable deployment approach",
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Code2 className="h-3.5 w-3.5" />
                Software Development
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Custom software built around the way your business works.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We build practical software solutions for businesses that need
                custom workflows, structured data, secure access, integrations,
                and functionality beyond a standard website.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Start a Software Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <AppWindow className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Software designed for real business requirements.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                From internal management tools to customer portals and
                workflow platforms, we build software around your users,
                processes, data, and long-term requirements.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Applications", "Dashboards", "APIs", "Databases"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What We Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Software solutions shaped around your business.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Custom software gives businesses the flexibility to create
              workflows and functionality that fit their specific operational
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {softwareSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Layers3 className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Software Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The building blocks for modern business software.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              We can combine interface, backend, database, authentication, and
              integration capabilities into a solution built around your
              business requirements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Types */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Application Types
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Software for different business needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The right application structure depends on what your teams,
              customers, and business processes need to accomplish.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applicationTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
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

      {/* Benefits */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Build software around the way your business operates.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Custom software can bring workflows, information, users, and
                business rules together in a system designed specifically for
                your requirements.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Development Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From business requirement to working software.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We use a structured development approach that keeps the software
              aligned with your business goals, users, technical requirements,
              and future needs.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-slate-500">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Cloud className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Modern technology for maintainable software.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices depend on the application requirements,
                expected scale, integrations, data model, team needs, and
                long-term maintenance considerations.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-center text-sm font-semibold text-slate-700"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Server className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Application Architecture
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Structure your software for long-term development.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                A thoughtful technical foundation makes it easier to maintain
                the application, introduce new functionality, manage access,
                and connect additional systems as requirements evolve.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <ShieldCheck className="h-5 w-5 text-slate-800" />

                <h3 className="text-lg font-bold text-slate-950">
                  Core Architecture Areas
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {architecturePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                    <span className="text-sm leading-6 text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <LockKeyhole className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Security & Control
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Build with access, validation, and control in mind.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Depending on the project, software can include authentication,
              authorization, role-based permissions, input validation,
              protected APIs, and structured data handling to support safer
              business operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Build Custom Software
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have a software requirement? Let&apos;s build a solution around it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your business process, users, required features,
            integrations, and goals. We can help turn the requirement into a
            practical software solution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start a Software Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}