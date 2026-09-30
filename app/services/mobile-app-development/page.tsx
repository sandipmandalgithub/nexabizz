import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Gauge,
  Layers3,
  LockKeyhole,
  Rocket,
  Smartphone,
  TabletSmartphone,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: Smartphone,
    title: "Android Applications",
    description:
      "Mobile applications designed for Android users with responsive interfaces, practical functionality, and scalable architecture.",
  },
  {
    icon: TabletSmartphone,
    title: "Cross-Platform Apps",
    description:
      "Applications that can support multiple platforms while sharing a practical and maintainable development approach.",
  },
  {
    icon: Users,
    title: "Customer Apps",
    description:
      "Customer-facing mobile experiences for services, products, bookings, accounts, communication, and business interactions.",
  },
  {
    icon: Activity,
    title: "Business Apps",
    description:
      "Purpose-built mobile applications that help teams access information, manage workflows, and perform business tasks.",
  },
];

const features = [
  "Responsive mobile interfaces",
  "User registration and login",
  "Profile and account management",
  "Push notification-ready architecture",
  "REST API integration",
  "Database integration",
  "Forms and validation",
  "Search and filtering",
  "Role-based functionality",
  "File and media handling",
  "Analytics-ready structure",
  "Scalable application architecture",
];

const experienceFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Design interfaces around touch interactions, smaller screens, readable content, and practical mobile navigation.",
  },
  {
    icon: Gauge,
    title: "Responsive Performance",
    description:
      "Focus on efficient interfaces and sensible application architecture for a smoother day-to-day mobile experience.",
  },
  {
    icon: LockKeyhole,
    title: "Secure User Access",
    description:
      "Support authentication and authorization flows so application functionality can be organized around users and roles.",
  },
  {
    icon: Cloud,
    title: "Connected Applications",
    description:
      "Connect mobile applications with APIs, databases, cloud services, and existing business systems when required.",
  },
];

const businessBenefits = [
  {
    icon: Users,
    title: "Reach Customers Directly",
    description:
      "Create a dedicated mobile experience that gives customers a convenient way to interact with your business.",
  },
  {
    icon: Activity,
    title: "Support Business Operations",
    description:
      "Give employees and teams mobile access to important workflows, information, and business functionality.",
  },
  {
    icon: Layers3,
    title: "Connect Digital Systems",
    description:
      "Bring mobile experiences together with websites, APIs, databases, and other digital platforms.",
  },
  {
    icon: Code2,
    title: "Build for Future Growth",
    description:
      "Start with the functionality you need while keeping the application structure ready for future features and integrations.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your users, business goals, app requirements, target platforms, workflows, and integration needs.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the app structure, screens, navigation, user journeys, API requirements, and technical approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the mobile interface, application logic, backend integration, authentication, and required functionality.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test navigation, functionality, responsiveness, API communication, and important user flows before release.",
  },
];

const technologyAreas = [
  "Flutter",
  "Dart",
  "React Native",
  "Java",
  "REST APIs",
  "Node.js",
  "Firebase",
  "MongoDB",
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile App Development
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mobile applications built for modern users.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We build practical and responsive mobile applications that
                help businesses create better customer experiences, support
                internal operations, and connect mobile users with digital
                services.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Start a Mobile App Project
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
                <TabletSmartphone className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                A mobile experience designed around your users.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                From customer-facing apps to internal business tools, we focus
                on clear navigation, practical functionality, responsive
                interfaces, and reliable integration with digital systems.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Android", "iOS", "Cross-Platform", "APIs"].map((item) => (
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
              Mobile solutions shaped around your business.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you need a customer application, internal business tool,
              or cross-platform mobile experience, the solution can be
              structured around your users and requirements.
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

      {/* Features */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Code2 className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              App Features
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Functionality designed for real mobile use.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              We focus on the features that help users complete tasks easily
              while keeping the technical foundation flexible for future
              development.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
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

      {/* User Experience */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              User Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built around how people use mobile applications.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mobile applications need to make important actions easy to
              understand and comfortable to use. We keep navigation,
              interactions, and functionality focused on the user&apos;s
              journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experienceFeatures.map((item) => {
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

      {/* Business Benefits */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Layers3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Put your digital experience in your customers&apos; hands.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A well-designed mobile application can become a direct digital
                channel for customers, employees, and business operations.
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
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From mobile app idea to launch.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We follow a structured development process that keeps the
              application aligned with user needs, business requirements, and
              technical goals.
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
                Technology selected for the mobile experience.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Technology choices depend on the target platforms,
                functionality, backend requirements, integrations, and
                long-term maintenance needs of the application.
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
            Build Your Mobile App
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have a mobile app idea? Let&apos;s build it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your users, business goals, required features, and
            target platforms. We can turn your idea into a practical mobile
            application.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start a Mobile App Project
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
