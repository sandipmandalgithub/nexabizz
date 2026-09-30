import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Globe2,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  Settings2,
  Share2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const marketingSolutions = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve your website structure, content, and search visibility so potential customers can discover your business through search engines.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence with content planning, campaign support, audience engagement, and platform-focused strategies.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Plan measurable digital campaigns focused on reaching relevant audiences and driving meaningful website actions.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Create useful and relevant content that supports search visibility, brand communication, customer education, and conversion goals.",
  },
];

const capabilities = [
  "Technical SEO foundations",
  "On-page SEO",
  "Keyword research",
  "Content planning",
  "Local SEO",
  "Social media strategy",
  "Campaign planning",
  "Landing page optimization",
  "Conversion-focused content",
  "Analytics setup",
  "Performance reporting",
  "Marketing recommendations",
];

const seoFeatures = [
  {
    icon: Globe2,
    title: "Technical Foundations",
    description:
      "Review important website structure, metadata, indexing, performance, and technical factors that support search visibility.",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description:
      "Improve page content so it communicates the business clearly while addressing relevant search intent and user needs.",
  },
  {
    icon: Search,
    title: "Search Opportunities",
    description:
      "Identify relevant search topics and content opportunities that align with the products, services, and audience of the business.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Improvement",
    description:
      "Use performance information to identify areas that can be refined as the website and marketing activity develop.",
  },
];

const performanceFeatures = [
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "Define the audience, business objective, offer, and campaign message before planning promotional activity.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Paths",
    description:
      "Connect marketing campaigns with focused landing pages, enquiry forms, contact actions, or other business goals.",
  },
  {
    icon: BarChart3,
    title: "Measurement",
    description:
      "Track relevant website and campaign metrics to understand traffic, engagement, and important user actions.",
  },
  {
    icon: Activity,
    title: "Optimization",
    description:
      "Review campaign and website performance to identify areas where messaging, targeting, or user experience can be improved.",
  },
];

const localMarketingFeatures = [
  "Google Business Profile support",
  "Local keyword targeting",
  "Location-focused landing pages",
  "Business contact optimization",
  "Local search visibility",
  "Review and reputation considerations",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, target audience, competitors, services, current website, and marketing objectives.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the relevant channels, content priorities, audience opportunities, measurement requirements, and campaign direction.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We implement agreed website, SEO, content, campaign, and digital marketing activities based on the project scope.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We review available performance information and identify practical improvements for future marketing activity.",
  },
];

const technologies = [
  "Google Analytics",
  "Search Console",
  "Google Business Profile",
  "SEO Tools",
  "Meta Platforms",
  "Conversion Tracking",
  "Marketing Dashboards",
  "Website Analytics",
];

const benefits = [
  "Improve online visibility",
  "Reach relevant audiences",
  "Create clearer marketing journeys",
  "Support local business discovery",
  "Make website traffic more actionable",
  "Measure important digital activity",
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                <Megaphone className="h-3.5 w-3.5" />
                Digital Marketing Solutions
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build a stronger digital presence around your business goals.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We help businesses improve their online visibility, connect
                with relevant audiences, and create measurable digital
                marketing experiences across search, content, social, and
                performance channels.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Discuss Your Marketing Goals
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
                <TrendingUp className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                Marketing that connects visibility with business action.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Digital marketing works best when your website, content,
                audience, campaigns, and measurement work together around a
                clear business objective.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["SEO", "Content", "Social", "Analytics"].map((item) => (
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
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Digital marketing solutions built around your audience.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We combine website, search, content, social, campaign, and
              analytics considerations to create a more connected digital
              marketing approach.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketingSolutions.map((solution) => {
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
              Marketing Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Cover the important building blocks of digital marketing.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Depending on your goals, we can combine search optimization,
              content, social, local marketing, campaign support, and
              measurement into a focused digital strategy.
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

      {/* SEO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              SEO
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Help your business become easier to discover through search.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Search visibility depends on many factors. We focus on practical
              website, content, technical, and local SEO foundations that
              support long-term digital visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {seoFeatures.map((feature) => {
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

      {/* Performance Marketing */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Target className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Performance Marketing
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Connect campaigns with measurable business actions.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Campaign activity can be connected with clear landing pages,
                conversion paths, audience definitions, and measurement so
                businesses can understand how users interact with their
                digital presence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {performanceFeatures.map((feature) => {
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

      {/* Local Marketing */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Globe2 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Local Business Marketing
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Help local customers discover and connect with your business.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                For businesses that serve a specific city, area, or local
                audience, digital presence should clearly communicate what the
                business offers, where it operates, and how customers can get
                in touch.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <h3 className="text-lg font-bold text-slate-950">
                Local Marketing Areas
              </h3>

              <div className="mt-6 space-y-3">
                {localMarketingFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg bg-white px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <LineChart className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Analytics & Reporting
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Use data to understand what is happening online.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Analytics can help businesses understand where visitors come
                from, which pages they interact with, and which actions matter
                most to the business.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <BarChart3 className="h-5 w-5 text-slate-800" />

                <h3 className="text-lg font-bold text-slate-950">
                  Example Measurement Areas
                </h3>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Website traffic",
                  "Traffic sources",
                  "Popular pages",
                  "User engagement",
                  "Enquiry actions",
                  "Contact interactions",
                  "Campaign activity",
                  "Conversion events",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Business Benefits
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Create a more connected digital marketing presence.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A clear digital marketing approach can help your business
              communicate more effectively online and create better paths from
              discovery to customer action.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />

                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {benefit}
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
              Marketing Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A structured approach from goals to measurable activity.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              We start with the business objective, select relevant digital
              channels, implement the agreed activities, and review available
              performance information.
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
                <BarChart3 className="h-6 w-6" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technology & Tools
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Use the right tools to support measurable digital activity.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Tools and platforms depend on your business objectives,
                website, audience, campaign requirements, and measurement
                needs.
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
            <Megaphone className="h-6 w-6" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Grow Your Digital Presence
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to build a more effective digital marketing presence?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Tell us about your business, audience, website, and marketing
            goals. We can help identify practical digital opportunities around
            search, content, campaigns, social, and analytics.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Discuss Your Marketing Goals
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
