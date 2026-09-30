"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navItems = [
{ name: "Home", href: "/" },
{ name: "About", href: "/about" },
{ name: "Services", href: "/services" },
{ name: "Industries", href: "/industries" },
{ name: "Projects", href: "/projects" },
{ name: "Insights", href: "/blog" },
];

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return ( <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"> <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<Link
href="/"
className="flex items-center gap-2"
onClick={() => setIsOpen(false)}
> <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
N </div>
      <div className="leading-none">
        <span className="block text-lg font-bold tracking-tight text-slate-950">
          NEXABIZZ
        </span>

        <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Digital Solutions
        </span>
      </div>
    </Link>

    <nav className="hidden items-center gap-7 lg:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
        >
          {item.name}
        </Link>
      ))}
    </nav>

    <Link
      href="/contact"
      className="hidden items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 lg:flex"
    >
      Let&apos;s Talk
      <ArrowRight className="h-4 w-4" />
    </Link>

    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((previous) => !previous)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
    >
      {isOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </button>
  </div>

  {isOpen && (
    <div className="border-t border-slate-200 bg-white lg:hidden">
      <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition-colors last:border-b-0 hover:text-slate-950"
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Let&apos;s Talk
          <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </div>
  )}
</header>
)
}