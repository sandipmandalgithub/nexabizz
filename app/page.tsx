import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Globe2,
  HeartPulse,
  Layers3,
  LayoutDashboard,
  Palette,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Workflow,
} from "lucide-react";

const highlights = [
  "Business-focused digital solutions",
  "Responsive and modern user experiences",
  "Scalable technology for growing businesses",
];

const stats = [
  {
    value: "25+",
    label: "Projects Delivered",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Responsive Solutions",
  },
];

const featuredServices = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built to represent your brand and convert visitors into customers.",
    icon: Globe2,
    href: "/services/web-development",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with product management, shopping experiences, and secure business workflows.",
    icon: ShoppingCart,
    href: "/services/e-commerce",
  },
  {
    title: "Custom Web Applications",
    description:
      "Business applications designed around your processes, users, and operational requirements.",
    icon: Code2,
    href: "/services/custom-web-applications",
  },
  {
    title: "Mobile App Development",
    description:
      "User-friendly mobile applications that help businesses connect with customers wherever they are.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean and intuitive interfaces focused on usability, consistency, and meaningful user experiences.",
    icon: Palette,
    href: "/services/ui-ux-design",
  },
  {
    title: "Business Automation",
    description:
      "Digital workflows and automation solutions that reduce repetitive work and improve efficiency.",
    icon: Workflow,
    href: "/services/business-automation",
  },
];

const industries = [
  {
    title: "Startups & SMEs",
    description:
      "Flexible digital solutions designed to help growing businesses establish and scale their online presence.",
    icon: Store,
    href: "/industries/startups-smes",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Digital experiences that help retailers manage products, customers, orders, and online sales.",
    icon: ShoppingCart,
    href: "/industries/retail-ecommerce",
  },
  {
    title: "Healthcare",
    description:
      "Modern digital platforms focused on accessibility, usability, and streamlined business workflows.",
    icon: HeartPulse,
    href: "/industries/healthcare",
  },
  {
    title: "Education",
    description:
      "Web and application solutions that support institutions, learners, and digital education services.",
    icon: GraduationCap,
    href: "/industries/education",
  },
  {
    title: "Professional Services",
    description:
      "Digital tools and websites that help service-based businesses attract customers and operate efficiently.",
    icon: BriefcaseBusiness,
    href: "/industries/professional-services",
  },
  {
    title: "Corporate & Enterprises",
    description:
      "Scalable technology solutions for organizations with complex digital and operational requirements.",
    icon: BriefcaseBusiness,
    href: "/industries/corporate-enterprises",
  },
];

const featuredProjects = [
  {
    category: "Retail & E-commerce",
    title: "NexaCart",
    description:
      "A modern e-commerce platform designed around product discovery, shopping experiences, and scalable business workflows.",
    icon: ShoppingBag,
    technologies: ["React", "Node.js", "MongoDB"],
    href: "/case-studies",
  },
  {
    category: "Professional Services",
    title: "BizFlow",
    description:
      "A business management platform concept focused on organized workflows, dashboards, and operational visibility.",
    icon: LayoutDashboard,
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "/case-studies",
  },
  {
    category: "Corporate & Enterprise",
    title: "NexaCorp",
    description:
      "A professional corporate website concept built to communicate services, capabilities, expertise, and business value.",
    icon: BriefcaseBusiness,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "/case-studies",
  },
];

