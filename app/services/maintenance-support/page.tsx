import Link from "next/link";
import {
Activity,
AlertCircle,
ArrowRight,
CheckCircle2,
Cloud,
Code2,
DatabaseBackup,
Gauge,
Headphones,
LockKeyhole,
MonitorCheck,
RefreshCw,
Search,
Server,
Settings2,
ShieldCheck,
Wrench,
} from "lucide-react";

const maintenanceSolutions = [
{
icon: Wrench,
title: "Website Maintenance",
description:
"Keep your website updated, stable, and reliable with regular technical maintenance and improvements.",
},
{
icon: AlertCircle,
title: "Bug Fixing & Troubleshooting",
description:
"Identify and resolve functional, layout, compatibility, and technical issues across your website.",
},
{
icon: ShieldCheck,
title: "Security Updates",
description:
"Apply important updates and security improvements to reduce avoidable technical and operational risks.",
},
{
icon: Gauge,
title: "Performance Optimization",
description:
"Improve loading experience, responsiveness, and technical performance across devices and browsers.",
},
{
icon: RefreshCw,
title: "Content & Technical Updates",
description:
"Handle website content changes, page updates, small feature improvements, and technical adjustments.",
},
{
icon: Headphones,
title: "Technical Support",
description:
"Get ongoing technical assistance when your website needs troubleshooting, updates, or improvements.",
},
];

const supportCapabilities = [
"Website health checks",
"Bug investigation and resolution",
"Dependency and package updates",
"Browser compatibility checks",
"Responsive layout fixes",
"Content and page updates",
"Performance improvements",
"Technical SEO maintenance",
"Form and integration checks",
"Database and API troubleshooting",
"Deployment assistance",
"Ongoing technical guidance",
];

const securityFeatures = [
{
icon: ShieldCheck,
title: "Security Maintenance",
description:
"Keep application dependencies, integrations, and technical components reviewed and updated.",
},
{
icon: LockKeyhole,
title: "Access & Configuration",
description:
"Review important application settings, environment configurations, and access-related technical areas.",
},
{
icon: RefreshCw,
title: "Regular Updates",
description:
"Apply appropriate framework, library, and platform updates while considering compatibility.",
},
{
icon: MonitorCheck,
title: "Health Checks",
description:
"Monitor important website functionality and identify issues before they become larger problems.",
},
];

const performanceFeatures = [
{
icon: Gauge,
title: "Speed Improvements",
description:
"Review page performance and identify opportunities to improve loading and interaction experience.",
},
{
icon: Search,
title: "Technical Review",
description:
"Inspect common technical bottlenecks affecting website usability, responsiveness, and performance.",
},
{
icon: Activity,
title: "Performance Monitoring",
description:
"Track important performance signals and investigate issues that can affect the customer experience.",
},
];

const contentSupport = [
"Text and content updates",
"Image replacement and optimization",
"New sections and page adjustments",
"Navigation and link updates",
"Contact information changes",
"Form and enquiry updates",
"Small UI improvements",
"Third-party integration adjustments",
];

const backupFeatures = [
{
icon: DatabaseBackup,
title: "Backup Planning",
description:
"Establish practical backup processes for important website and application data.",
},
{
icon: Cloud,
title: "Cloud & Deployment Support",
description:
"Assist with deployment environments, hosting configuration, and production updates.",
},
{
icon: Server,
title: "Recovery Assistance",
description:
"Help investigate deployment or application issues and restore normal operation where appropriate.",
},
];

