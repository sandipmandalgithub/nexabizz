import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  CalendarDays,
  Mail,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const [
    totalEnquiries,
    todayEnquiries,
    monthEnquiries,
    recentEnquiries,
    serviceGroups,
  ] = await Promise.all([
    prisma.contactEnquiry.count(),

    prisma.contactEnquiry.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    }),

    prisma.contactEnquiry.count({
      where: {
        createdAt: {
          gte: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            1,
          ),
        },
      },
    }),

    prisma.contactEnquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
      select: {
        id: true,
        fullName: true,
        company: true,
        email: true,
        service: true,
        createdAt: true,
      },
    }),

    prisma.contactEnquiry.groupBy({
      by: ["service"],
      _count: {
        service: true,
      },
      orderBy: {
        _count: {
          service: "desc",
        },
      },
      take: 5,
    }),
  ]);

  const topService = serviceGroups[0]?.service ?? "No enquiries yet";

  return (
    <main className="min-h-screen bg-slate-50 lg:ml-64">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Admin Panel
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Dashboard
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Monitor website enquiries and manage your NexaBizz
                administration.
              </p>
            </div>

            <Link
              href="/admin/enquiries"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" />
              View Enquiries
            </Link>
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <MessageSquare className="h-5 w-5 text-slate-700" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                All time
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Total Enquiries
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              {totalEnquiries}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <CalendarDays className="h-5 w-5 text-slate-700" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Today
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Today&apos;s Enquiries
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              {todayEnquiries}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <TrendingUp className="h-5 w-5 text-slate-700" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                This month
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Monthly Enquiries
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-950">
              {monthEnquiries}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <Mail className="h-5 w-5 text-slate-700" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Most requested
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Top Service
            </p>

            <p className="mt-1 truncate text-lg font-bold text-slate-950">
              {topService}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="text-base font-semibold text-slate-950">
                  Recent Enquiries
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Latest enquiries submitted through the website.
                </p>
              </div>

              <Link
                href="/admin/enquiries"
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
              >
                View all
              </Link>
            </div>

            {recentEnquiries.length === 0 ? (
              <div className="px-5 py-12 text-center">
                <MessageSquare className="mx-auto h-8 w-8 text-slate-300" />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  No enquiries yet
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  New contact enquiries will appear here.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentEnquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {enquiry.fullName}
                      </p>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        {enquiry.company
                          ? `${enquiry.company} · `
                          : ""}
                        {enquiry.email}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {enquiry.service}
                      </span>

                      <span className="text-xs text-slate-400">
                        {new Intl.DateTimeFormat("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }).format(enquiry.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-950">
                Top Requested Services
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Services selected most often by visitors.
              </p>
            </div>

            {serviceGroups.length === 0 ? (
              <div className="px-5 py-12 text-center">
                <TrendingUp className="mx-auto h-8 w-8 text-slate-300" />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  No service data
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Service statistics will appear here.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {serviceGroups.map((item, index) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        {index + 1}
                      </span>

                      <span className="truncate text-sm font-medium text-slate-700">
                        {item.service}
                      </span>
                    </div>

                    <span className="shrink-0 text-sm font-bold text-slate-950">
                      {item._count.service}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}