import Link from "next/link";
import {
ArrowRight,
BarChart3,
CheckCircle2,
Cloud,
Code2,
Cog,
Database,
Gauge,
GitBranch,
Layers3,
Lightbulb,
LockKeyhole,
MonitorCheck,
Network,
Rocket,
Server,
Settings2,
ShieldCheck,
Workflow,
} from "lucide-react";

const consultingSolutions = [
{
icon: Lightbulb,
title: "Technology Strategy",
description:
"Plan practical technology solutions that align digital initiatives with business goals and long-term growth.",
},
{
icon: Code2,
title: "Application Consulting",
description:
"Evaluate application requirements, architecture, technologies, and development approaches for new or existing systems.",
},
{
icon: Network,
title: "System Integration",
description:
"Connect applications, APIs, databases, and third-party services to create more efficient digital workflows.",
},
{
icon: Cloud,
title: "Cloud & Infrastructure",
description:
"Plan and improve cloud environments, deployment workflows, hosting architecture, and technical infrastructure.",
},
{
icon: Database,
title: "Data & Database Solutions",
description:
"Review database structures, data flows, integrations, and application requirements for reliable data management.",
},
{
icon: Workflow,
title: "Digital Process Improvement",
description:
"Identify opportunities to simplify manual processes through better systems, integrations, and automation.",
},
];

const consultingCapabilities = [
"Technology stack evaluation",
"Application architecture planning",
"Project technical discovery",
"API and integration planning",
"Cloud architecture guidance",
"Database planning",
"Performance reviews",
"Security-focused technical reviews",
"Development roadmap planning",
"Legacy system improvement",
"Technical documentation",
"Deployment and infrastructure guidance",
];

const architectureAreas = [
{
icon: Layers3,
title: "Application Architecture",
description:
"Plan scalable application structures with clear separation of frontend, backend, services, and data layers.",
},
{
icon: Server,
title: "Backend & API Architecture",
description:
"Review APIs, services, authentication, integrations, and backend components according to project requirements.",
},
{
icon: Database,
title: "Data Architecture",
description:
"Plan practical database structures and data flows that support application functionality and future growth.",
},
{
icon: Cloud,
title: "Cloud Architecture",
description:
"Evaluate hosting, deployment, storage, and infrastructure options for modern digital applications.",
},
];

const businessAreas = [
"New digital product planning",
"Website and application modernization",
"Internal business systems",
"E-commerce platforms",
"Customer portals",
"API integrations",
"Business automation",
"Cloud migration planning",
"Performance improvement",
"Technology upgrades",
];

