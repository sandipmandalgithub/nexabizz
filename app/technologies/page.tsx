import Link from "next/link";
import type { Metadata } from "next";
import {
ArrowDown,
ArrowRight,
Blocks,
Boxes,
Braces,
Cloud,
Code2,
Database,
GitBranch,
Layers3,
MonitorSmartphone,
Server,
Smartphone,
Workflow,
Zap,
} from "lucide-react";

export const metadata: Metadata = {
title: "Technologies",
description:
"Explore the technologies and tools used in NexaBizz portfolio projects, including frontend, backend, databases, mobile development, and cloud deployment.",
};

const technologyGroups = [
{
id: "frontend",
number: "01",
title: "Frontend Development",
description:
"Build accessible, responsive, and engaging user interfaces for modern websites and web applications.",
icon: MonitorSmartphone,
accent: "from-blue-500/10 to-cyan-500/10",
technologies: [
{
name: "HTML5",
detail: "Semantic page structure",
mark: "H5",
},
{
name: "CSS3",
detail: "Styling and layouts",
mark: "C3",
},
{
name: "JavaScript",
detail: "Interactive experiences",
mark: "JS",
},
{
name: "TypeScript",
detail: "Typed JavaScript",
mark: "TS",
},
{
name: "React",
detail: "Component-based UI",
mark: "Re",
},
{
name: "Next.js",
detail: "Full-stack React framework",
mark: "Nx",
},
{
name: "Tailwind CSS",
detail: "Utility-first styling",
mark: "Tw",
},
],
},
{
id: "backend",
number: "02",
title: "Backend Development",
description:
"Develop application logic, server-side features, APIs, and integrations to support business requirements.",
icon: Server,
accent: "from-violet-500/10 to-indigo-500/10",
technologies: [
{
name: "Java",
detail: "Application development",
mark: "Ja",
},
{
name: "Spring Boot",
detail: "Java backend services",
mark: "Sp",
},
{
name: "Node.js",
detail: "JavaScript runtime",
mark: "Nd",
},
{
name: "Express.js",
detail: "Web and API framework",
mark: "Ex",
},
{
name: "REST APIs",
detail: "System communication",
mark: "API",
},
],
},
{
id: "databases",
number: "03",
title: "Databases & Data",
description:
"Organize application data with database technologies selected according to project needs and data structure.",
icon: Database,
accent: "from-emerald-500/10 to-teal-500/10",
technologies: [
{
name: "PostgreSQL",
detail: "Relational database",
mark: "Pg",
},
{
name: "MySQL",
detail: "Relational data storage",
mark: "My",
},
{
name: "MongoDB",
detail: "Document database",
mark: "Mg",
},
{
name: "Oracle Database",
detail: "Enterprise data systems",
mark: "Or",
},
],
},
{
id: "mobile",
number: "04",
title: "Mobile Development",
description:
"Create mobile application experiences for businesses that need to serve customers on smartphones.",
icon: Smartphone,
accent: "from-orange-500/10 to-amber-500/10",
technologies: [
{
name: "Flutter",
detail: "Cross-platform UI framework",
mark: "Fl",
},
{
name: "Dart",
detail: "Flutter programming language",
mark: "Da",
},
],
},
{
id: "devops",
number: "05",
title: "Tools & Collaboration",
description:
"Support development workflows with version control, collaboration, code reviews, and project management practices.",
icon: GitBranch,
accent: "from-pink-500/10 to-rose-500/10",
technologies: [
{
name: "Git",
detail: "Version control",
mark: "Gt",
},
{
name: "GitHub",
detail: "Code hosting and collaboration",
mark: "Gh",
},
{
name: "Postman",
detail: "API testing",
mark: "Pm",
},
{
name: "Docker",
detail: "Containerized applications",
mark: "Dk",
},
],
},
{
id: "cloud",
number: "06",
title: "Cloud & Deployment",
description:
"Prepare applications for hosting and deployment with suitable cloud platforms and modern delivery workflows.",
icon: Cloud,
accent: "from-sky-500/10 to-blue-500/10",
technologies: [
{
name: "AWS",
detail: "Cloud infrastructure",
mark: "Aw",
},
{
name: "Vercel",
detail: "Web application deployment",
mark: "Ve",
},
{
name: "CI/CD",
detail: "Automated delivery workflows",
mark: "CD",
},
],
},
];