const maintenanceProcess = [
{
number: "01",
title: "Review",
description:
"We understand the current website, identify technical requirements, and review existing issues.",
},
{
number: "02",
title: "Prioritize",
description:
"Issues and maintenance requirements are organized according to business impact and urgency.",
},
{
number: "03",
title: "Maintain",
description:
"Updates, fixes, improvements, and technical changes are implemented carefully.",
},
{
number: "04",
title: "Test",
description:
"Important functionality is tested across relevant devices, browsers, and application flows.",
},
{
number: "05",
title: "Monitor",
description:
"The website is reviewed after changes to help maintain stability and performance over time.",
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
"Git & GitHub",
"Vercel",
"AWS",
"Cloud Services",
"Modern Browsers",
];

const businessBenefits = [
"Reduce avoidable website downtime",
"Keep your website technically updated",
"Improve website stability and performance",
"Resolve issues before they become larger problems",
"Maintain a better customer experience",
"Keep content and business information current",
"Support ongoing digital growth",
"Access technical support when you need it",
];

export default function MaintenanceSupportPage() {
return ( <div className="bg-white text-slate-950">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"> <div className="max-w-4xl"> <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"> <Settings2 className="h-4 w-4" />
Website Maintenance & Support </div>


        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Keep Your Website
          <span className="block text-slate-500">
            Secure, Stable &amp; Up to Date
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Reliable website maintenance and technical support to keep your
          digital presence running smoothly, performing well, and ready
          for ongoing business needs.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Get Support
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Maintenance Solutions */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Maintenance Solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Ongoing support for your digital presence
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Websites need more than a successful launch. Regular maintenance
          helps keep functionality, content, security, and performance
          aligned with changing business requirements.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {maintenanceSolutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <div
              key={solution.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <Icon className="h-5 w-5 text-slate-800" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
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

  {/* Support Capabilities */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Support Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Practical technical support when your business needs it
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            From small website updates to technical troubleshooting,
            maintenance support can help your team focus on the business
            while keeping the digital experience dependable.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {supportCapabilities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
              <span className="text-sm leading-6 text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Security & Updates */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Security &amp; Updates
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Maintain a healthier technical foundation
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Ongoing technical maintenance helps reduce outdated dependencies,
          configuration issues, and avoidable problems that can affect
          website reliability.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {securityFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <Icon className="h-6 w-6 text-slate-800" />

              <h3 className="mt-5 text-base font-semibold text-slate-950">
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

  {/* Performance Monitoring */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Performance Monitoring
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Keep the customer experience fast and dependable
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Performance can change as websites grow. Regular reviews help
            identify areas where technical improvements can support a
            smoother experience across devices.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <Gauge className="h-5 w-5 text-slate-800" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Performance-focused maintenance
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Review page speed, responsiveness, technical
                  bottlenecks, and user-facing issues as part of ongoing
                  website support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {performanceFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-800" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  {/* Content & Technical Support */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Content &amp; Technical Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Keep your website aligned with your business
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Business information changes over time. Support can include
            practical content updates and small technical improvements
            without requiring a complete website rebuild.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contentSupport.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <Code2 className="h-4 w-4 shrink-0 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Backup & Recovery */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Backup &amp; Recovery
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Be prepared for technical issues
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          A practical backup and recovery approach can help businesses
          respond more effectively when deployment, application, or data
          issues occur.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {backupFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <Icon className="h-5 w-5 text-slate-800" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-950">
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

  {/* Maintenance Process */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Maintenance Process
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A structured approach to ongoing support
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Maintenance is handled through a practical workflow designed to
          keep changes controlled, tested, and aligned with business needs.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {maintenanceProcess.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="text-3xl font-bold text-slate-200">
              {step.number}
            </span>

            <h3 className="mt-5 text-lg font-semibold text-slate-950">
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

  {/* Technology */}
  <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Technology &amp; Tools
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Support across modern web technologies
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our maintenance approach can support modern web applications,
            APIs, databases, cloud environments, and deployment workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="flex min-h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center text-sm font-medium text-slate-700"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Business Benefits */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Business Benefits
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            More confidence in your day-to-day digital operations
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Consistent maintenance helps businesses keep their websites
            useful, current, and technically dependable as requirements
            change.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-slate-600"
          >
            Discuss your maintenance needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {businessBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
              <span className="text-sm leading-6 text-slate-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-800 bg-slate-950 py-20 sm:py-24">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        NEED ONGOING SUPPORT?
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Keep your website running smoothly.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
        Whether you need regular maintenance, technical troubleshooting,
        performance improvements, or ongoing support, NexaBizz can help
        keep your digital platform moving forward.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
        >
          View All Services
        </Link>
      </div>
    </div>
  </section>
</div>

);
}
