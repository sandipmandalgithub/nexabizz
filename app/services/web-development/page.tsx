import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Code2,
Gauge,
Globe2,
Layers3,
LayoutDashboard,
MonitorSmartphone,
Rocket,
Search,
ShieldCheck,
Sparkles,
} from "lucide-react";

const solutions = [
{
icon: Globe2,
title: "Business Websites",
description:
"Professional websites that clearly communicate your services, expertise, value, and business information.",
},
{
icon: LayoutDashboard,
title: "Corporate Websites",
description:
"Structured digital experiences for companies that need a professional and scalable online presence.",
},
{
icon: MonitorSmartphone,
title: "Responsive Development",
description:
"Layouts designed to work smoothly across mobile phones, tablets, laptops, and desktop screens.",
},
{
icon: Code2,
title: "Custom Web Experiences",
description:
"Purpose-built interfaces and functionality based on the specific requirements of your business.",
},
];

const features = [
"Responsive and mobile-first layouts",
"Modern and maintainable frontend architecture",
"Business-focused page structure",
"Clear navigation and user experience",
"Performance-conscious implementation",
"Search-friendly website structure",
"Scalable component-based development",
"Integration-ready architecture",
];

const process = [
{
number: "01",
title: "Understand",
description:
"We understand your business, target audience, website goals, content requirements, and functional needs.",
},
{
number: "02",
title: "Structure",
description:
"We plan the information architecture, page structure, user journeys, and technology approach.",
},
{
number: "03",
title: "Develop",
description:
"We build the website with responsive layouts, reusable components, clean code, and practical functionality.",
},
{
number: "04",
title: "Test & Launch",
description:
"We test responsiveness, navigation, functionality, and performance before preparing the website for launch.",
},
];

const benefits = [
{
icon: Search,
title: "Stronger Online Presence",
description:
"Present your business, services, products, and capabilities through a professional digital experience.",
},
{
icon: Gauge,
title: "Better User Experience",
description:
"Make it easier for visitors to navigate your website, understand your offering, and take action.",
},
{
icon: Layers3,
title: "Built for Growth",
description:
"Start with the features you need today while keeping the structure ready for future improvements.",
},
{
icon: ShieldCheck,
title: "Reliable Foundation",
description:
"Use a clean technical foundation that can support maintenance, integrations, and future development.",
},
];

const technologyAreas = [
"Next.js",
"React",
"TypeScript",
"Tailwind CSS",
"REST APIs",
"Modern JavaScript",
];

export default function WebDevelopmentPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"> <div> <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"> <Globe2 className="h-3.5 w-3.5" />
Web Development </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Modern websites built for your business.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We create responsive, professional, and scalable websites that
            help businesses establish a strong digital presence and give
            customers a clear path to discover, understand, and engage
            with their brand.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start a Web Project
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
            <MonitorSmartphone className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-xl font-bold text-slate-950">
            A website that works across every screen.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            From compact mobile screens to large desktop displays, we
            build layouts that adapt to different devices while keeping
            the experience clear and consistent.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {[
              "Mobile",
              "Tablet",
              "Laptop",
              "Desktop",
            ].map((item) => (
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
          Web experiences designed around your goals.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Whether you need a simple business website or a more structured
          digital experience, the solution can be shaped around your
          business requirements.
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

  {/* Features */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Code2 className="h-6 w-6" />
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Development Features
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A strong foundation behind every website.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          We focus on the details that make a website easier to use,
          maintain, improve, and expand as your business requirements
          evolve.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

            <span className="text-sm font-medium leading-6 text-slate-700">
              {feature}
            </span>
          </div>
        ))}
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
          From requirement to launch.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-400">
          A structured process keeps development focused and makes it
          easier to move from an initial idea to a reliable website.
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

  {/* Benefits */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Business Benefits
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          More than just a website.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          A well-planned website can become an important part of your
          business presence, customer journey, and future digital
          strategy.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 p-7"
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
  </section>

  {/* Technology */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
            <Sparkles className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Modern tools for modern web experiences.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Technology choices are based on the requirements of the
            project rather than using the same stack for every business.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologyAreas.map((technology) => (
            <div
              key={technology}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold text-slate-700"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Rocket className="h-6 w-6" />
      </div>

      <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Build Your Website
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Ready to create a stronger digital presence?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
        Tell us about your business and what you want your website to
        achieve. We can turn your requirements into a practical digital
        solution.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Start a Project
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
