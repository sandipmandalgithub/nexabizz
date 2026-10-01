import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe2,
  HeartPulse,
  LockKeyhole,
  MonitorCheck,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Healthcare Websites",
    description:
      "Professional and accessible websites for hospitals, clinics, healthcare organizations, and health-focused businesses.",
    icon: Globe2,
  },
  {
    title: "Appointment Workflows",
    description:
      "Digital enquiry and appointment-request experiences that make it easier for users to connect with the organization.",
    icon: Workflow,
  },
  {
    title: "Information Portals",
    description:
      "Structured digital experiences for presenting services, departments, resources, FAQs, and other important information.",
    icon: FileText,
  },
  {
    title: "Patient-Focused Experiences",
    description:
      "Clear, responsive interfaces designed to help users find relevant information and complete common digital tasks.",
    icon: Users,
  },
  {
    title: "Custom Applications",
    description:
      "Business applications designed around internal workflows, operational requirements, and organization-specific processes.",
    icon: Code2,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Digital analytics and reporting capabilities that can help organizations understand website usage and business interactions.",
    icon: BarChart3,
  },
];

const challenges = [
  {
    title: "Information accessibility",
    description:
      "Healthcare organizations often need to present important information clearly across different devices and user groups.",
    icon: Search,
  },
  {
    title: "Complex workflows",
    description:
      "Appointments, enquiries, service information, and internal processes can involve multiple steps that benefit from structured digital workflows.",
    icon: Workflow,
  },
  {
    title: "User trust",
    description:
      "Clear communication, consistent design, accessibility, and responsible handling of information are important parts of digital healthcare experiences.",
    icon: ShieldCheck,
  },
  {
    title: "Operational efficiency",
    description:
      "Digital tools can help organize repetitive administrative activities and connect information across business processes.",
    icon: Settings2,
  },
];

const capabilities = [
  "Responsive healthcare websites",
  "Service and department information",
  "Appointment and enquiry forms",
  "Doctor or specialist profile sections",
  "FAQ and resource sections",
  "Custom internal applications",
  "API and database integration",
  "Analytics and reporting",
];

const principles = [
  {
    title: "Security-conscious design",
    description:
      "Use appropriate access controls, validation, secure configuration, and responsible data-handling practices for the application requirements.",
    icon: LockKeyhole,
  },
  {
    title: "Accessibility",
    description:
      "Design clear interfaces with readable content, logical navigation, responsive layouts, and accessible interaction patterns.",
    icon: MonitorCheck,
  },
  {
    title: "Reliable performance",
    description:
      "Build responsive experiences and consider performance throughout development, testing, and deployment.",
    icon: Gauge,
  },
  {
    title: "Clear information",
    description:
      "Structure services, resources, contact information, and other content so users can understand and navigate the experience easily.",
    icon: FileText,
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

export default function HealthcarePage() {
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
                Healthcare
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Digital experiences designed around healthcare needs.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps healthcare organizations create clear,
                responsive, and technology-driven digital experiences for
                information, communication, enquiries, and business
                operations.
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
                <HeartPulse className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                Connect people with the information they need.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A healthcare website or application should make important
                information easier to discover while supporting the
                organization&apos;s digital workflows.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Present services clearly",
                  "Improve digital accessibility",
                  "Simplify enquiries and requests",
                  "Support organized workflows",
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
              Digital Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Healthcare technology needs clarity, reliability, and care.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Healthcare organizations serve different audiences and manage
              different types of information. Their digital experiences need
              to balance usability, accessibility, operational requirements,
              and responsible technology practices.
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
              Healthcare Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build digital tools around real organizational workflows.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From a professional healthcare website to a custom internal
              application, the solution can be shaped around the
              organization&apos;s users, services, workflows, and technology
              requirements.
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
                <Activity className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Flexible building blocks for healthcare organizations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Select the capabilities that match the organization&apos;s
                current requirements and expand the platform as new digital
                needs emerge.
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

      {/* Principles */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Digital Experience Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Responsible technology from design to deployment.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Healthcare projects can involve sensitive workflows and
              important information. Technical decisions should therefore be
              aligned with the project&apos;s actual regulatory, security,
              privacy, and operational requirements.
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

      {/* Accessibility & Performance */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Smartphone className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Responsive Access
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Design experiences that work across smartphones, tablets,
                laptops, and desktop devices.
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
                Consider page performance, efficient assets, clean
                architecture, and reliable deployment throughout development.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Database className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Structured Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize content, application data, APIs, and workflows so
                information remains easier to manage and maintain.
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
                Modern technology for dependable digital experiences.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices should depend on the project scope,
                information requirements, integrations, security expectations,
                and long-term maintenance needs.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Healthcare projects should be reviewed against applicable
                  security, privacy, regulatory, and compliance requirements
                  before production use.
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
              A structured approach for healthcare technology projects.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We keep requirements, user experience, technical architecture,
              security considerations, testing, and deployment aligned
              throughout the project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand users, services, workflows, information needs, and project requirements.",
              },
              {
                number: "02",
                title: "Design",
                text: "Plan the information structure, user experience, features, and technical architecture.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Build, integrate, validate, and test the required website or application functionality.",
              },
              {
                number: "04",
                title: "Deploy",
                text: "Prepare the production environment, launch the solution, and support ongoing improvements.",
              },
            ].map((step) => (
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
                Healthcare Digital Solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a healthcare technology requirement?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your organization, users, workflows, and digital
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
