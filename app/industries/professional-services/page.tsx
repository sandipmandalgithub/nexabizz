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
  Globe2,
  Handshake,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  Search,
  Settings2,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Professional Business Websites",
    description:
      "Modern websites that communicate services, expertise, company information, and contact options clearly.",
    icon: Globe2,
  },
  {
    title: "Service & Expertise Pages",
    description:
      "Structured pages for presenting services, industries served, expertise, team profiles, and business capabilities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Lead & Enquiry Workflows",
    description:
      "Digital enquiry forms and structured contact journeys that make it easier for potential clients to connect.",
    icon: MessageSquare,
  },
  {
    title: "Client-Focused Portals",
    description:
      "Custom portals and applications for organizing client-facing information, documents, requests, or workflows.",
    icon: Users,
  },
  {
    title: "Business Dashboards",
    description:
      "Internal dashboards designed to organize operational information, tasks, enquiries, and business activity.",
    icon: LayoutDashboard,
  },
  {
    title: "Integrations & Automation",
    description:
      "Connect websites and applications with APIs, databases, business tools, and selected workflow automation.",
    icon: Workflow,
  },
];

const challenges = [
  {
    title: "Building digital credibility",
    description:
      "Professional service businesses need websites that communicate their expertise, services, experience, and business information clearly.",
    icon: Handshake,
  },
  {
    title: "Converting enquiries",
    description:
      "Potential clients need simple ways to understand services and take the next step through a call, enquiry, or consultation request.",
    icon: MessageSquare,
  },
  {
    title: "Managing information",
    description:
      "Services, projects, documents, enquiries, and client-related information can become difficult to manage without structured digital systems.",
    icon: Database,
  },
  {
    title: "Improving operations",
    description:
      "Custom software and workflow tools can help reduce repetitive tasks and organize recurring business processes.",
    icon: Settings2,
  },
];

const capabilities = [
  "Corporate and service websites",
  "Service and industry pages",
  "Team and expertise profiles",
  "Lead generation forms",
  "Consultation request workflows",
  "Client portals",
  "Internal dashboards",
  "API and database integration",
];

const principles = [
  {
    title: "Professional presentation",
    description:
      "Create a clean and structured digital presence that communicates services, expertise, and business information with clarity.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Conversion-focused journeys",
    description:
      "Make important actions such as enquiries, consultation requests, and contact interactions easy to discover.",
    icon: MessageSquare,
  },
  {
    title: "Scalable architecture",
    description:
      "Build applications with a structure that can support new services, users, workflows, integrations, and content over time.",
    icon: Code2,
  },
  {
    title: "Reliable performance",
    description:
      "Consider responsive design, efficient assets, maintainable code, and dependable deployment throughout the project.",
    icon: Gauge,
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
  "Vercel",
  "AWS",
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, services, target audience, workflows, existing systems, and project objectives.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Define the website structure, user journeys, features, content requirements, integrations, and technical architecture.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build the solution, integrate required services, test functionality, and refine the user experience.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Prepare the production environment, deploy the solution, monitor the result, and support future improvements.",
  },
];

export default function ProfessionalServicesPage() {
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
                Professional Services
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Digital solutions for service-driven businesses.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps consulting firms, agencies, advisory businesses,
                legal and accounting firms, and other professional service
                organizations build modern digital experiences and practical
                business applications.
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
                <BriefcaseBusiness className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                Turn expertise into a stronger digital experience.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A professional service website or application should help
                potential clients understand what the business does and make
                it simple to start a conversation.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Present services and expertise clearly",
                  "Build stronger digital journeys",
                  "Capture and organize enquiries",
                  "Support business operations",
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
              Business Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Professional services need digital clarity and efficient workflows.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Service businesses often rely on trust, expertise, communication,
              and recurring processes. Digital solutions can bring these
              elements together into a more structured business experience.
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
              Professional Services Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build a digital foundation around your business.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From a professional company website to a custom client portal or
              internal application, solutions can be designed around the
              organization&apos;s services, users, workflows, and growth plans.
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
                <Handshake className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Practical capabilities for modern service businesses.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Choose the capabilities that support the business today and
                expand the digital platform as services, clients, and
                operational requirements grow.
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

      {/* Client Experience */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Client Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Make it easier for potential clients to take the next step.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A clear client journey can help visitors understand your
                services, explore your expertise, and move naturally toward
                an enquiry or consultation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand services",
                  "Explore expertise and industries",
                  "Review team or company information",
                  "Submit an enquiry",
                  "Request a consultation",
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-5">
                  <Search className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Discover
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Help visitors find relevant services and information.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <BriefcaseBusiness className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Understand
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Communicate expertise and business capabilities.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <MessageSquare className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Connect
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Provide clear contact and enquiry opportunities.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <BarChart3 className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Improve
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use analytics and feedback to improve digital journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <LayoutDashboard className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Business Dashboards
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize enquiries, tasks, content, operational information,
                and other business-specific data through custom interfaces.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Database className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Integrations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Connect websites and applications with APIs, databases, and
                selected third-party business systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Performance
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build responsive experiences with efficient assets,
                maintainable architecture, and dependable deployment practices.
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
                Modern technology for professional business platforms.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices can be aligned with the business model,
                application complexity, integrations, performance needs, and
                long-term maintenance requirements.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Applications that handle accounts, client information, or
                  business data should use appropriate authentication,
                  authorization, validation, and security practices.
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
              Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A structured process from business goals to launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We keep business objectives, user experience, technical
              architecture, testing, and deployment aligned throughout the
              project.
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
                Professional Services Digital Solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a digital requirement for your service business?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your services, clients, workflows, and digital
                goals. We can explore a suitable technology approach around
                your requirements.
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