const reasons = [
  {
    number: "01",
    title: "Business-First Thinking",
    description:
      "We focus on understanding the business goal behind a project before choosing the technology or implementation approach.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern development practices and technologies to build maintainable, scalable, and reliable digital products.",
  },
  {
    number: "03",
    title: "Responsive by Default",
    description:
      "Every interface is designed to work smoothly across mobile phones, tablets, laptops, and large desktop screens.",
  },
  {
    number: "04",
    title: "Clear Communication",
    description:
      "Projects are approached with clear requirements, practical milestones, and transparent communication throughout development.",
  },
  {
    number: "05",
    title: "Quality-Focused Development",
    description:
      "We pay attention to usability, performance, clean code, accessibility, and consistent user experiences.",
  },
  {
    number: "06",
    title: "Built for Long-Term Growth",
    description:
      "Solutions are structured with future improvements, integrations, maintenance, and business growth in mind.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(15,23,42,0.05),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Digital Solutions for Modern Businesses
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build Digital Products That{" "}
              <span className="text-blue-600">Move Your Business Forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              NexaBizz helps businesses turn ideas into reliable digital
              experiences through modern web development, applications,
              e-commerce, automation, and technology solutions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-sm leading-6 text-slate-600">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-t border-slate-200 pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    NEXABIZZ
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Digital Solutions
                  </p>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Web Solutions
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Digital products built for growth.
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <Globe2 className="h-5 w-5 text-blue-400" />
                    <p className="mt-3 text-sm font-semibold text-white">
                      Web Platforms
                    </p>
                    <div className="mt-3 h-1.5 w-20 rounded-full bg-slate-700" />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                    <p className="mt-3 text-sm font-semibold text-white">
                      Mobile Apps
                    </p>
                    <div className="mt-3 h-1.5 w-16 rounded-full bg-slate-700" />
                  </div>

                  <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        SYSTEMS
                      </span>
                      <span className="text-xs font-medium text-blue-400">
                        ONLINE
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 font-mono text-xs text-slate-400">
                      <p>
                        <span className="text-blue-400">&gt;</span> scalable
                        architecture
                      </p>
                      <p>
                        <span className="text-blue-400">&gt;</span> responsive
                        experiences
                      </p>
                      <p>
                        <span className="text-blue-400">&gt;</span> business
                        automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Modern Technology
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    2026
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <Layers3 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Built to scale</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Flexible Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Digital Solutions Built Around Your Business
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From websites and e-commerce platforms to custom applications
              and automation, we create practical digital solutions aligned
              with real business needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Industries We Serve
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technology That Adapts to Your Industry
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We build digital experiences and business solutions that can
                adapt to different industries, workflows, audiences, and
                growth stages.
              </p>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Explore Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-slate-700" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {industry.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">
                  Don&apos;t see your industry?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell us what you are building and we&apos;ll explore how
                  technology can support your business.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Featured Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Digital Experiences Built for Real Business Needs
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Explore selected project concepts that demonstrate how NexaBizz
                approaches e-commerce, business applications, and corporate
                digital experiences.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="relative overflow-hidden bg-slate-950 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-400">
                          <Icon className="h-4 w-4" />
                        </div>

                        <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                          Featured Project
                        </span>
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
                    </div>

                    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="h-2.5 w-3/4 rounded-full bg-slate-700" />
                        <div className="h-2 w-1/2 rounded-full bg-slate-800" />

                        <div className="grid grid-cols-3 gap-2 pt-3">
                          <div className="h-14 rounded-lg bg-slate-800" />
                          <div className="h-14 rounded-lg bg-slate-800" />
                          <div className="h-14 rounded-lg bg-slate-800" />
                        </div>

                        <div className="h-2 w-2/3 rounded-full bg-slate-800" />
                      </div>
                    </div>

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-600/10 blur-2xl" />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-950 px-6 py-8 sm:px-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">
                  Have a project in mind?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Let&apos;s turn your business idea into a practical digital
                  solution.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NexaBizz */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Why NexaBizz
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A Practical Approach to Digital Transformation
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Technology should solve a business problem, not create another
                one. Our approach combines business understanding, modern
                engineering, thoughtful design, and long-term scalability.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-10 hidden rounded-2xl bg-slate-950 p-7 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Our Approach
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white">
                      01
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-sm text-slate-300">
                      Understand
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white">
                      02
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-sm text-slate-300">
                      Design
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white">
                      03
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-sm text-slate-300">
                      Build
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-white">
                      04
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-sm text-slate-300">
                      Scale
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason.number}
                  className={`border-slate-200 p-6 sm:p-7 ${
                    index < 4 ? "border-b" : ""
                  } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-bold text-blue-600">
                      {reason.number}
                    </span>

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-300" />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-slate-950">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-blue-400">
            <ArrowUpRight className="h-5 w-5" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Let&apos;s Build Something Together
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have an idea? Let&apos;s turn it into a digital solution.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Whether you need a business website, e-commerce platform, custom
            application, mobile app, or automation solution, NexaBizz can help
            you plan and build the next step.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-xs text-slate-500 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              Business-focused solutions
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              Modern technology
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              Built for growth
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
