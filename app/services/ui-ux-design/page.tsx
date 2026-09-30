import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  Layers3,
  LayoutDashboard,
  Palette,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const designSolutions = [
  {
    icon: LayoutDashboard,
    title: "Website UI Design",
    description:
      "Clean and structured interfaces for business websites, corporate platforms, landing pages, and digital products.",
  },
  {
    icon: Smartphone,
    title: "Mobile UI Design",
    description:
      "Mobile-first interfaces designed around touch interactions, clear navigation, readable content, and practical user flows.",
  },
  {
    icon: Sparkles,
    title: "Product Interface Design",
    description:
      "Thoughtful interfaces for dashboards, SaaS products, business applications, portals, and digital platforms.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Reusable visual patterns, components, typography, spacing, and interface rules for consistent digital experiences.",
  },
];

const capabilities = [
  "User interface design",
  "User experience design",
  "Responsive web design",
  "Mobile interface design",
  "Landing page design",
  "Dashboard design",
  "Design systems",
  "Wireframes and user flows",
  "Interactive prototypes",
  "Information architecture",
  "Usability-focused layouts",
  "Developer-ready design structure",
];

const principles = [
  {
    icon: Users,
    title: "User-Centered",
    description:
      "Design decisions should make important tasks easier to understand and complete for the people using the product.",
  },
  {
    icon: Eye,
    title: "Clear & Focused",
    description:
      "Strong visual hierarchy helps users quickly understand what matters and where they should go next.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Interfaces should adapt naturally across mobile phones, tablets, laptops, and larger desktop screens.",
  },
  {
    icon: Layers3,
    title: "Consistent",
    description:
      "Reusable patterns and components create a more predictable experience across different pages and features.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business, users, goals, existing product, content, competitors, and design requirements.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Structure",
    description:
      "We organize content, navigation, user journeys, page structure, and important actions before detailed visual design.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We create the interface direction, layouts, visual hierarchy, components, responsive states, and interaction patterns.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Refine",
    description:
      "We review the experience, improve usability, prepare the design for development, and support implementation.",
  },
];

const businessBenefits = [
  {
    icon: Users,
    title: "Better User Experience",
    description:
      "Make digital products easier to understand and more comfortable to use across important user journeys.",
  },
  {
    icon: Eye,
    title: "Stronger Visual Identity",
    description:
      "Create a consistent visual language that helps your website or product feel professional and recognizable.",
  },
  {
    icon: LayoutDashboard,
    title: "Clearer Interfaces",
    description:
      "Organize content, navigation, and actions so users can find information and complete tasks more efficiently.",
  },
  {
    icon: Layers3,
    title: "Scalable Design",
    description:
      "Use reusable components and design patterns that can support additional pages, features, and products.",
  },
];

const designAreas = [
  "Typography",
  "Color systems",
  "Spacing",
  "Layout grids",
  "Buttons & forms",
  "Cards & components",
  "Navigation",
  "Responsive states",
];

export default function UiUxDesignPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Palette className="h-3.5 w-3.5" />
                UI/UX Design
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Digital experiences designed around your users.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We design clean, responsive, and practical digital interfaces
                that help businesses communicate clearly, improve usability,
                and create more consistent experiences across web and mobile.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Start a Design Project
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
                <Palette className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Design that connects business goals with user needs.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                From website interfaces to dashboards and mobile applications,
                we focus on visual clarity, usability, responsive layouts, and
                consistent design systems.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Web UI", "Mobile UI", "UX Flows", "Design Systems"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ),
                )}
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
              What We Design
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Interfaces built for real digital products.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We create design solutions that balance visual quality,
              usability, responsiveness, and the practical requirements of
              modern businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {designSolutions.map((solution) => {
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

      {/* Capabilities */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <PenTool className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Design Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything needed to shape a better digital experience.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From the initial structure to responsive interface details, we
              can help define the visual and experience layer of your digital
              product.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Design Principles
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Simple principles behind every interface.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Good design is not only about appearance. It should help users
              understand, navigate, and interact with a digital product more
              naturally.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Design that supports your business goals.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A thoughtful interface can make your digital product easier to
                use while creating a more consistent and professional
                experience for customers and teams.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {businessBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
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
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Our Design Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to polished interface.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              A structured process helps us move from understanding the
              problem to creating a clear and development-ready experience.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-[0.15em] text-slate-500">
                      {item.number}
                    </span>

                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Design System
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Consistency across every screen.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A reusable design foundation makes it easier to maintain a
                consistent visual language as your website or product grows.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {designAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-center text-sm font-semibold text-slate-700"
                >
                  {area}
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
            <Palette className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Create Better Experiences
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have a design challenge? Let&apos;s create a clearer experience.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your website, application, users, and business
            goals. We can help shape the interface and experience around your
            requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start a Design Project
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
