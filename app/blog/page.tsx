import Link from "next/link";
import {
ArrowRight,
BarChart3,
Bot,
Code2,
Palette,
ShoppingCart,
Sparkles,
} from "lucide-react";

const categories = [
"Web Development",
"E-commerce",
"UI/UX Design",
"Business Automation",
"Technology",
"Digital Strategy",
];

const insights = [
{
icon: Code2,
category: "Web Development",
title: "What Makes a Modern Business Website Effective?",
description:
"Explore the core elements that help business websites communicate clearly, perform reliably, and create a strong digital experience.",
},
{
icon: ShoppingCart,
category: "E-commerce",
title: "Building Better E-commerce Experiences",
description:
"A practical look at product discovery, responsive interfaces, checkout journeys, and the technical foundations of an online store.",
},
{
icon: Palette,
category: "UI/UX Design",
title: "Why UX Matters Beyond Visual Design",
description:
"Understand how structure, usability, accessibility, and interaction design work together to create better digital products.",
},
{
icon: Bot,
category: "Business Automation",
title: "Where Business Automation Can Save Time",
description:
"Learn how repetitive workflows can be identified, structured, and improved with practical digital automation.",
},
{
icon: Sparkles,
category: "Technology",
title: "Choosing the Right Technology for a Project",
description:
"Technology decisions should support business goals. Explore a practical way to think about frameworks, databases, APIs, and deployment.",
},
{
icon: BarChart3,
category: "Digital Strategy",
title: "From Business Idea to Digital Product",
description:
"A simple framework for turning a business requirement into a structured digital solution from planning through delivery.",
},
];

const principles = [
{
number: "01",
title: "Practical insights",
description:
"Content should focus on useful ideas that can be applied to real digital projects and business situations.",
},
{
number: "02",
title: "Technology with purpose",
description:
"Tools and frameworks are discussed in the context of business requirements rather than technology for its own sake.",
},
{
number: "03",
title: "Clear communication",
description:
"Complex technical concepts should be explained in a way that both technical and business audiences can understand.",
},
];

export default function BlogPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
Insights </p>


        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Insights for modern digital businesses.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Explore practical ideas around web development, digital
          experiences, technology, automation, and building better
          business solutions.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Categories */}
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  </section>

  {/* Insights */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Featured Topics
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Ideas worth exploring.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          A growing collection of practical topics for businesses
          planning, building, or improving their digital presence.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <article
              key={insight.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Insight
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {insight.category}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-8 text-slate-950">
                {insight.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {insight.description}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                  Coming soon
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* Perspective */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Our Perspective
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Useful thinking, without unnecessary complexity.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Digital projects involve business decisions, design choices,
            technical trade-offs, and ongoing improvement. Our insights
            are intended to make those decisions easier to understand.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-sm font-bold text-slate-400">
                {principle.number}
              </span>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Content Roadmap */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Growing Library
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              More practical insights are on the way.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              The NexaBizz insights library is designed to grow with
              practical guides, technical explanations, project lessons,
              and digital strategy topics.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        Build Something Better
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Have a digital idea you want to turn into reality?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
        Let&apos;s discuss your requirements and explore a practical
        technology solution for your business.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Let&apos;s Talk
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
</div>
);
}
