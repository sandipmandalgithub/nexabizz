import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  MonitorCheck,
  Search,
  Settings2,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Education Websites",
    description:
      "Modern, responsive websites for schools, colleges, coaching institutes, training organizations, and education-focused businesses.",
    icon: Globe2,
  },
  {
    title: "Course & Program Pages",
    description:
      "Structured digital experiences for presenting courses, programs, departments, facilities, schedules, and other educational information.",
    icon: BookOpen,
  },
  {
    title: "Admission & Enquiry Workflows",
    description:
      "Digital forms and enquiry experiences that help prospective students and parents connect with the institution.",
    icon: Workflow,
  },
  {
    title: "Learning & Resource Portals",
    description:
      "Custom portals for organizing learning resources, documents, announcements, FAQs, and other digital content.",
    icon: FileText,
  },
  {
    title: "Student-Focused Applications",
    description:
      "User-friendly applications designed around student, faculty, administration, or organization-specific workflows.",
    icon: Users,
  },
  {
    title: "Admin & Reporting Tools",
    description:
      "Internal dashboards and reporting experiences that help organizations manage information and monitor digital activity.",
    icon: LayoutDashboard,
  },
];

const challenges = [
  {
    title: "Information overload",
    description:
      "Education organizations often have large amounts of information that need to be organized into clear and easy-to-navigate digital experiences.",
    icon: FileText,
  },
  {
    title: "Admissions & enquiries",
    description:
      "Prospective students and parents need straightforward ways to discover programs, understand requirements, and submit enquiries.",
    icon: Workflow,
  },
  {
    title: "Multiple audiences",
    description:
      "Students, parents, teachers, administrators, and visitors may have different digital needs and expectations.",
    icon: Users,
  },
  {
    title: "Operational efficiency",
    description:
      "Digital systems can help reduce repetitive administrative work by organizing information and supporting structured workflows.",
    icon: Settings2,
  },
];

const capabilities = [
  "Institution websites",
  "Course and program listings",
  "Admission enquiry forms",
  "Department and faculty sections",
  "Student resource portals",
  "Event and announcement sections",
  "Custom dashboards",
  "API and database integration",
];

const principles = [
  {
    title: "Easy navigation",
    description:
      "Organize courses, departments, admissions, resources, and contact information so users can find what they need quickly.",
    icon: Search,
  },
  {
    title: "Responsive experiences",
    description:
      "Build layouts that work consistently across smartphones, tablets, laptops, and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Accessible information",
    description:
      "Use readable typography, logical structure, clear interaction patterns, and appropriate content hierarchy.",
    icon: MonitorCheck,
  },
  {
    title: "Maintainable architecture",
    description:
      "Create structured applications and content systems that can evolve as the organization adds new programs and requirements.",
    icon: Code2,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
  "AWS",
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the institution, audiences, programs, content structure, workflows, and project goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Define information architecture, page structure, user journeys, features, and technical requirements.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the website or application, integrate required systems, and validate the core functionality.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Test the complete experience, prepare deployment, launch the solution, and support future improvements.",
  },
];

export default function EducationPage() {
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
                Education
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Digital solutions for modern education.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                NexaBizz helps educational organizations build clear,
                responsive, and scalable digital experiences for students,
                parents, faculty, administrators, and visitors.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Requirements
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

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <GraduationCap className="h-6 w-6" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                Make educational information easier to discover.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A strong digital presence can help educational organizations
                communicate programs, resources, admissions, events, and
                important information more effectively.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Present courses and programs clearly",
                  "Improve student and parent journeys",
                  "Simplify admission enquiries",
                  "Organize educational resources",
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
              Education Challenges
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Education technology starts with understanding the audience.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Educational organizations communicate with multiple audiences
              and manage large amounts of content. Their digital platforms
              need to make information clear while supporting practical
              workflows.
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
              Education Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build digital experiences around learning and administration.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              From an institution website to a custom education portal, we
              can build solutions around the organization&apos;s users,
              content, processes, and technology requirements.
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
                <BookOpen className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Flexible capabilities for educational organizations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Start with the capabilities your organization needs today and
                expand the platform as new programs, users, and digital
                requirements are introduced.
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

      {/* Student Experience */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Student & Parent Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Design every important digital journey with clarity.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Students and parents may visit an education website for very
                different reasons. A well-structured experience can make
                common journeys easier to understand and complete.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Find courses and programs",
                  "Understand admission information",
                  "Submit enquiries",
                  "Discover departments and faculty",
                  "Access resources and announcements",
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

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-5">
                  <BookOpen className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Programs
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Clear course and program information.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <Users className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Audiences
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Experiences for different user groups.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <Workflow className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Enquiries
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Structured enquiry and contact flows.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <BarChart3 className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">
                    Insights
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Useful reporting and digital analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <LayoutDashboard className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Admin Dashboards
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Manage structured content, enquiries, resources, and other
                organization-specific information through custom interfaces.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Database className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Data & Integrations
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Connect applications with databases, APIs, and other
                required business systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
                Performance
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Consider responsive performance, efficient assets, clean
                architecture, and reliable deployment from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
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
                Modern technology for scalable education platforms.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The technology stack can be selected around the project scope,
                content requirements, integrations, performance expectations,
                and long-term maintenance needs.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                <p className="text-sm leading-6 text-slate-600">
                  Applications handling user accounts or organization data
                  should use appropriate authentication, authorization,
                  validation, and security practices.
                </p>
              </div>
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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Development Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A structured process from requirements to launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We keep the organization&apos;s goals, user experience,
              technical architecture, content, testing, and deployment aligned
              throughout the project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
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
                Education Digital Solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have an education technology requirement?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Tell us about your institution, audiences, programs,
                workflows, and digital goals. We can explore a suitable
                technology approach around your requirements.
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
