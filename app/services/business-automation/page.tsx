import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Cog,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquare,
  RefreshCw,
  Rocket,
  Workflow,
  Zap,
} from "lucide-react";

const automationSolutions = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and connect multiple steps into structured workflows that reduce manual effort.",
  },
  {
    icon: Bot,
    title: "Task Automation",
    description:
      "Automate recurring tasks such as notifications, data processing, approvals, updates, and routine operational activities.",
  },
  {
    icon: Database,
    title: "Data Automation",
    description:
      "Move, organize, validate, and process business information between applications, databases, and digital systems.",
  },
  {
    icon: MessageSquare,
    title: "Communication Automation",
    description:
      "Support automated emails, notifications, alerts, status updates, and customer communication based on business events.",
  },
];

const capabilities = [
  "Workflow automation",
  "Form-to-process automation",
  "Approval workflows",
  "Automated notifications",
  "Email automation",
  "Data synchronization",
  "Scheduled tasks",
  "Status-based actions",
  "Lead and enquiry workflows",
  "Report generation",
  "API-based integrations",
  "Business process monitoring",
];

const automationAreas = [
  {
    icon: GitBranch,
    title: "Lead Management",
    description:
      "Automate lead capture, assignment, status updates, notifications, and follow-up workflows.",
  },
  {
    icon: RefreshCw,
    title: "Operations",
    description:
      "Connect recurring operational tasks so teams can spend less time managing repetitive manual processes.",
  },
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Move and process information between forms, databases, APIs, dashboards, and business systems.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Trigger relevant messages, confirmations, reminders, alerts, and updates based on business events.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Reduce Manual Work",
    description:
      "Automate repetitive activities so teams can spend more time on work that requires human decision-making.",
  },
  {
    icon: Zap,
    title: "Improve Efficiency",
    description:
      "Connect related tasks and systems into structured workflows that help processes move more consistently.",
  },
  {
    icon: CheckCircle2,
    title: "Reduce Process Errors",
    description:
      "Standardize repetitive operations and reduce avoidable mistakes caused by manual data entry or repeated tasks.",
  },
  {
    icon: Activity,
    title: "Improve Visibility",
    description:
      "Create clearer process states, notifications, and tracking points so teams can understand what is happening.",
  },
];

const process = [
  {
    number: "01",
    title: "Identify",
    description:
      "We understand your current workflow, repetitive tasks, business rules, systems, and areas where automation can provide value.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "We document the process, inputs, decisions, actions, integrations, exceptions, and expected outcomes.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "We build the required workflow, API integrations, business logic, notifications, data handling, and automation rules.",
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "We test the workflow, verify important scenarios, and structure the solution for ongoing monitoring and improvement.",
  },
];

const technologies = [
  "Node.js",
  "Next.js",
  "React",
  "REST APIs",
  "Webhooks",
  "PostgreSQL",
  "MongoDB",
  "Cloud Services",
];

export default function BusinessAutomationPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Workflow className="h-3.5 w-3.5" />
                Business Automation
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Automate repetitive work and connect your business processes.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We build practical automation solutions that connect
                workflows, data, applications, and notifications so businesses
                can reduce repetitive manual work and operate more
                efficiently.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Automate Your Business
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Cog className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Turn repetitive processes into connected workflows.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Automation can connect forms, applications, databases, APIs,
                notifications, and business rules into a more structured
                process.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Workflows", "APIs", "Data", "Notifications"].map(
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
              What We Automate
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Practical automation for everyday business processes.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on processes where repetitive manual work, disconnected
              systems, or delayed communication can create unnecessary effort.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {automationSolutions.map((solution) => {
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
              <Zap className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Automation Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Connect the tasks that keep your business moving.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Automation can be designed around your existing processes and
              systems, starting with specific repetitive tasks and expanding
              as your requirements grow.
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

      {/* Automation Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Business Areas
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Automation across important business workflows.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Different businesses have different processes. Automation can be
              designed around the areas where your team spends significant
              time on repetitive digital tasks.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {automationAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Make repetitive processes easier to manage.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Well-structured automation can help teams spend less time on
                repetitive operations while improving process consistency and
                visibility.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => {
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
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From manual process to automated workflow.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We start by understanding how the process works today and then
              identify practical opportunities to automate it without
              unnecessarily complicating your existing operations.
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
                <Cloud className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Connect your systems with modern technology.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices depend on your existing systems, workflow
                requirements, integrations, data sources, and long-term
                maintenance needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map((technology) => (
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

      {/* Integration */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Connected Systems
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Bring your digital tools into one connected workflow.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Business automation can connect websites, forms, APIs,
                databases, internal applications, communication tools, and
                cloud services so information can move between systems based
                on defined business rules.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Connect web forms with internal workflows",
                  "Trigger actions through APIs and webhooks",
                  "Synchronize information between systems",
                  "Send automated notifications and updates",
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

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Example Workflow
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    Lead to Follow-up
                  </h3>
                </div>

                <Workflow className="h-6 w-6 text-slate-700" />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Customer submits enquiry",
                  "Lead information is stored",
                  "Team receives notification",
                  "Lead status is updated",
                  "Follow-up action is triggered",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      {index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <LockKeyhole className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Controlled Automation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Automation should follow your business rules.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We structure workflows around defined triggers, conditions,
              actions, permissions, and exception scenarios so automation
              supports your process instead of creating unnecessary complexity.
            </p>
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
            Automate Your Business
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Still handling repetitive work manually? Let&apos;s automate it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your current workflow, repetitive tasks, and systems.
            We can help identify a practical automation approach for your
            business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Automate Your Business
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
