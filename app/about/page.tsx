import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Code2,
Compass,
Globe2,
Layers3,
Lightbulb,
Rocket,
ShieldCheck,
Target,
Users,
} from "lucide-react";

const capabilities = [
{
icon: Code2,
title: "Modern Development",
description:
"We build modern digital products using practical technologies, clean architecture, and maintainable development practices.",
},
{
icon: Layers3,
title: "Scalable Solutions",
description:
"Our solutions are structured to support evolving business requirements, new features, and future growth.",
},
{
icon: Globe2,
title: "Digital Experiences",
description:
"We create responsive and accessible digital experiences that work smoothly across phones, tablets, laptops, and desktops.",
},
{
icon: ShieldCheck,
title: "Reliable Foundations",
description:
"We focus on dependable functionality, clear structure, security-conscious practices, and long-term maintainability.",
},
];

const approach = [
{
number: "01",
title: "Understand",
description:
"We start by understanding the business, users, goals, and practical requirements behind a digital project.",
},
{
number: "02",
title: "Plan",
description:
"We turn requirements into a clear solution structure, technology direction, feature plan, and development roadmap.",
},
{
number: "03",
title: "Build",
description:
"We develop the solution with a focus on usability, responsive design, performance, and maintainable code.",
},
{
number: "04",
title: "Improve",
description:
"We test, refine, and prepare the product for future improvements, integrations, and business growth.",
},
];

const principles = [
"Business goals come before unnecessary technology.",
"Clear communication throughout the project.",
"Responsive experiences across modern devices.",
"Clean and maintainable development practices.",
"Solutions designed with future growth in mind.",
"Practical technology choices based on project needs.",
];

export default function AboutPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-4xl"> <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
About NexaBizz </p>


        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Building digital solutions for modern businesses.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          NexaBizz is a digital solutions brand focused on creating
          practical, modern, and scalable technology experiences for
          businesses that want to build, improve, and grow their digital
          presence.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Start a Project
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
    </div>
  </section>

  {/* Who We Are */}
  <section className="bg-white">
    <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Who We Are
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Technology should solve business problems, not create more of
          them.
        </h2>

        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            NexaBizz is built around a simple idea: digital technology
            should help businesses work better, connect with customers,
            and create opportunities for growth.
          </p>

          <p>
            From business websites and e-commerce platforms to custom
            applications, mobile experiences, automation, and backend
            systems, we focus on creating solutions that are useful,
            responsive, and built around real business requirements.
          </p>

          <p>
            Our approach combines thoughtful planning, modern development
            practices, and a strong focus on usability to create digital
            products that are easier to use and easier to evolve.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Compass className="h-6 w-6" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-950">
          A practical digital partner
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          We aim to keep technology understandable, development
          structured, and digital solutions aligned with the goals they
          are built to support.
        </p>

        <div className="mt-7 space-y-3">
          {[
            "Business-focused thinking",
            "Modern technology",
            "Responsive development",
            "Long-term scalability",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
            <Target className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Our Mission
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Make digital transformation practical.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our mission is to help businesses turn ideas and operational
            needs into useful digital solutions through thoughtful
            technology, clear processes, and user-focused experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Our Vision
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Build technology that grows with businesses.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our vision is to create digital solutions that are not only
            useful today, but also provide a strong foundation for future
            products, customers, integrations, and business growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* What We Do */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          What We Do
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          From digital presence to business applications.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          We work across different areas of digital development so
          businesses can choose the right solution for their specific
          needs.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Approach */}
  <section className="bg-slate-950 text-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A clear process from idea to digital solution.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            A structured process helps keep projects focused, transparent,
            and easier to improve over time.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {approach.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
            >
              <span className="text-sm font-semibold tracking-wider text-slate-500">
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
    </div>
  </section>

  {/* Principles */}
  <section className="bg-white">
    <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Lightbulb className="h-6 w-6" />
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          How We Think
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Principles that guide our work.
        </h2>

        <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
          Good digital products are created through a combination of
          business understanding, thoughtful design, strong engineering,
          and continuous improvement.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
        <div className="space-y-5">
          {principles.map((principle) => (
            <div key={principle} className="flex gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

              <p className="text-sm font-medium leading-6 text-slate-700">
                {principle}
              </p>
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
        <Users className="h-6 w-6" />
      </div>

      <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Let&apos;s Work Together
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Have a business idea or digital challenge?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
        Let&apos;s explore how the right technology and a clear digital
        strategy can turn your requirements into a practical solution.
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
          View Our Services
        </Link>
      </div>
    </div>
  </section>
</div>
);
}
