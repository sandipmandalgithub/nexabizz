import Link from "next/link";
import {
ArrowRight,
BriefcaseBusiness,
CheckCircle2,
Code2,
Layers3,
Palette,
Smartphone,
Users,
} from "lucide-react";

const opportunities = [
{
icon: Code2,
title: "Frontend Development",
description:
"Work on responsive websites and web applications using modern frontend technologies and component-based development.",
skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
},
{
icon: Layers3,
title: "Backend Development",
description:
"Build APIs, business logic, integrations, and data-driven systems with maintainability and reliability in mind.",
skills: ["Node.js", "Express.js", "Java", "REST APIs"],
},
{
icon: Smartphone,
title: "Mobile Development",
description:
"Create mobile experiences that connect users with useful digital products across different device environments.",
skills: ["Flutter", "Dart", "API Integration", "Responsive UX"],
},
{
icon: Palette,
title: "UI/UX Design",
description:
"Design clear, accessible, and business-focused digital experiences from early concepts through polished interfaces.",
skills: ["UX Research", "Wireframes", "UI Design", "Prototyping"],
},
{
icon: BriefcaseBusiness,
title: "Project & Delivery",
description:
"Help organize requirements, priorities, communication, testing, and delivery across digital projects.",
skills: ["Planning", "Communication", "Documentation", "QA"],
},
{
icon: Users,
title: "Technology Collaboration",
description:
"Collaborate across development, design, data, and deployment to create practical end-to-end solutions.",
skills: ["Problem Solving", "Git", "Collaboration", "Learning"],
},
];

const values = [
{
number: "01",
title: "Keep learning",
description:
"Technology changes quickly. Curiosity and continuous learning are important parts of building better solutions.",
},
{
number: "02",
title: "Build with purpose",
description:
"We focus on understanding the business problem before choosing a technical or design solution.",
},
{
number: "03",
title: "Communicate clearly",
description:
"Good collaboration depends on clear requirements, honest progress updates, and constructive feedback.",
},
{
number: "04",
title: "Care about quality",
description:
"Readable code, thoughtful interfaces, testing, and maintainability are considered throughout development.",
},
];

const hiringSteps = [
{
number: "01",
title: "Introduction",
description:
"Start with a conversation about your background, interests, skills, and the type of work you want to explore.",
},
{
number: "02",
title: "Technical Discussion",
description:
"Depending on the opportunity, technical skills, problem solving, design thinking, or project experience may be discussed.",
},
{
number: "03",
title: "Project Fit",
description:
"The focus is on understanding how your skills and working style align with the needs of a particular project or opportunity.",
},
{
number: "04",
title: "Next Steps",
description:
"Relevant details, expectations, responsibilities, and next steps can then be discussed clearly.",
},
];

export default function CareersPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
Careers </p>


        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Build useful digital solutions with curious people.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          NexaBizz is built around technology, design, problem solving,
          and collaboration. We value people who enjoy learning,
          experimenting, and turning ideas into practical digital
          experiences.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/team"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Explore Our Capabilities
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Values */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          How We Think
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A culture built around learning and quality.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Great digital work comes from combining technical ability with
          curiosity, communication, ownership, and attention to detail.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value.number}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className="text-sm font-bold text-slate-400">
              {value.number}
            </span>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              {value.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Opportunities */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Potential Opportunities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Areas where skills can make an impact.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            These areas represent the types of capabilities that can
            contribute to NexaBizz projects. They are not a list of
            currently confirmed vacancies.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
        >
          Ask about opportunities
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => {
          const Icon = opportunity.icon;

          return (
            <div
              key={opportunity.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {opportunity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {opportunity.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Collaboration */}
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Working Together
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Collaboration is part of the product.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Digital projects involve more than writing code. Teams need to
            understand requirements, communicate decisions, review work,
            test ideas, and continuously improve the final experience.
          </p>

          <div className="mt-7 space-y-4">
            {[
              "Clear requirements and responsibilities",
              "Respectful technical and design discussions",
              "Regular feedback and iterative improvement",
              "Focus on maintainable, useful solutions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <span className="text-sm leading-7 text-slate-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            What Matters
          </p>

          <h3 className="mt-4 text-2xl font-bold tracking-tight">
            Skills are important. The willingness to grow matters too.
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            A strong digital contributor does not need to know every tool.
            What matters is the ability to learn, solve problems, ask good
            questions, communicate clearly, and take responsibility for
            the quality of the work.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Problem solving",
              "Continuous learning",
              "Technical curiosity",
              "Communication",
              "Ownership",
              "Attention to detail",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-slate-800 px-4 py-3 text-sm text-slate-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Process */}
  <section className="border-y border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Hiring Approach
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A straightforward conversation.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          When an opportunity is available, the process should make the
          role, expectations, technical requirements, and next steps clear.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hiringSteps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className="text-sm font-bold text-slate-400">
              {step.number}
            </span>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        Start a Conversation
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Interested in contributing to digital projects?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        If your skills and interests align with the kind of work described
        here, get in touch and introduce yourself.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
      >
        Contact NexaBizz
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
</div>
);
}
