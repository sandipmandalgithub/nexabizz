import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Rocket,
  Settings2,
  Users,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "Business Applications",
    description:
      "Purpose-built web applications designed around the unique workflows, processes, and operational requirements of your business.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Portals",
    description:
      "Centralized dashboards and portals that help teams access information, monitor activity, and manage business operations.",
  },
  {
    icon: Database,
    title: "Data Management Systems",
    description:
      "Structured applications for collecting, managing, searching, updating, and working with business data.",
  },
  {
    icon: Settings2,
    title: "Workflow Applications",
    description:
      "Digital workflows that can help organize repetitive processes, approvals, tasks, and internal business operations.",
  },
];

const capabilities = [
  "Custom business logic",
  "User authentication",
  "Role-based access",
  "Admin dashboards",
  "Data management",
  "Search and filtering",
  "Forms and validation",
  "REST API integration",
  "Database integration",
  "Reporting-ready architecture",
  "Responsive interfaces",
  "Scalable application structure",
];

const applicationFeatures = [
  {
    icon: LockKeyhole,
    title: "Authentication & Security",
    description:
      "Create structured authentication and authorization flows so application features can be accessed according to defined user roles and permissions.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Support different types of users with role-based experiences and access to the features relevant to their responsibilities.",
  },
  {
    icon: Database,
    title: "Data & Database Integration",
    description:
      "Connect the application to structured databases and APIs to store, retrieve, update, and manage business information.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused UX",
    description:
      "Build interfaces that keep important information and actions easy to access while maintaining a practical and responsive experience.",
  },
];

const businessBenefits = [
  {
    icon: Workflow,
    title: "Digitize Business Processes",
    description:
      "Move manual or disconnected workflows into a structured digital application designed around how your team works.",
  },
  {
    icon: BarChart3,
    title: "Centralize Information",
    description:
      "Bring important business information into one application so teams can work from a more organized source of data.",
  },
  {
    icon: Settings2,
    title: "Improve Operational Workflows",
    description:
      "Create repeatable digital processes for tasks, approvals, records, reporting, and day-to-day business operations.",
  },
  {
    icon: Layers3,
    title: "Prepare for Future Growth",
    description:
      "Build a flexible foundation that can accommodate additional modules, integrations, users, and business requirements.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business process, users, pain points, required features, data, and application goals.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define the application structure, user roles, data flow, APIs, database approach, and technical architecture.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the frontend, backend services, business logic, database integration, authentication, and required functionality.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test workflows, permissions, responsiveness, APIs, data handling, and core functionality before deployment.",
  },
];

const technologyAreas = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
];

export default function CustomWebApplicationsPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Code2 className="h-3.5 w-3.5" />
                Custom Web Applications
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Custom web applications built around your business.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We build purpose-driven web applications that help businesses
                digitize workflows, manage information, connect systems, and
                create more structured digital operations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Application
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
                <Layers3 className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Software shaped around the way your business works.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Instead of forcing your workflow into a generic platform, a
                custom application can be designed around your users, data,
                processes, and operational requirements.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Workflows", "Users", "Data", "APIs"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
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
              Applications designed for real business requirements.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From internal business tools to customer-facing platforms, we
              create applications around the processes and functionality your
              business actually needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
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
              <Settings2 className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Application Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Flexible functionality for complex requirements.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Custom applications can combine user interfaces, business
              logic, APIs, databases, authentication, and workflows into one
              connected digital system.
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

      {/* Application Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Core Application Features
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A strong foundation behind every application.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The application architecture is designed to support the
              technical and operational requirements that matter to your
              business.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applicationFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turn business processes into digital workflows.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A custom application can provide a centralized environment
                where teams, information, workflows, and business logic work
                together.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {businessBenefits.map((benefit) => {
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
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From business requirement to working application.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We break the application development process into clear stages
              so requirements, architecture, functionality, and testing remain
              aligned.
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
                <Database className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology selected around the application.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The technology stack can be adapted to the applications
                functionality, data requirements, integrations, expected
                scale, and long-term maintenance needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technologyAreas.map((technology) => (
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

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Build Your Application
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have a business process that needs a digital solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your workflow, users, data, and business
            requirements. We can turn your idea into a structured custom web
            application.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Discuss Your Application
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
