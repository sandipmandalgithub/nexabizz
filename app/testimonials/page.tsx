import Link from "next/link";
import type { Metadata } from "next";
import {
ArrowRight,
CheckCircle2,
Code2,
Lightbulb,
MessageSquare,
Quote,
ShieldCheck,
Sparkles,
Target,
Users,
Workflow,
} from "lucide-react";

export const metadata: Metadata = {
title: "Testimonials",
description:
"Explore the qualities and project experience NexaBizz aims to deliver through clear communication, practical development, responsive design, and reliable delivery.",
};

const experienceThemes = [
{
icon: MessageSquare,
title: "Clear Communication",
description:
"Project requirements, progress, decisions, and next steps should remain easy to understand throughout development.",
},
{
icon: Target,
title: "Business-Focused Thinking",
description:
"Technology should support a real business objective rather than adding complexity without a clear purpose.",
},
{
icon: Code2,
title: "Practical Engineering",
description:
"Solutions should balance functionality, maintainability, performance, and the project's actual requirements.",
},
{
icon: Sparkles,
title: "Thoughtful Experiences",
description:
"Interfaces should be responsive, accessible, intuitive, and aligned with the product or brand.",
},
{
icon: ShieldCheck,
title: "Quality Before Delivery",
description:
"Features should be tested and reviewed before a project moves toward deployment or handoff.",
},
{
icon: Workflow,
title: "Structured Collaboration",
description:
"A clear workflow helps connect requirements, design, development, testing, and delivery.",
},
];

const projectStatements = [
{
quote:
"We want to understand what is being built, why it matters, and what happens next.",
label: "Communication",
},
{
quote:
"We need a solution that fits our current requirements without making future changes unnecessarily difficult.",
label: "Maintainability",
},
{
quote:
"The website or application should work properly across the devices our users actually use.",
label: "Responsive Experience",
},
{
quote:
"We value a practical development process where progress can be reviewed throughout the project.",
label: "Collaboration",
},
];

const trustPoints = [
"Clear scope and requirements",
"Responsive implementation",
"Modern development practices",
"Version-controlled project workflow",
"Testing before delivery",
"Practical technical decisions",
];

export default function TestimonialsPage() {
return (
<> <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50"> <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_40%)]" />


    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
          <Quote className="h-4 w-4 text-blue-600" />
          Client Experience
        </div>

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          What a good digital{" "}
          <span className="text-blue-600">partnership should feel like.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Great project experiences are built on more than code. Clear
          communication, practical decisions, thoughtful design, and
          reliable delivery all contribute to a successful collaboration.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <Users className="h-6 w-6" />

            <p className="mt-5 text-lg font-bold">
              People First
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Understand the people, goals, and problems behind the
              project.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <Target className="h-6 w-6 text-blue-600" />

            <p className="mt-5 text-lg font-bold text-slate-950">
              Purpose Driven
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Build features that connect directly to the intended
              business outcome.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />

            <p className="mt-5 text-lg font-bold text-slate-950">
              Delivery Focused
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Validate the work and keep the path toward delivery clear.
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-slate-500">
        This page describes the experience NexaBizz aims to provide and
        does not present fabricated customer reviews or endorsements.
      </p>
    </div>
  </section>

  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          What Matters
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          The experience behind the work
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Every project is different, but these principles help create a
          clearer and more useful development experience.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {experienceThemes.map((theme) => {
          const ThemeIcon = theme.icon;

          return (
            <article
              key={theme.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <ThemeIcon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {theme.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {theme.description}
              </p>
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
            Project Perspective
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Questions every project should answer
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Instead of relying on invented testimonials, NexaBizz focuses
            on the practical questions that matter when evaluating a
            digital project or development partner.
          </p>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <Lightbulb className="h-5 w-5 text-slate-800" />
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Good collaboration starts with clarity about the problem,
              the desired outcome, and the path to get there.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {projectStatements.map((statement) => (
            <article
              key={statement.label}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div className="absolute right-6 top-6 text-slate-100">
                <Quote className="h-10 w-10" />
              </div>

              <div className="relative">
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {statement.label}
                </span>

                <blockquote className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-900">
                  “{statement.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Building Trust
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A transparent approach to delivery
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Trust grows when expectations are clear and progress can be
            understood. Our project approach focuses on practical
            communication and visible progress.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600"
          >
            Learn More About NexaBizz
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">
                Delivery checklist
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Practical project considerations
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  {point}
                </span>
              </div>
            ))}
          </div>
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
            <Users className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to turn an idea into a digital solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Share your requirements and goals. We can explore the scope,
            technical approach, and next steps together.
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
