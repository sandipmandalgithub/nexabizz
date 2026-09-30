import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  Gauge,
  Globe2,
  HardDrive,
  LockKeyhole,
  MonitorCheck,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const cloudSolutions = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description:
      "Deploy websites, web applications, APIs, and backend services on reliable cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Server Deployment",
    description:
      "Configure and deploy application servers with the environment settings required by your project.",
  },
  {
    icon: Globe2,
    title: "Domain & SSL",
    description:
      "Connect domains and configure HTTPS so your digital product can be accessed securely through the web.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description:
      "Set up the cloud resources required to run and support modern applications and business systems.",
  },
];

const deploymentCapabilities = [
  "Production deployment",
  "Cloud server configuration",
  "Environment variable setup",
  "Domain configuration",
  "SSL / HTTPS setup",
  "Database connectivity",
  "Application build configuration",
  "Process management",
  "Deployment troubleshooting",
  "Performance configuration",
  "Backup planning",
  "Monitoring setup",
];

const infrastructureFeatures = [
  {
    icon: Server,
    title: "Application Servers",
    description:
      "Configure server environments for websites, APIs, backend services, and other application workloads.",
  },
  {
    icon: Database,
    title: "Database Connectivity",
    description:
      "Connect deployed applications with the required database services and environment configuration.",
  },
  {
    icon: HardDrive,
    title: "Storage",
    description:
      "Use appropriate storage solutions for application assets, uploaded files, backups, and other data.",
  },
  {
    icon: Settings2,
    title: "Environment Configuration",
    description:
      "Separate development and production configuration to keep deployment settings organized and controlled.",
  },
];

const securityFeatures = [
  {
    icon: LockKeyhole,
    title: "Secure Configuration",
    description:
      "Keep environment-specific secrets and configuration values outside publicly accessible application code.",
  },
  {
    icon: ShieldCheck,
    title: "HTTPS & SSL",
    description:
      "Configure secure HTTPS access for production websites and applications where required.",
  },
  {
    icon: HardDrive,
    title: "Backup Planning",
    description:
      "Plan appropriate backup strategies for important application and database data.",
  },
  {
    icon: MonitorCheck,
    title: "Monitoring",
    description:
      "Track application availability and infrastructure health with suitable monitoring tools.",
  },
];

const performanceFeatures = [
  "Production-ready builds",
  "Efficient asset delivery",
  "Caching-ready architecture",
  "Server resource planning",
  "Database performance considerations",
  "Scalable infrastructure options",
  "Application monitoring",
  "Deployment health checks",
];

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "We review your application, technology stack, database, domain, hosting requirements, and deployment environment.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "We prepare the required server, cloud resources, environment variables, domains, databases, and supporting services.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We build and deploy the application, configure production settings, connect required services, and verify the deployment.",
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "We check the live application, review important deployment issues, and prepare the environment for ongoing maintenance.",
  },
];

const technologies = [
  "Vercel",
  "AWS",
  "EC2",
  "S3",
  "Cloud Services",
  "Node.js",
  "Next.js",
  "Docker",
];

export default function CloudDeploymentPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Cloud className="h-3.5 w-3.5" />
                Cloud & Deployment
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Deploy your digital products with a reliable cloud foundation.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We help businesses deploy websites, applications, APIs, and
                backend systems with practical cloud infrastructure,
                production configuration, security, and monitoring.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Plan a Deployment
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
                <Rocket className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                From local development to a live production environment.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A successful deployment connects your application, hosting,
                domain, database, environment configuration, security, and
                monitoring into a working production setup.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Cloud Hosting", "Deployment", "SSL / HTTPS", "Monitoring"].map(
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

      {/* Cloud Solutions */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Cloud Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Infrastructure designed around your application.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Choose the hosting and deployment approach that matches your
              application requirements, traffic, technology stack, and future
              growth.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cloudSolutions.map((solution) => {
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
              <Settings2 className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Deployment Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The practical pieces required for a production deployment.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              We can help prepare your application and hosting environment for
              a controlled move from development to production.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deploymentCapabilities.map((capability) => (
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

      {/* Infrastructure */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Infrastructure
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Connect the application with the infrastructure it needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Modern applications often depend on several infrastructure
              components working together. We organize those components around
              the project requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {infrastructureFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Security & Reliability
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Production infrastructure with security and reliability in
                mind.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Deployment is more than making an application available
                online. Production configuration should also consider secure
                access, backups, monitoring, and environment management.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Gauge className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Performance
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Prepare the deployment environment for real-world usage.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Hosting decisions and production configuration can affect
                application speed, reliability, resource usage, and the
                ability to scale as requirements change.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {performanceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Flow */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Activity className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Production Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A clear path from application build to live deployment.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                A structured deployment workflow helps reduce configuration
                mistakes and makes it easier to understand what is running in
                the production environment.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Application is prepared for production",
                  "Environment variables are configured",
                  "Database and external services are connected",
                  "Domain and HTTPS are configured",
                  "Application is deployed and verified",
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
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <Rocket className="h-5 w-5 text-slate-800" />

                <h3 className="text-lg font-bold text-slate-950">
                  Deployment Flow
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Build",
                  "Configure",
                  "Deploy",
                  "Connect",
                  "Verify",
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

      {/* Process */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Deployment Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured approach to going live.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We work through the infrastructure and deployment requirements
              step by step so the live environment is aligned with the
              application.
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
                <CloudCog className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Modern platforms for hosting and deployment.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The platform depends on your application architecture,
                hosting requirements, database, traffic expectations, and
                operational needs.
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

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Rocket className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Go Live
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to take your application from development to production?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your application, hosting requirements, domain,
            database, and deployment goals. We can help prepare a practical
            production environment for your digital product.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Plan a Deployment
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
