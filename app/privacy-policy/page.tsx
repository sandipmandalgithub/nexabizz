import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Database,
FileText,
LockKeyhole,
Mail,
ShieldCheck,
UserCheck,
} from "lucide-react";

const sections = [
{
icon: FileText,
title: "Information We May Collect",
content: [
"When you interact with NexaBizz, we may collect information that you voluntarily provide, such as your name, email address, phone number, company information, and project requirements.",
"We may also collect basic technical information when you visit the website, such as browser type, device information, approximate location, and pages visited, depending on the services and analytics tools enabled on the website.",
],
},
{
icon: Database,
title: "How Information May Be Used",
content: [
"Information provided through the website may be used to respond to enquiries, understand project requirements, communicate about services, and improve the website and overall user experience.",
"We aim to collect and use information only for legitimate business and service-related purposes.",
],
},
{
icon: LockKeyhole,
title: "Data Security",
content: [
"NexaBizz aims to use reasonable technical and organizational measures to protect information from unauthorized access, misuse, alteration, or disclosure.",
"However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
],
},
{
icon: UserCheck,
title: "Information Sharing",
content: [
"We do not intend to sell personal information to third parties.",
"Information may be shared with trusted service providers when necessary to operate the website, communicate with users, provide requested services, or maintain technical infrastructure.",
"Such sharing should be limited to what is reasonably necessary for the relevant purpose.",
],
},
{
icon: ShieldCheck,
title: "Cookies and Analytics",
content: [
"The website may use cookies or similar technologies to support functionality, understand website usage, or improve the user experience.",
"If analytics, advertising, or other third-party services are introduced in the future, the relevant privacy practices may be updated accordingly.",
],
},
{
icon: Mail,
title: "Contact and Privacy Requests",
content: [
"If you have a question about this privacy policy or how information is handled, you can contact NexaBizz using the contact details provided on the website.",
"For privacy-related requests, please provide enough information for us to understand and respond to the request appropriately.",
],
},
];

const principles = [
"Collect information for clear and legitimate purposes.",
"Use information only where it is reasonably relevant to the intended purpose.",
"Take reasonable steps to protect information.",
"Avoid unnecessary collection of personal information.",
"Review privacy practices as website functionality evolves.",
];

export default function PrivacyPolicyPage() {
return ( <div className="bg-white">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
Legal & Privacy </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          This page explains how NexaBizz may collect, use, protect, and
          handle information when you interact with our website and
          services.
        </p>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: October 2026
        </p>
      </div>
    </div>
  </section>

  {/* Introduction */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Our approach to privacy
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              NexaBizz values responsible handling of information. This
              policy is intended to provide a clear overview of the types
              of information that may be collected and the general
              purposes for which that information may be used.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              The exact information collected may depend on which website
              features, forms, communication channels, analytics tools,
              and services are active at a particular time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Policy Sections */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Policy Details
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          How information may be handled
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          The following sections describe the general privacy practices
          associated with the NexaBizz website.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {section.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    {section.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="leading-7 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* Privacy Principles */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Our Principles
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Responsible information handling
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Our goal is to keep information handling practical,
            transparent, and aligned with the purpose for which information
            is provided.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <ul className="space-y-5">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Policy Updates */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Policy Updates
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Keeping this policy current
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          As NexaBizz introduces new website features, communication
          channels, analytics services, or other digital functionality,
          this policy may be updated to reflect those changes.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          The latest version published on this page will indicate the
          applicable update date.
        </p>
      </div>
    </div>
  </section>

  {/* Disclaimer */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-950">
          Important note
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          This page provides general information about NexaBizz&apos;s
          intended privacy practices. It is not a substitute for
          jurisdiction-specific legal advice. If the website later
          processes sensitive information, uses advertising technologies,
          operates across additional jurisdictions, or introduces
          additional third-party services, the policy should be reviewed
          and updated accordingly.
        </p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Questions?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Need more information about privacy?
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Contact NexaBizz if you have questions about how information
            may be handled through the website.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
</div>
);
}
