import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Rocket,
  Settings2,
  Smartphone,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Business Websites",
    description:
      "Professional, responsive websites that clearly communicate your business, services, value proposition, and contact options.",
    icon: Globe2,
  },
  {
    title: "Custom Web Applications",
    description:
      "Business applications built around specific workflows, customer journeys, internal processes, and operational requirements.",
    icon: Code2,
  },
  {
    title: "Business Automation",
    description:
      "Reduce repetitive manual work by connecting forms, workflows, notifications, data, and business processes.",
    icon: Workflow,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Online stores and commerce experiences that help growing businesses present products and manage customer interactions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mobile Solutions",
    description:
      "Mobile-friendly experiences and application solutions that help businesses stay connected with customers wherever they are.",
    icon: Smartphone,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Modern deployment approaches that provide a practical foundation for launching and maintaining digital products.",
    icon: Cloud,
  },
];

const challenges = [
  {
    title: "Limited resources",
    description:
      "Growing businesses often need to make technology decisions carefully while balancing budgets, people, and operational priorities.",
  },
  {
    title: "Manual processes",
    description:
      "Spreadsheets, repetitive communication, and disconnected workflows can consume valuable time as the business grows.",
  },
  {
    title: "Digital presence",
    description:
      "A professional online presence helps businesses communicate their services clearly and provide customers with easier ways to connect.",
  },
  {
    title: "Future growth",
    description:
      "Technology choices should support current requirements without creating unnecessary barriers when the business expands.",
  },
];

const benefits = [
  "Professional digital presence",
  "Better customer experience",
  "More efficient business workflows",
  "Reduced repetitive manual work",
  "Scalable application foundations",
  "Centralized business information",
  "Mobile-friendly experiences",
  "Modern cloud-ready deployment",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
  "AWS",
  "Docker",
];

export default function StartupsSmesPage() {
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
                Startups &amp; SMEs
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build a stronger digital foundation for growth.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps startups and small-to-medium businesses turn
                ideas, manual processes, and business requirements into
                practical digital solutions that can evolve with the company.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Business
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
                <Rocket className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                From idea to scalable digital solution.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Start with what your business needs today and build a
                technology foundation that can support tomorrow&apos;s
                requirements.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Understand the business",
                  "Prioritize the right features",
                  "Build a practical solution",
                  "Launch and improve continuously",
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
              Common Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology should make growth easier, not harder.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Startups and SMEs often have to move quickly while managing
              limited resources. The right digital approach can help simplify
              operations and create room for growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="rounded-2xl border border-slate-200 p-7 sm:p-8"
              >
                <span className="text-sm font-bold text-slate-400">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Digital Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Practical technology for growing businesses.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We can combine different digital capabilities depending on your
              business model, goals, customers, and operational requirements.
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

      {/* Business Capabilities */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Settings2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Business Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Start with the priorities that matter most.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Not every business needs a large technology platform from day
                one. We focus on the highest-value requirements first and
                create a foundation that can be extended as needs change.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
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

      {/* Growth */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Efficient Operations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve repetitive workflows and give teams clearer digital
                processes for everyday business operations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Layers3 className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Scalable Foundations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build applications and systems with an architecture that can
                evolve as features, users, and business requirements grow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Better Visibility
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Bring important business information and customer interactions
                into more organized digital workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 sm:py-24">
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
                Modern tools for practical business solutions.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices depend on the product and requirements.
                NexaBizz works with modern web, backend, database, cloud, and
                deployment technologies to create maintainable solutions.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Security, maintainability, and reliable deployment are
                  considered throughout the development process.
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
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Implementation Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A focused path from requirement to launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The process can be adapted to the size and complexity of the
              project while keeping communication and priorities clear.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand goals, users, workflows, and business requirements.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Define features, technology, architecture, and implementation priorities.",
              },
              {
                number: "03",
                title: "Build",
                text: "Develop, integrate, test, and refine the digital solution.",
              },
              {
                number: "04",
                title: "Launch",
                text: "Deploy the product and continue improving it as the business evolves.",
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
                Build For Growth
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to turn your business requirements into a digital
                solution?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Whether you need a business website, custom application,
                automation workflow, or a scalable technology foundation, let&apos;s
                discuss what you want to achieve.
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