const consultingProcess = [
{
number: "01",
title: "Understand",
description:
"We learn about the business, existing technology, objectives, challenges, and project requirements.",
},
{
number: "02",
title: "Assess",
description:
"Current systems, workflows, technologies, and technical constraints are reviewed.",
},
{
number: "03",
title: "Plan",
description:
"We define practical technical options, architecture directions, priorities, and implementation steps.",
},
{
number: "04",
title: "Implement",
description:
"Where required, the recommended solution can be developed, integrated, deployed, or improved.",
},
{
number: "05",
title: "Improve",
description:
"Technology decisions are reviewed over time as business requirements and digital needs evolve.",
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
"Git & GitHub",
"Docker",
"Vercel",
"AWS",
];

const businessBenefits = [
"Make technology decisions with clearer requirements",
"Choose solutions aligned with business objectives",
"Reduce unnecessary technical complexity",
"Create practical development roadmaps",
"Improve existing digital systems",
"Plan scalable application architecture",
"Connect systems and business workflows",
"Prepare technology for future growth",
];

const securityAreas = [
{
icon: ShieldCheck,
title: "Security by Design",
description:
"Consider authentication, authorization, data protection, and secure application practices during technical planning.",
},
{
icon: LockKeyhole,
title: "Access & Controls",
description:
"Review access patterns, application permissions, and environment configuration as part of technical assessment.",
},
{
icon: MonitorCheck,
title: "Operational Reliability",
description:
"Consider monitoring, backups, deployment processes, and recovery requirements when planning digital systems.",
},
];

export default function ITConsultingPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"> <div className="max-w-4xl"> <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"> <Settings2 className="h-4 w-4" />
IT Consulting & Technology Solutions </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Make Better Technology
          <span className="block text-slate-500">
            Decisions for Your Business
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Practical technology consulting for businesses that need help
          planning, improving, integrating, or scaling their digital
          systems.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Consulting Solutions */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Consulting Solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Technology guidance built around your business
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          From choosing the right technology stack to improving an existing
          platform, NexaBizz helps turn business requirements into practical
          technical directions.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {consultingSolutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <div
              key={solution.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <Icon className="h-5 w-5 text-slate-800" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
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
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Consulting Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Support across the technology lifecycle
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Technical consulting can support projects from early discovery
            and architecture planning through development, deployment, and
            continuous improvement.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {consultingCapabilities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
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

  {/* Architecture */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Architecture &amp; Technology Planning
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Build a stronger technical foundation
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Good technology planning creates a clear foundation for
          development, integration, deployment, maintenance, and future
          expansion.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {architectureAreas.map((area) => {
          const Icon = area.icon;

          return (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <Icon className="h-6 w-6 text-slate-800" />

              <h3 className="mt-5 text-base font-semibold text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Business Areas */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Where We Can Help
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            From new ideas to existing systems
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Whether you are starting a new digital initiative or improving
            an existing platform, technology decisions can be evaluated in
            the context of your business goals and resources.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {businessAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-700" />

              <span className="text-sm font-medium text-slate-700">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Performance & Scalability */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <Gauge className="h-5 w-5 text-slate-800" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Performance Planning
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Consider application performance, database efficiency,
                  API response patterns, and frontend experience as systems
                  grow.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <BarChart3 className="h-5 w-5 text-slate-800" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Growth Readiness
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Plan technology choices that can evolve with increasing
                  users, features, integrations, and business requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <Rocket className="h-5 w-5 text-slate-800" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Delivery Planning
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Break larger technology initiatives into practical
                  development phases and priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Scalability &amp; Performance
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Plan technology with future requirements in mind
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Technology should support the current business without creating
            unnecessary barriers when requirements change. Architecture,
            performance, and delivery planning can help create a more
            adaptable foundation.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Security */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Security &amp; Reliability
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Consider security throughout the technology lifecycle
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Security and reliability considerations are incorporated into
          technical planning based on the requirements and context of each
          project.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {securityAreas.map((area) => {
          const Icon = area.icon;

          return (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <Icon className="h-6 w-6 text-slate-800" />

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Consulting Process */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Consulting Process
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          From business requirements to technical direction
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          A structured process helps ensure that technology recommendations
          remain connected to actual business requirements.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {consultingProcess.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="text-3xl font-bold text-slate-200">
              {step.number}
            </span>

            <h3 className="mt-5 text-lg font-semibold text-slate-950">
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

  {/* Technology */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Technology Landscape
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Modern technologies for practical solutions
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Technology recommendations depend on project requirements,
            existing systems, team capabilities, budget, and long-term
            goals.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="flex min-h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center text-sm font-medium text-slate-700"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Business Benefits */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Business Benefits
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Turn technology challenges into practical next steps
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Technology consulting can provide a clearer path when
            businesses are evaluating new systems, improving existing
            applications, or planning their next digital initiative.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-slate-600"
          >
            Discuss your technology needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {businessBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

              <span className="text-sm leading-6 text-slate-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-800 bg-slate-950 py-20 sm:py-24">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        PLANNING A DIGITAL INITIATIVE?
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Let&apos;s plan the right technology for your business.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
        Whether you need help with technology selection, application
        architecture, system integration, cloud planning, or digital
        transformation, NexaBizz can help define practical next steps.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
        >
          View All Services
        </Link>
      </div>
    </div>
  </section>
</div>

);
}
