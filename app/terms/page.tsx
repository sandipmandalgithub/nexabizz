import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
FileText,
Globe2,
Mail,
ShieldCheck,
UserCheck,
} from "lucide-react";

const sections = [
{
icon: FileText,
title: "Use of the Website",
content: [
"The NexaBizz website is provided to share information about digital solutions, services, projects, technologies, and ways to get in touch with the business.",
"You agree to use the website for lawful purposes and in a way that does not interfere with its operation or security.",
],
},
{
icon: UserCheck,
title: "Information Provided by Visitors",
content: [
"When submitting information through a website form or other communication channel, you should provide information that is accurate and relevant to your enquiry.",
"You are responsible for ensuring that information you submit does not knowingly violate the rights of another person or organization.",
],
},
{
icon: Globe2,
title: "Services and Project Discussions",
content: [
"Information presented on this website describes the types of digital services NexaBizz may provide. It does not by itself create a service agreement, guarantee a specific deliverable, or constitute a binding project proposal.",
"Actual project scope, pricing, timelines, deliverables, responsibilities, technology choices, payment terms, and other conditions should be agreed separately before work begins.",
],
},
{
icon: ShieldCheck,
title: "Intellectual Property",
content: [
"Unless otherwise stated, website content such as text, branding, layouts, graphics, and original materials created for the NexaBizz website is intended for NexaBizz and should not be copied, reproduced, or redistributed without appropriate permission.",
"Third-party names, trademarks, logos, technologies, or product references remain the property of their respective owners.",
],
},
{
icon: CheckCircle2,
title: "Portfolio and Project Examples",
content: [
"Projects, case studies, examples, and concepts presented on the website may represent portfolio demonstrations or development concepts.",
"Unless specifically identified otherwise, these examples should not be interpreted as claims of completed work for a named client, guaranteed business results, or endorsements.",
],
},
{
icon: Mail,
title: "Contact and Communication",
content: [
"Contacting NexaBizz through the website does not automatically establish a client relationship or guarantee that a project will be accepted.",
"Any potential engagement may require further discussion and a separate written agreement covering the applicable project terms.",
],
},
];

const principles = [
"Use the website for lawful and legitimate purposes.",
"Do not attempt to disrupt, damage, or gain unauthorized access to the website or its infrastructure.",
"Do not copy or redistribute protected website content without permission.",
"Provide accurate information when submitting an enquiry.",
"Review specific project agreements separately before starting paid work.",
];

export default function TermsPage() {
return ( <div className="bg-white">
{/* Hero */} <section className="border-b border-slate-200 bg-slate-50"> <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
Legal & Website Use </p>


        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          These terms describe the general conditions for using the
          NexaBizz website and provide context around website content,
          enquiries, services, and project discussions.
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
            <FileText className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950">
              General terms
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              By accessing or using the NexaBizz website, you agree to use
              the website responsibly and in accordance with applicable
              laws and these general terms.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              If you do not agree with these terms, please discontinue use
              of the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Terms Sections */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Terms
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Important conditions
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          The following sections explain the general expectations
          associated with using the NexaBizz website.
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

  {/* User Responsibilities */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Responsible Use
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Website usage principles
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            These principles help keep the website useful, secure, and
            accessible for visitors and potential clients.
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

  {/* Availability */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Website Availability
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Availability and changes
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          NexaBizz may update, modify, suspend, or remove website content
          and functionality from time to time. We may also perform
          maintenance or technical updates that temporarily affect
          availability.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          While reasonable efforts may be made to keep information useful
          and current, website content may change without prior notice.
        </p>
      </div>
    </div>
  </section>

  {/* Third Party */}
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-950">
          Third-party services and links
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          The website may eventually include links, integrations, or
          references to third-party services. Such services may have their
          own terms, policies, and practices. NexaBizz does not control the
          policies or availability of independent third-party services.
        </p>
      </div>
    </div>
  </section>

  {/* Changes */}
  <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Updates
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Changes to these terms
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          These terms may be updated as the website, services, business
          processes, or applicable requirements evolve. The updated
          version will be published on this page with a revised update
          date.
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
          These terms provide general website-use information and are not
          intended to replace a formal legal agreement for a specific
          client engagement. Project-specific work should be governed by
          the applicable proposal, statement of work, contract, or other
          written agreement between the relevant parties.
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
            Have Questions?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Want to discuss a project?
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Reach out to NexaBizz to discuss your requirements and explore
            the next steps.
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
