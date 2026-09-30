import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Webhook,
} from "lucide-react";

const backendSolutions = [
  {
    icon: Globe2,
    title: "REST API Development",
    description:
      "Structured APIs that allow websites, mobile applications, dashboards, and other systems to communicate with your backend.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Server-side applications that handle business logic, authentication, data processing, integrations, and application workflows.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Connect applications with structured databases to store, retrieve, validate, and manage business information.",
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Connect your application with third-party services, internal systems, APIs, webhooks, and external platforms.",
  },
];

const capabilities = [
  "REST API development",
  "Backend application development",
  "API endpoint design",
  "Authentication and authorization",
  "Role-based access control",
  "Database integration",
  "CRUD operations",
  "Input validation",
  "Error handling",
  "Third-party API integration",
  "Webhook integration",
  "API documentation",
];

const architectureFeatures = [
  {
    icon: Layers3,
    title: "Structured Architecture",
    description:
      "Organize routes, controllers, services, models, validation, and business logic into maintainable application layers.",
  },
  {
    icon: Database,
    title: "Reliable Data Layer",
    description:
      "Connect backend services with databases using appropriate data models, queries, validation, and structured data handling.",
  },
  {
    icon: GitBranch,
    title: "Versioned APIs",
    description:
      "Structure APIs so future changes can be introduced in a controlled way while keeping integrations easier to maintain.",
  },
  {
    icon: Webhook,
    title: "Event-Based Integrations",
    description:
      "Use webhooks and event-driven interactions where appropriate to connect external services with your application.",
  },
];

const securityFeatures = [
  {
    icon: KeyRound,
    title: "Authentication",
    description:
      "Support secure user authentication flows for applications that require controlled access.",
  },
  {
    icon: ShieldCheck,
    title: "Authorization",
    description:
      "Organize permissions and role-based access so users can access only the functionality relevant to them.",
  },
  {
    icon: LockKeyhole,
    title: "Protected APIs",
    description:
      "Apply appropriate access controls, validation, and request handling to protect important backend functionality.",
  },
  {
    icon: CheckCircle2,
    title: "Validated Data",
    description:
      "Validate incoming data and business rules before processing or storing information in the system.",
  },
];

const performanceFeatures = [
  "Efficient database queries",
  "Structured API responses",
  "Pagination and filtering",
  "Caching-ready architecture",
  "Asynchronous processing",
  "Scalable backend structure",
  "Error and exception handling",
  "Monitoring-ready implementation",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your application, users, data requirements, integrations, business rules, and API consumers.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define endpoints, data models, authentication, permissions, business logic, error handling, and integration requirements.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We implement the backend services, APIs, database integration, authentication, validation, and required functionality.",
  },
  {
    number: "04",
    title: "Test & Integrate",
    description:
      "We test important endpoints and workflows, verify integrations, resolve issues, and prepare the backend for deployment.",
  },
];

const technologies = [
  "Node.js",
  "Express.js",
  "Next.js",
  "TypeScript",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
];

export default function ApiBackendDevelopmentPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Code2 className="h-3.5 w-3.5" />
                API & Backend Development
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Reliable backend systems that power modern digital products.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We build structured backend services and APIs that connect
                applications with business logic, databases, users, and
                external systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Start an API Project
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
                <Server className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                The backend foundation behind your digital experience.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Build the services that handle users, data, business rules,
                authentication, integrations, and communication between your
                digital products.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["REST APIs", "Databases", "Security", "Integrations"].map(
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
              Backend solutions designed around your application.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From individual APIs to complete backend services, we create
              structured foundations that support websites, mobile apps,
              dashboards, and business platforms.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {backendSolutions.map((solution) => {
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
              <Network className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Backend Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The core services your application needs behind the interface.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              We can combine APIs, databases, authentication, validation,
              integrations, and business logic into a backend structure built
              around your requirements.
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

      {/* Architecture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Backend Architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Structured backend architecture for maintainable systems.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A well-organized backend makes it easier to understand the
              application, maintain business logic, introduce new features,
              and connect additional systems over time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {architectureFeatures.map((feature) => {
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

      {/* Security */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                API Security
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Build APIs with access control and validation in mind.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Depending on the project, backend services can include
                authentication, authorization, protected routes, input
                validation, and structured error handling.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
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
        </div>
      </section>

      {/* Performance */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Performance & Scalability
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Prepare the backend for growing application needs.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Backend architecture should consider how data is accessed,
                processed, and delivered so the application can evolve as
                functionality and usage increase.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {performanceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Activity className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Webhook className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Integrations
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Connect your backend with the systems you already use.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                APIs can act as the connection layer between your application
                and external services, business tools, databases, payment
                systems, communication platforms, or other digital products.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Third-party API integrations",
                  "Webhook-based communication",
                  "Database connections",
                  "External service integrations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <Globe2 className="h-5 w-5 text-slate-800" />

                <h3 className="text-lg font-bold text-slate-950">
                  Example API Flow
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Client sends a request",
                  "API validates the request",
                  "Business logic processes the data",
                  "Database or external service is accessed",
                  "API returns a structured response",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      {index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
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
              From API requirement to reliable backend service.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We follow a structured development process to keep the backend
              aligned with application requirements, data needs, integrations,
              and future development.
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
                Modern backend technologies for connected applications.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices depend on the application, data model,
                expected usage, integrations, hosting environment, and
                long-term maintenance requirements.
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

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Build Your Backend
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Need a reliable API or backend system? Let&apos;s build it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your application, users, data, integrations, and
            backend requirements. We can help design and build the services
            behind your digital product.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start an API Project
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
