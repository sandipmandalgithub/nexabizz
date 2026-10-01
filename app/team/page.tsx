import Link from "next/link";
import type { Metadata } from "next";
import {
ArrowRight,
Blocks,
CheckCircle2,
Code2,
Database,
Layers3,
MessageSquare,
MonitorSmartphone,
Rocket,
ShieldCheck,
Smartphone,
Users,
Workflow,
} from "lucide-react";

export const metadata: Metadata = {
title: "Team",
description:
"Meet the collaborative capabilities behind NexaBizz digital solution projects, from development and design to delivery and technical planning.",
};

const capabilities = [
{
icon: Code2,
title: "Engineering",
description:
"Frontend, backend, API, and application development capabilities for building reliable digital products.",
skills: ["React", "Next.js", "Java", "Spring Boot", "Node.js", "REST APIs"],
},
{
icon: MonitorSmartphone,
title: "UI & Experience",
description:
"Responsive interfaces and practical user experiences designed around clarity, usability, and business goals.",
skills: ["Responsive UI", "Design Systems", "UX Thinking", "Accessibility"],
},
{
icon: Database,
title: "Data & Backend",
description:
"Structured data solutions and backend architecture for applications that need dependable data handling.",
skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "API Design"],
},
{
icon: Rocket,
title: "Delivery & Deployment",
description:
"Development workflows and deployment practices that help move projects from implementation toward production.",
skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD"],
},
];

const workingPrinciples = [
{
number: "01",
icon: MessageSquare,
title: "Understand",
description:
"Start by understanding the business objective, users, requirements, constraints, and expected outcome.",
},
{
number: "02",
icon: Layers3,
title: "Plan",
description:
"Break the project into practical features and define an appropriate technical and delivery approach.",
},
{
number: "03",
icon: Blocks,
title: "Build",
description:
"Develop the solution in focused stages with attention to functionality, code quality, and usability.",
},
{
number: "04",
icon: CheckCircle2,
title: "Validate",
description:
"Test the implemented features, review responsive behaviour, and address issues before delivery.",
},
{
number: "05",
icon: Workflow,
title: "Deliver",
description:
"Prepare the application for deployment and provide a clear handoff for the next stage of the project.",
},
];

const collaborationPoints = [
"Clear project requirements",
"Feature-by-feature development",
"Regular progress communication",
"Version-controlled code",
"Responsive implementation",
"Testing before delivery",
];

export default function TeamPage() {
return (
<> <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50"> <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_40%)]" />


    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
          <Users className="h-4 w-4 text-blue-600" />
          Team & Collaboration
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          The capabilities behind{" "}
          <span className="text-blue-600">every solution.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          NexaBizz brings together the capabilities needed to plan, design,
          develop, test, and deliver modern digital solutions. We focus on
          practical collaboration rather than a one-size-fits-all process.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Development
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Design
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Delivery
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-blue-500/10 blur-2xl" />

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Digital Delivery
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-950">
                One connected workflow
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Users className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Requirements
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Goals, users & scope
                </p>
              </div>
            </div>

            <div className="ml-5 h-4 border-l border-dashed border-slate-300" />

            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Development
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Build & integrate
                </p>
              </div>
            </div>

            <div className="ml-5 h-4 border-l border-dashed border-slate-300" />

            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Testing & Delivery
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Validate & prepare
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-950 p-4 text-center">
            <p className="text-sm font-semibold text-white">
              Collaboration connects every stage
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              From the first requirement to the final delivery.
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
          Capability-based team structure for portfolio and project
          planning.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Core Capabilities
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Different capabilities, one shared goal
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Digital projects often require multiple technical disciplines.
          These capability areas represent the skills and responsibilities
          that can come together around a project.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {capabilities.map((capability) => {
          const CapabilityIcon = capability.icon;

          return (
            <article
              key={capability.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <CapabilityIcon className="h-6 w-6" />
                </div>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                  Capability
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {capability.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {capability.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {capability.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Collaboration from idea to delivery
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            A successful project needs more than technical implementation.
            Requirements, communication, development, testing, and
            delivery need to stay connected throughout the process.
          </p>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <Users className="h-5 w-5 text-slate-800" />
            </div>

            <p className="text-sm leading-6 text-slate-600">
              The exact people and responsibilities can scale according to
              the size and needs of each project.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {workingPrinciples.map((principle) => {
            const PrincipleIcon = principle.icon;

            return (
              <div
                key={principle.number}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:gap-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <PrincipleIcon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.16em] text-blue-600">
                      {principle.number}
                    </span>

                    <h3 className="text-lg font-bold text-slate-950">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Collaboration
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A practical way to work together
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Whether a project is a focused website or a larger application,
            a clear working process helps keep expectations, implementation,
            and delivery aligned.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600"
          >
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {collaborationPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

              <span className="text-sm font-medium text-slate-700">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section className="bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
            <Smartphone className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Build Something Together
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have an idea that needs the right capabilities?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Share your goals, requirements, and timeline. We can define a
            practical approach for turning the idea into a digital
            solution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
);
}
