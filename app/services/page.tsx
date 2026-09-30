import Link from "next/link";
import {
ArrowRight,
Bot,
Cloud,
Code2,
Database,
Globe2,
Headphones,
Layers3,
Megaphone,
Server,
Settings2,
Smartphone,
ShoppingCart,
Sparkles,
} from "lucide-react";

const services = [
{
number: "01",
icon: Globe2,
title: "Web Development",
description:
"Modern, responsive, and business-focused websites designed to create a strong digital presence and provide smooth user experiences.",
features: [
"Business websites",
"Corporate websites",
"Responsive development",
"Performance-focused builds",
],
href: "/services/web-development",
},
{
number: "02",
icon: ShoppingCart,
title: "E-commerce Solutions",
description:
"Scalable e-commerce experiences that help businesses showcase products, manage online shopping workflows, and grow digitally.",
features: [
"Online stores",
"Product catalogues",
"Shopping experiences",
"Business workflows",
],
href: "/services/e-commerce",
},
{
number: "03",
icon: Layers3,
title: "Custom Web Applications",
description:
"Purpose-built web applications designed around specific business processes, workflows, users, and operational requirements.",
features: [
"Business applications",
"Admin dashboards",
"Custom workflows",
"Role-based experiences",
],
href: "/services/custom-web-applications",
},
{
number: "04",
icon: Smartphone,
title: "Mobile App Development",
description:
"Mobile application experiences focused on usability, performance, and consistent functionality across modern devices.",
features: [
"Android applications",
"Cross-platform solutions",
"API integration",
"Mobile-first experiences",
],
href: "/services/mobile-app-development",
},
{
number: "05",
icon: Sparkles,
title: "UI/UX Design",
description:
"Clean and user-focused interfaces that make digital products easier to understand, navigate, and use.",
features: [
"User interface design",
"User experience planning",
"Responsive layouts",
"Design systems",
],
href: "/services/ui-ux-design",
},
{
number: "06",
icon: Bot,
title: "Business Automation",
description:
"Digital workflows and automation solutions that help reduce repetitive tasks and improve operational efficiency.",
features: [
"Workflow automation",
"Process optimisation",
"System integrations",
"Business dashboards",
],
href: "/services/business-automation",
},
{
number: "07",
icon: Code2,
title: "Software Development",
description:
"Custom software solutions developed around business requirements, operational workflows, and long-term product goals.",
features: [
"Custom software",
"Business systems",
"Feature development",
"Application architecture",
],
href: "/services/software-development",
},
{
number: "08",
icon: Server,
title: "API & Backend Development",
description:
"Reliable backend systems and APIs that connect applications, manage data, and support scalable digital products.",
features: [
"REST APIs",
"Backend services",
"Database integration",
"Authentication systems",
],
href: "/services/api-backend-development",
},
{
number: "09",
icon: Cloud,
title: "Cloud & Deployment",
description:
"Deployment and cloud solutions that help digital products move from development environments to reliable production systems.",
features: [
"Cloud deployment",
"Application hosting",
"Production setup",
"Deployment workflows",
],
href: "/services/cloud-deployment",
},
{
number: "10",
icon: Megaphone,
title: "Digital Marketing Solutions",
description:
"Digital presence and marketing support designed to help businesses improve online visibility and connect with their audience.",
features: [
"Website optimisation",
"Content strategy",
"Online presence",
"Digital campaigns",
],
href: "/services/digital-marketing",
},
{
number: "11",
icon: Headphones,
title: "Website Maintenance & Support",
description:
"Ongoing technical support and maintenance to keep websites updated, functional, secure, and ready for future improvements.",
features: [
"Website updates",
"Bug fixes",
"Technical support",
"Performance improvements",
],
href: "/services/maintenance-support",
},
{
number: "12",
icon: Settings2,
title: "IT Consulting & Technology Solutions",
description:
"Technology guidance that helps businesses understand digital opportunities, evaluate solutions, and plan practical technology initiatives.",
features: [
"Technology consulting",
"Solution planning",
"Technical guidance",
"Digital strategy",
],
href: "/services/it-consulting",
},
];

const process = [
{
number: "01",
title: "Discover",
description:
"We understand your business, users, objectives, and the challenges the solution needs to address.",
},
{
number: "02",
title: "Define",
description:
"We convert requirements into a practical scope, solution structure, and technology direction.",
},
{
number: "03",
title: "Develop",
description:
"We build the solution with a focus on usability, responsiveness, performance, and maintainability.",
},
{
number: "04",
title: "Deliver",
description:
"We test, refine, and prepare the solution for launch and future improvements.",
},
];

const technologyAreas = [
"Frontend Development",
"Backend Development",
"Databases & APIs",
"Cloud & Deployment",
"Mobile Applications",
"Business Systems",
];

export default function ServicesPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-4xl"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
Our Services </p>


        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Digital solutions built around your business.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          From websites and e-commerce platforms to custom applications,
          mobile solutions, automation, and technology consulting, NexaBizz
          provides practical digital services for modern businesses.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Services Grid */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          What We Offer
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Technology services for different stages of digital growth.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Choose the service that matches your current requirement, or
          combine multiple capabilities to create a complete digital
          solution.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.number}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={service.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors group-hover:text-slate-600"
              >
                Explore Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* Technology Capabilities */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Database className="h-6 w-6" />
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Technology Capabilities
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          The right technology for the right problem.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          Different businesses require different technology choices. We
          focus on selecting practical tools and architectures based on
          the product, users, requirements, and future goals.
        </p>

        <Link
          href="/technologies"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-slate-600"
        >
          Explore Technologies
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {technologyAreas.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <Code2 className="h-4 w-4 text-slate-700" />
            </div>

            <span className="text-sm font-semibold text-slate-700">
              {item}
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
          How We Work
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          A simple process designed to keep projects moving.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-400">
          Clear stages help turn an initial requirement into a structured
          and usable digital product.
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

  {/* CTA */}
  <section className="border-t border-slate-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Sparkles className="h-6 w-6" />
      </div>

      <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Start Your Digital Journey
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Have a project in mind?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
        Tell us what you want to build, improve, or automate. We can
        explore the requirements and shape the right digital solution.
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
          href="/about"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
        >
          About NexaBizz
        </Link>
      </div>
    </div>
  </section>
</div>
);
}
