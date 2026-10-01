import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  ShoppingCart,
  Smartphone,
  Workflow,
} from "lucide-react";

const projects = [
  {
    title: "NexaCart",
    category: "E-commerce",
    description:
      "A modern e-commerce concept focused on product discovery, shopping experiences, responsive interfaces, and scalable full-stack architecture.",
    technologies: ["React", "Node.js", "MongoDB", "REST API"],
    icon: ShoppingCart,
    href: "/case-studies",
  },
  {
    title: "BizFlow",
    category: "Professional Services",
    description:
      "A business platform concept designed around professional service workflows, structured information, responsive dashboards, and digital operations.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    icon: Workflow,
    href: "/case-studies",
  },
  {
    title: "NexaCorp",
    category: "Corporate & Enterprise",
    description:
      "A corporate digital platform concept focused on professional presentation, scalable architecture, business information, and enterprise-ready interfaces.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: Globe2,
    href: "/case-studies",
  },
];

const categories = [
  {
    title: "Web Applications",
    description:
      "Custom web platforms designed around business workflows, users, and operational requirements.",
    icon: LayoutDashboard,
  },
  {
    title: "E-commerce",
    description:
      "Digital commerce experiences focused on product discovery, customer journeys, and business growth.",
    icon: ShoppingCart,
  },
  {
    title: "Corporate Platforms",
    description:
      "Professional digital experiences for companies, organizations, teams, and enterprise environments.",
    icon: Globe2,
  },
  {
    title: "Mobile Experiences",
    description:
      "Responsive and mobile-focused interfaces designed to work smoothly across modern devices.",
    icon: Smartphone,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
];

const principles = [
  {
    title: "Business-focused",
    description:
      "Every project starts with the business objective, users, workflows, and expected digital outcome.",
    icon: BarChart3,
  },
  {
    title: "Modern technology",
    description:
      "Use practical modern technologies that support maintainability, performance, responsiveness, and future growth.",
    icon: Code2,
  },
  {
    title: "Responsive by design",
    description:
      "Interfaces are planned for phones, tablets, laptops, and desktop screens from the beginning.",
    icon: MonitorSmartphone,
  },
  {
    title: "Built to evolve",
    description:
      "Project structures are designed with future features, integrations, improvements, and maintenance in mind.",
    icon: Layers3,
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Projects &amp; Portfolio
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digital solutions designed around real business needs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore selected NexaBizz concepts and portfolio projects
              demonstrating how modern technology, thoughtful design, and
              business-focused development can come together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

      {/* Featured Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Selected digital project concepts.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These projects demonstrate different types of digital products
              and business solutions. They are presented as portfolio
              concepts and development examples.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.22),transparent_45%)]" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-white">
                      <Icon className="h-9 w-9" />
                    </div>

                    <span className="absolute left-6 top-6 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors group-hover:text-slate-600"
                      >
                        View Case Studies
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              What We Build
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Different solutions for different business goals.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From customer-facing websites to internal applications, our
              project approach can adapt to different digital requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.description}
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Modern tools for practical digital products.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The technology stack can be selected according to project
                complexity, business requirements, integrations, performance,
                and long-term maintainability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Core Technologies
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

      {/* Approach */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Project Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than just building screens.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Good digital products combine business understanding, user
              experience, technology, performance, and maintainable
              engineering.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
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

      {/* Portfolio Note */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Portfolio projects and concepts
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Projects shown on this page may represent portfolio
                  concepts, internal demonstrations, or development examples.
                  They are intended to demonstrate product thinking,
                  technical capabilities, and design direction rather than
                  imply work completed for a named client.
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
                Start Your Project
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have an idea that needs to become a digital product?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your business, project goals, users, and
                requirements. We can explore the right digital approach
                together.
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
