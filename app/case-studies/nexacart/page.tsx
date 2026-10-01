import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Package,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const challenges = [
  {
    title: "Product discovery",
    description:
      "Customers need a clear way to browse products, understand product information, and find relevant items.",
    icon: Search,
  },
  {
    title: "Shopping workflow",
    description:
      "The experience needs structured cart and checkout flows that remain easy to understand across devices.",
    icon: ShoppingCart,
  },
  {
    title: "Product management",
    description:
      "The business side requires organized product information, availability, categories, and pricing.",
    icon: Package,
  },
  {
    title: "Scalable foundation",
    description:
      "The application should have a structure that can support additional features, integrations, and business requirements.",
    icon: Layers3,
  },
];

const solutions = [
  "Responsive product catalogue",
  "Product detail experience",
  "Category-based browsing",
  "Shopping cart workflow",
  "Structured product data",
  "Business-oriented administration",
  "API-driven architecture",
  "Mobile-friendly customer experience",
];

const architecture = [
  {
    title: "Frontend",
    description:
      "Responsive customer-facing interfaces for browsing, product discovery, cart interactions, and shopping journeys.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend",
    description:
      "API-driven application services responsible for business logic, product operations, and application workflows.",
    icon: Code2,
  },
  {
    title: "Database",
    description:
      "Structured data storage for products, categories, users, orders, and other commerce-related information.",
    icon: Database,
  },
  {
    title: "Business Layer",
    description:
      "Application rules and workflows connecting the customer experience with commerce operations.",
    icon: Workflow,
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JavaScript",
  "Tailwind CSS",
  "Git & GitHub",
];

const improvements = [
  {
    title: "Responsive experience",
    description:
      "The interface is designed to adapt across mobile, tablet, laptop, and desktop screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Clear navigation",
    description:
      "Product categories, discovery flows, and actions are structured to keep the shopping experience understandable.",
    icon: ShoppingBag,
  },
  {
    title: "Performance awareness",
    description:
      "The application structure considers efficient data access, asset optimization, and responsive interface behavior.",
    icon: Gauge,
  },
  {
    title: "Security considerations",
    description:
      "Authentication, authorization, validation, secure configuration, and protected business operations should be applied for production use.",
    icon: LockKeyhole,
  },
];

const futureScope = [
  "Payment gateway integration",
  "Order management",
  "Customer accounts",
  "Wishlist functionality",
  "Product reviews",
  "Inventory management",
  "Promotional campaigns",
  "Analytics and reporting",
];

export default function NexaCartCaseStudyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Case Studies
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                <ShoppingCart className="h-3.5 w-3.5" />
                E-commerce
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                NexaCart
              </h1>

              <p className="mt-5 text-xl font-medium text-slate-700 sm:text-2xl">
                A modern e-commerce platform concept built around better
                digital shopping experiences.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                NexaCart is a portfolio project concept demonstrating how a
                full-stack e-commerce application can bring product discovery,
                shopping workflows, structured data, and responsive customer
                experiences together.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Build a Similar Solution
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-950">
                <ShoppingCart className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project Focus
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Commerce experience + full-stack architecture
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Customer-facing shopping experience",
                  "Product and category structure",
                  "API-driven backend",
                  "Responsive application design",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                    <span className="text-sm leading-6 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turning a commerce requirement into a structured digital
                product.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                NexaCart explores the architecture and user experience behind a
                modern e-commerce application. The project focuses on
                organizing the customer journey from product discovery through
                shopping interactions.
              </p>

              <p>
                The concept also considers the business side of commerce,
                including structured product data, categories, availability,
                backend APIs, and a foundation for future order and customer
                workflows.
              </p>

              <p>
                The goal is to demonstrate practical full-stack development
                rather than simply creating a collection of static screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What the platform needs to solve.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A useful commerce platform needs to balance customer experience,
              business operations, data management, and technical
              maintainability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
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

      {/* Solution */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Solution
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A connected commerce experience.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The NexaCart concept combines customer-facing interfaces,
                structured commerce data, backend services, and responsive
                design into one application architecture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm leading-6 text-slate-700">
                    {solution}
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
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Separate responsibilities, connect the experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A structured application architecture makes it easier to reason
              about features, data, integrations, and future improvements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {architecture.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      {/* Technology */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Technology Stack
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Full-stack technologies for the commerce experience.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The project concept uses a JavaScript-based full-stack approach
                with a modern frontend, API-driven backend, and document
                database.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 sm:p-9">
              <div className="flex flex-wrap gap-3">
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

      {/* Experience */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Experience &amp; Engineering
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Designed for a practical customer journey.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The project considers usability, responsiveness, performance,
              and maintainability alongside the core shopping functionality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {improvements.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      {/* Future Scope */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Settings2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Future Scope
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A foundation that can evolve with the business.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A production commerce platform could expand with additional
                capabilities depending on the business model, operational
                needs, integrations, and customer requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {futureScope.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
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

      {/* Portfolio Note */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Portfolio concept
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  NexaCart is presented as a portfolio and development
                  concept. The information on this page describes the
                  solution approach and technical direction and does not claim
                  specific commercial results or work completed for a named
                  client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                E-commerce Development
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Need an e-commerce platform for your business?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Share your products, customer journey, business workflows, and
                integration requirements to explore a suitable commerce
                solution.
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
