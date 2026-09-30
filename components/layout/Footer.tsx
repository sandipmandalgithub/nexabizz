import Link from "next/link";
import {
ArrowRight,
Mail,
MapPin,
Phone,
} from "lucide-react";

const companyLinks = [
{ name: "About Us", href: "/about" },
{ name: "Our Work", href: "/projects" },
{ name: "Industries", href: "/industries" },
{ name: "Our Team", href: "/team" },
{ name: "Careers", href: "/careers" },
];

const serviceLinks = [
{ name: "Web Development", href: "/services/web-development" },
{ name: "E-commerce Solutions", href: "/services/e-commerce" },
{ name: "Mobile App Development", href: "/services/mobile-app-development" },
{ name: "UI/UX Design", href: "/services/ui-ux-design" },
{ name: "Business Automation", href: "/services/business-automation" },
];

const resourceLinks = [
{ name: "Case Studies", href: "/case-studies" },
{ name: "Technologies", href: "/technologies" },
{ name: "Insights", href: "/blog" },
{ name: "FAQ", href: "/faq" },
{ name: "Contact Us", href: "/contact" },
];

export default function Footer() {
return ( <footer className="border-t border-slate-800 bg-slate-950 text-slate-300"> <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"> <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
{/* Brand */} <div> <Link href="/" className="inline-flex items-center gap-2"> <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-950">
N </div>

          <div className="leading-none">
            <span className="block text-lg font-bold tracking-tight text-white">
              NEXABIZZ
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Digital Solutions
            </span>
          </div>
        </Link>

        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
          NexaBizz helps modern businesses build, launch, and scale
          through reliable digital solutions, thoughtful design, and
          modern technology.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-slate-300"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-sm font-semibold text-white">Company</h3>

        <ul className="mt-5 space-y-3">
          {companyLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-sm font-semibold text-white">Services</h3>

        <ul className="mt-5 space-y-3">
          {serviceLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-sm font-semibold text-white">Resources</h3>

        <ul className="mt-5 space-y-3">
          {resourceLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Contact strip */}
    <div className="mt-12 grid gap-4 border-y border-slate-800 py-7 sm:grid-cols-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900">
          <Mail className="h-4 w-4 text-slate-300" />
        </div>

        <div>
          <p className="text-xs text-slate-500">Email</p>
          <p className="mt-0.5 text-sm text-slate-300">
            hello@nexabizz.com
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900">
          <Phone className="h-4 w-4 text-slate-300" />
        </div>

        <div>
          <p className="text-xs text-slate-500">Phone</p>
          <p className="mt-0.5 text-sm text-slate-300">
            +91 00000 00000
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900">
          <MapPin className="h-4 w-4 text-slate-300" />
        </div>

        <div>
          <p className="text-xs text-slate-500">Location</p>
          <p className="mt-0.5 text-sm text-slate-300">
            India
          </p>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="flex flex-col gap-4 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="text-slate-500">
        © {new Date().getFullYear()} NexaBizz. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href="/privacy-policy"
          className="text-slate-500 transition-colors hover:text-white"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="text-slate-500 transition-colors hover:text-white"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </div>
</footer>

);
}
