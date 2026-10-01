import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Package,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Users,
} from "lucide-react";

const solutions = [
  {
    title: "E-commerce Stores",
    description:
      "Responsive online stores designed to showcase products, simplify discovery, and create a smooth purchasing experience.",
    icon: ShoppingCart,
  },
  {
    title: "Product Management",
    description:
      "Structured product catalogs with categories, descriptions, pricing, availability, and other business information.",
    icon: Package,
  },
  {
    title: "Customer Experience",
    description:
      "User-focused interfaces that help customers discover products, understand offerings, and interact with businesses easily.",
    icon: Users,
  },
  {
    title: "Order Workflows",
    description:
      "Digital workflows that can organize enquiries, orders, customer information, and operational activities.",
    icon: Layers3,
  },
  {
    title: "Mobile Commerce",
    description:
      "Mobile-friendly shopping experiences designed for customers using smartphones and tablets.",
    icon: Smartphone,
  },
  {
    title: "Business Integrations",
    description:
      "Connect websites and applications with APIs, databases, analytics, communication tools, and other business systems.",
    icon: Globe2,
  },
];

const capabilities = [
  "Product catalog and category management",
  "Responsive shopping experiences",
  "Search and product discovery",
  "Customer enquiry and contact workflows",
  "Cart and checkout-ready architecture",
  "Order and business workflow support",
  "Analytics and performance tracking",
  "API and database integration",
];

const challenges = [
  {
    title: "Product discovery",
    description:
      "Customers need clear navigation, useful product information, and simple ways to find what they are looking for.",
    icon: Search,
  },
  {
    title: "Customer experience",
    description:
      "Slow, confusing, or difficult interfaces can create unnecessary friction throughout the buying journey.",
    icon: Users,
  },
  {
    title: "Operational efficiency",
    description:
      "Growing order volumes and product catalogs require structured digital workflows and reliable information management.",
    icon: Settings2,
  },
  {
    title: "Growth & performance",
    description:
      "Commerce platforms need a technical foundation that can support new products, users, integrations, and business requirements.",
    icon: Activity,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
  "AWS",
];

export default function RetailEcommercePage() {
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
                Retail &amp; E-commerce
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Create better digital shopping experiences.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps retail and e-commerce businesses build modern
                digital experiences for product discovery, customer
                engagement, online sales, and business operations.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Store
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services/e-commerce"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  Explore E-commerce
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <ShoppingBag className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                Connect products, customers, and operations.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Build a commerce experience where customers can discover
                products easily while your business gets the digital
                foundation needed to manage and grow.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Showcase products clearly",
                  "Improve customer journeys",
                  "Organize business workflows",
                  "Prepare for scalable growth",
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
              Commerce Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Every interaction can affect the customer journey.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Retail businesses need more than an online catalog. Customers
              expect clear information, responsive interfaces, easy navigation,
              and reliable interactions across devices.
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
              Digital Commerce Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build a commerce platform around your business model.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you sell physical products, services, subscriptions, or
              operate a multi-channel retail business, the digital experience
              can be designed around your specific requirements.
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
                <ShoppingCart className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Commerce Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Everything needed for a strong commerce foundation.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Commerce projects can combine customer-facing experiences
                with structured product data, business workflows, APIs, and
                databases to create a more connected system.
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

      {/* Customer Experience */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Search className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Product Discovery
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize categories, product information, navigation, and
                search experiences so customers can find relevant products
                more easily.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Smartphone className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Mobile Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Create responsive shopping interfaces that remain easy to use
                across smartphones, tablets, laptops, and desktop devices.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Business Visibility
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Connect relevant analytics and business data to understand
                customer interactions and improve digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Architecture */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Gauge className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Performance &amp; Architecture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Prepare the platform for the next stage of growth.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Commerce applications can grow quickly as product catalogs,
                customer interactions, orders, and integrations increase. A
                structured technical foundation helps keep the platform
                maintainable as requirements evolve.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Responsive and performance-conscious interfaces",
                  "Structured API and backend architecture",
                  "Database-driven product and business data",
                  "Cloud-ready deployment options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-slate-300" />
                <p className="text-sm font-semibold text-white">
                  Connected Commerce Architecture
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Customer-facing storefront",
                  "Product and category data",
                  "Backend APIs and business logic",
                  "Database and application services",
                  "Analytics and external integrations",
                ].map((item, index) => (
                  <div key={item}>
                    <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300">
                      {item}
                    </div>

                    {index < 4 && (
                      <div className="mx-auto h-3 w-px bg-slate-700" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <LockKeyhole className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-950">
                Security and reliability matter at every stage.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Commerce systems can handle important customer and business
                information, so security and reliable technical practices
                should be considered throughout development and deployment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                "Controlled API access",
                "Secure application practices",
                "Environment configuration",
                "Database protection",
                "Error handling and validation",
                "Backup and deployment planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
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
                A modern stack for digital commerce.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The technology stack can be selected according to product
                complexity, integrations, performance requirements, and
                long-term maintenance needs.
              </p>
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
              Commerce Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From product requirements to digital experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We keep the development process focused on the customer journey,
              business operations, technical requirements, and future growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand products, customers, business model, workflows, and project goals.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Define the store structure, features, integrations, data model, and technology approach.",
              },
              {
                number: "03",
                title: "Build",
                text: "Develop the storefront, backend services, database integration, and required workflows.",
              },
              {
                number: "04",
                title: "Launch",
                text: "Test, deploy, monitor, and improve the commerce experience over time.",
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
                Build Your Commerce Experience
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to take your retail business online?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your products, customers, and business goals.
                Let&apos;s explore a digital commerce solution that fits your
                requirements.
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
