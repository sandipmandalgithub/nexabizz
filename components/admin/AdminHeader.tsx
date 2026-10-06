"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { signOut } from "next-auth/react";

type AdminHeaderProps = {
  name: string;
  email: string;
};

const navigationItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Enquiries",
    href: "/admin/enquiries",
    icon: Mail,
  },
];

export default function AdminHeader({
  name,
  email,
}: AdminHeaderProps) {
  const pathname = usePathname();

  async function handleLogout() {
    await signOut({
      callbackUrl: "/admin/login",
    });
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              N
            </div>

            <div className="leading-none">
              <span className="block text-base font-bold tracking-tight text-slate-950">
                NEXABIZZ
              </span>

              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Admin Panel
              </span>
            </div>
          </Link>
        </div>

        <div className="flex-1 px-4 py-6">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Navigation
          </p>

          <nav className="mt-3 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              <ExternalLink className="h-4 w-4" />
              View Website
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-200 p-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <ShieldCheck className="h-4 w-4 text-slate-600" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {name}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Admin Header */}
      <header className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
              N
            </div>

            <div className="leading-none">
              <span className="block text-sm font-bold tracking-tight text-slate-950">
                NEXABIZZ
              </span>

              <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Admin
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        <nav className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 sm:px-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            <ExternalLink className="h-4 w-4" />
            Website
          </Link>
        </nav>
      </header>
    </>
  );
}