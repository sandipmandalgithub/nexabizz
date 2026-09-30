import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

const industries = [
  {
    title: "Startups & SMEs",
    description:
      "Practical digital solutions that help startups and growing businesses establish their presence, improve operations, and scale with confidence.",
    href: "/industries/startups-smes",
    icon: BriefcaseBusiness,
    points: [
      "Business websites and web applications",
      "Digital workflows and automation",
      "Scalable technology foundations",
    ],
  },
  {
    title: "Retail & E-commerce",
    description:
      "Digital commerce experiences designed to help retailers showcase products, manage operations, and create smoother customer journeys.",
    href: "/industries/retail-ecommerce",
    icon: ShoppingBag,
    points: [
      "E-commerce websites and stores",
      "Product and order management",
      "Customer-focused digital experiences",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Modern digital solutions for healthcare organizations that support better information access, operational workflows, and user experiences.",
    href: "/industries/healthcare",
    icon: HeartPulse,
    points: [
      "Healthcare websites and portals",
      "Appointment and enquiry workflows",
      "Secure information-focused experiences",
    ],
  },
  {
    title: "Education",
    description:
      "Technology solutions that help educational institutions, educators, and learning businesses deliver accessible digital experiences.",
    href: "/industries/education",
    icon: GraduationCap,
    points: [
      "Education websites and portals",
      "Learning-focused applications",
      "Student and enquiry workflows",
    ],
  },
  {
    title: "Professional Services",
    description:
      "Digital platforms for consulting firms, agencies, financial services, and other professional businesses that need a strong online presence.",
    href: "/industries/professional-services",
    icon: Users,
    points: [
      "Professional business websites",
      "Lead and enquiry management",
      "Custom internal applications",
    ],
  },
  {
    title: "Corporate & Enterprises",
    description:
      "Structured digital solutions for organizations that need scalable applications, connected systems, and reliable technology infrastructure.",
    href: "/industries/corporate-enterprises",
    icon: Building2,
    points: [
      "Enterprise web applications",
      "Business process solutions",
      "Scalable technology architecture",
    ],
  },
];

const capabilities = [
  "Industry-focused website and application development",
  "Custom digital workflows and business automation",
  "E-commerce and customer experience solutions",
  "API and backend development",
  "Cloud deployment and technology modernization",
  "Ongoing maintenance, optimization, and support",
];

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Industries We Serve
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digital solutions built around business needs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Different industries have different customers, workflows, and
              operational challenges. NexaBizz creates practical digital
              solutions that are designed around those business requirements.
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
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Solutions for different business environments.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              From early-stage businesses to established organizations, our
              approach adapts to the goals, customers, and operational needs
              of each business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-slate-950">
                    Explore industry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Understanding */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Business First
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology should solve real business problems.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A successful digital product is more than a collection of
                features. It should make processes clearer, improve customer
                interactions, reduce unnecessary manual work, and create a
                foundation that can grow with the business.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <h3 className="text-xl font-semibold text-slate-950">
                What we can help with
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <p className="text-sm leading-6 text-slate-600">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Approach */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Understand the business. Build the right solution.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We focus on understanding the business context before deciding
              what technology should be used. This helps keep solutions
              practical, maintainable, and aligned with real requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <span className="text-sm font-bold text-slate-400">01</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Identify business goals, customer needs, existing processes,
                and the challenges that need to be addressed.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <span className="text-sm font-bold text-slate-400">02</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Design
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Plan the user experience, features, architecture, and
                technology approach around the identified requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <span className="text-sm font-bold text-slate-400">03</span>

              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Build & Improve
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Develop, test, deploy, and continuously improve the solution
                as the business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a business idea or digital challenge?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us what you are trying to build or improve, and we can
                explore the technology and approach that fits your needs.
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
