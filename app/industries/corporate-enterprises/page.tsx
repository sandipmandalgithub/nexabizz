import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  Network,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Corporate Websites",
    description:
      "Professional corporate websites designed to communicate company information, capabilities, services, locations, and business updates clearly.",
    icon: Globe2,
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Custom web applications built around internal workflows, operational requirements, user roles, and organization-specific processes.",
    icon: Layers3,
  },
  {
    title: "Business Dashboards",
    description:
      "Centralized dashboards for organizing operational information, reports, activities, and business-specific data.",
    icon: LayoutDashboard,
  },
  {
    title: "System Integrations",
    description:
      "Connect applications with APIs, databases, cloud services, and existing business systems where required.",
    icon: Network,
  },
  {
    title: "Workflow Automation",
    description:
      "Digitize repetitive processes and create structured workflows that can help teams manage routine operations more efficiently.",
    icon: Workflow,
  },
  {
    title: "Cloud & Digital Infrastructure",
    description:
      "Modern deployment approaches for scalable web applications, APIs, databases, and business platforms.",
    icon: Cloud,
  },
];

const challenges = [
  {
    title: "Complex business processes",
    description:
      "Enterprise organizations can have multiple teams, workflows, systems, and approval processes that require structured digital solutions.",
    icon: Workflow,
  },
  {
    title: "Disconnected systems",
    description:
      "Information spread across different applications can create unnecessary manual work and make business processes harder to manage.",
    icon: Network,
  },
  {
    title: "Multiple user roles",
    description:
      "Different teams and responsibilities may require different levels of access, interfaces, and application capabilities.",
    icon: Users,
  },
  {
    title: "Scale & reliability",
    description:
      "Business-critical applications need thoughtful architecture, testing, monitoring, and deployment practices as usage grows.",
    icon: Gauge,
  },
];

const capabilities = [
  "Corporate websites",
  "Enterprise web applications",
  "Role-based dashboards",
  "Internal business tools",
  "API integrations",
  "Database-driven applications",
  "Workflow automation",
  "Cloud deployment",
];

const principles = [
  {
    title: "Scalable architecture",
    description:
      "Design application structures that can evolve with additional users, features, integrations, and business requirements.",
    icon: Layers3,
  },
  {
    title: "Security-conscious development",
    description:
      "Use appropriate authentication, authorization, validation, secure configuration, and access-control practices.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable operations",
    description:
      "Consider testing, monitoring, error handling, deployment processes, and maintainability throughout development.",
    icon: Activity,
  },
  {
    title: "Integration-ready systems",
    description:
      "Build APIs and application boundaries that can connect with other business systems when required.",
    icon: Network,
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
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Docker",
  "AWS",
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand business objectives, teams, workflows, existing systems, users, integrations, and technical requirements.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Define application structure, user roles, data flows, integrations, technology choices, and deployment requirements.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build the solution in manageable stages, integrate required systems, test functionality, and validate the workflows.",
  },
  {
    number: "04",
    title: "Deploy",
    text: "Prepare production infrastructure, launch the application, monitor the environment, and support future improvements.",
  },
];

export default function CorporateEnterprisesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                All Industries
              </Link>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Corporate &amp; Enterprise
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Digital systems built for complex business environments.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps corporate and enterprise organizations build
                scalable websites, business applications, dashboards,
                integrations, and workflow-driven digital solutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                Bring business systems together.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Enterprise technology often needs to connect people,
                processes, information, and existing systems through a
                dependable digital architecture.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Connect business workflows",
                  "Organize operational information",
                  "Support multiple user roles",
                  "Build for long-term scalability",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Enterprise Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Complex organizations need structured digital foundations.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Corporate environments often involve multiple departments,
              systems, roles, data sources, and processes. Technology needs to
              work within that complexity while remaining maintainable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-slate-200 p-7 sm:p-8"
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

      {/* Solutions */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Corporate &amp; Enterprise Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology aligned with business operations.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From corporate websites to internal business platforms, digital
              solutions can be designed around the organization&apos;s
              workflows, teams, systems, and long-term technology direction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Network className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Build the right capabilities around your business.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Enterprise projects can combine multiple capabilities into a
                connected digital platform based on business priorities and
                technical requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
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

      {/* Architecture */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Architecture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Connect users, applications, data, and workflows.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A well-planned architecture can provide clear boundaries
                between the user interface, application logic, APIs, data
                systems, integrations, and infrastructure.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Frontend applications",
                  "Backend services and APIs",
                  "Databases and structured data",
                  "Third-party integrations",
                  "Cloud infrastructure",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                  <Globe2 className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-950">
                      User Experience
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Websites, portals, and dashboards
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                  <Code2 className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-950">
                      Application Layer
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Business logic and APIs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                  <Database className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-950">
                      Data Layer
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Databases and structured information
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                  <Cloud className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-950">
                      Infrastructure
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Deployment, hosting, and cloud services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Engineering Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build for today while keeping tomorrow in mind.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Enterprise applications can evolve significantly over time.
              Architecture and engineering decisions should therefore consider
              maintainability, security, scalability, and integration needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Performance */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <LockKeyhole className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Access Control
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Design authentication and authorization around the application
                roles, responsibilities, and information requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Performance
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Consider application performance, efficient data access,
                caching strategies, asset optimization, and infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <FileText className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Documentation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Maintain clear technical and operational documentation to
                support future development and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A modern stack for business-critical applications.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology decisions should be based on application
                complexity, team requirements, integrations, performance,
                infrastructure, and long-term maintenance.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Production enterprise systems should be reviewed against
                  their applicable security, privacy, regulatory, compliance,
                  and organizational requirements.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Technology Landscape
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Enterprise Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Structured engineering from discovery to deployment.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We break complex requirements into manageable stages while
              keeping architecture, workflows, integrations, testing, and
              deployment aligned.
            </p>
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

                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Corporate &amp; Enterprise Digital Solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a complex technology requirement?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your systems, workflows, users, integrations,
                and business goals. We can explore a suitable digital
                architecture around your requirements.
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