const principles = [
{
icon: Blocks,
title: "Fit for the project",
description:
"Technology choices should reflect the project's requirements, complexity, timeline, and budget.",
},
{
icon: Workflow,
title: "Maintainable architecture",
description:
"Clear structure and reusable components help make applications easier to update and extend.",
},
{
icon: Zap,
title: "Performance and usability",
description:
"Responsive interfaces, sensible data handling, and efficient code support a smoother user experience.",
},
{
icon: Layers3,
title: "Room to grow",
description:
"A considered technical foundation can make future features and integrations easier to introduce.",
},
];

export default function TechnologiesPage() {
return (
<> <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50"> <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_40%)]" />


    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
          <Code2 className="h-4 w-4 text-blue-600" />
          Technologies & Tools
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          The technology behind{" "}
          <span className="text-blue-600">digital solutions.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Explore the programming languages, frameworks, databases, and
          tools represented across NexaBizz&apos;s digital solution
          concepts. Each project calls for a technology stack that fits
          its specific goals.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#technology-stack"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Explore Technologies
            <ArrowDown className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Modern frameworks
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Flexible architecture
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Project-focused choices
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-500/10 blur-2xl" />

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Development Ecosystem
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">
                A connected stack
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Braces className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <MonitorSmartphone className="h-5 w-5 text-blue-600" />
              <p className="mt-4 text-sm font-bold text-slate-900">
                Frontend
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Interfaces & experiences
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
              <Server className="h-5 w-5 text-violet-600" />
              <p className="mt-4 text-sm font-bold text-slate-900">
                Backend
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Logic & APIs
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <Database className="h-5 w-5 text-emerald-600" />
              <p className="mt-4 text-sm font-bold text-slate-900">
                Data
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Storage & retrieval
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
              <Cloud className="h-5 w-5 text-amber-600" />
              <p className="mt-4 text-sm font-bold text-slate-900">
                Delivery
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Hosting & deployment
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-950 p-4 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Boxes className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">
                Built around your requirements
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Tools work together to support a complete solution.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
          Illustrative development ecosystem, not a claim that every tool
          is used in every project.
        </p>
      </div>
    </div>
  </section>

  <section
    id="technology-stack"
    className="scroll-mt-24 bg-white py-20 sm:py-24"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Technology Stack
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Tools for every layer of development
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Browse the technologies by category, from user-facing
          interfaces to backend services, data storage, and deployment.
          The stack can vary depending on each project&apos;s scope.
        </p>
      </div>

      <div className="mt-14 space-y-7">
        {technologyGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <section
              key={group.id}
              id={group.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div
                  className={`bg-gradient-to-br ${group.accent} p-6 sm:p-8 lg:p-9`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/80 bg-white/80 text-slate-900 shadow-sm">
                      <GroupIcon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-bold tracking-[0.16em] text-slate-400">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                    {group.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {group.technologies.length} technologies and tools
                  </div>
                </div>

                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors hover:border-slate-300 hover:bg-white"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold tracking-tight text-slate-800 shadow-sm">
                          {technology.mark}
                        </div>

                        <div className="min-w-0">
                          <h4 className="break-words text-sm font-semibold text-slate-900">
                            {technology.name}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {technology.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </section>

  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Choosing technology with purpose
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            A useful technology stack is not simply a list of popular
            tools. It should support the people using the product, the
            business goals behind it, and the team responsible for
            maintaining it.
          </p>

          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => {
            const PrincipleIcon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <PrincipleIcon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
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
    </div>
  </section>

  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
            <Code2 className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Have a Project in Mind?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s find the right technology for your business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Tell us what you want to build. Start with your goals and
            requirements, then explore a practical approach to bringing
            your digital idea to life.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
);
}
