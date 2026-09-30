import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Layers3,
  Package,
  Rocket,
  Search,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: Store,
    title: "Online Stores",
    description:
      "Professional e-commerce websites designed to showcase products, build trust, and make online shopping simple.",
  },
  {
    icon: ShoppingBag,
    title: "Product Catalogs",
    description:
      "Organized product experiences with categories, product details, pricing, images, and useful shopping information.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Experiences",
    description:
      "Smooth browsing, cart management, checkout flows, and customer-focused interactions across devices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Commerce",
    description:
      "E-commerce interfaces designed to provide a consistent experience on mobile, tablet, laptop, and desktop.",
  },
];

const storeFeatures = [
  "Product catalog and categories",
  "Product detail pages",
  "Shopping cart functionality",
  "Customer-friendly checkout flow",
  "Search and filtering",
  "Responsive product layouts",
  "Order and inventory-ready architecture",
  "Payment integration-ready structure",
  "Customer account capabilities",
  "Scalable backend integration",
];

const customerExperience = [
  {
    icon: Search,
    title: "Easy Product Discovery",
    description:
      "Help customers quickly find relevant products through clear categories, search, filters, and structured product information.",
  },
  {
    icon: CreditCard,
    title: "Simple Buying Journey",
    description:
      "Create a straightforward journey from product discovery to cart and checkout with fewer unnecessary steps.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Shopping",
    description:
      "Make browsing and purchasing comfortable across smaller screens where customers increasingly interact with online stores.",
  },
  {
    icon: Users,
    title: "Customer Accounts",
    description:
      "Support account-based experiences such as customer profiles, order history, and future account functionality.",
  },
];

const businessCapabilities = [
  {
    icon: Package,
    title: "Product Management",
    description:
      "Create a structured foundation for managing products, categories, pricing, images, availability, and related information.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Build integration-ready structures that can support reporting, analytics, order information, and business monitoring.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Design the application so additional products, features, integrations, and business requirements can be introduced over time.",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description:
      "Create the technical foundation needed to connect customer orders with business-side processing and future operational workflows.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your products, customers, business model, required features, payment needs, and operational workflow.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the store structure, product experience, customer journey, technical architecture, and integration requirements.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the storefront, product experience, shopping functionality, backend services, and required integrations.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test the shopping journey, responsiveness, forms, navigation, integrations, and core functionality before launch.",
  },
];

const technologyAreas = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
];

export default function EcommercePage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <ShoppingCart className="h-3.5 w-3.5" />
                E-commerce Solutions
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                E-commerce experiences built for modern businesses.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We create responsive and scalable e-commerce solutions that
                help businesses showcase products, simplify online shopping,
                and build a stronger digital sales experience.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Start an E-commerce Project
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
                <ShoppingBag className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Turn product browsing into a better buying experience.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                From product discovery and cart management to checkout and
                customer accounts, we build e-commerce experiences around the
                needs of both customers and businesses.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Products", "Cart", "Checkout", "Orders"].map((item) => (
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
              E-commerce solutions shaped around your business.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you are launching a new online store or improving an
              existing digital commerce experience, the solution can be built
              around your products, customers, and business workflow.
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

      {/* Store Features */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <ShoppingCart className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Store Features
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything needed for a modern online store.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              We focus on the core shopping experience while keeping the
              architecture flexible enough for future business requirements
              and integrations.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {storeFeatures.map((feature) => (
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

      {/* Customer Experience */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Customer Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Make online shopping easier for your customers.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A successful online store needs more than product listings. The
              entire customer journey should feel clear, responsive, and easy
              to navigate.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {customerExperience.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
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

      {/* Business Capabilities */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built for customers and business teams.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The technical foundation behind an online store should support
                both the customer-facing experience and the operational needs
                of the business.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {businessCapabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-800" />
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
              From product idea to online store.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              A structured development process helps keep the store focused on
              customer experience, business requirements, and long-term
              scalability.
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

      {/* Technology */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Flexible technology for growing stores.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices are based on the requirements of the
                project, product catalog, integrations, business workflow, and
                expected future growth.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technologyAreas.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-center text-sm font-semibold text-slate-700"
                >
                  {technology}
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
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Build Your Online Store
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to take your products online?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your products, customers, and business goals. We can
            turn your requirements into a practical e-commerce solution built
            for your digital journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start an E-commerce Project
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
