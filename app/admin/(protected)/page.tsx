import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  CalendarDays,
  CheckCircle2,
  CircleDot,
  Clock3,
  Mail,
  MessageSquare,
  PhoneCall,
  TrendingUp,
  XCircle,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const [
    totalEnquiries,
    todayEnquiries,
    monthEnquiries,
    recentEnquiries,
    serviceGroups,
    newEnquiries,
    contactedEnquiries,
    inProgressEnquiries,
    completedEnquiries,
    cancelledEnquiries,
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
        status: true,
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

    prisma.contactEnquiry.count({
      where: {
        status: "NEW",
      },
    }),

    prisma.contactEnquiry.count({
      where: {
        status: "CONTACTED",
      },
    }),

    prisma.contactEnquiry.count({
      where: {
        status: "IN_PROGRESS",
      },
    }),

    prisma.contactEnquiry.count({
      where: {
        status: "COMPLETED",
      },
    }),

    prisma.contactEnquiry.count({
      where: {
        status: "CANCELLED",
      },
    }),
  ]);

  const topService =
    serviceGroups[0]?.service ?? "No enquiries yet";

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

        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-950">
              Enquiry Status
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current enquiry pipeline by status.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Link
              href="/admin/enquiries?status=NEW"
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <CircleDot className="h-5 w-5 text-blue-600" />
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  New
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                New Enquiries
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-950">
                {newEnquiries}
              </p>

              <p className="mt-3 text-xs font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                View new enquiries →
              </p>
            </Link>

            <Link
              href="/admin/enquiries?status=CONTACTED"
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                  <PhoneCall className="h-5 w-5 text-amber-600" />
                </div>

                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  Contacted
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Contacted
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-950">
                {contactedEnquiries}
              </p>

              <p className="mt-3 text-xs font-medium text-amber-600 opacity-0 transition-opacity group-hover:opacity-100">
                View contacted enquiries →
              </p>
            </Link>

            <Link
              href="/admin/enquiries?status=IN_PROGRESS"
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50">
                  <Clock3 className="h-5 w-5 text-violet-600" />
                </div>

                <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  In Progress
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                In Progress
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-950">
                {inProgressEnquiries}
              </p>

              <p className="mt-3 text-xs font-medium text-violet-600 opacity-0 transition-opacity group-hover:opacity-100">
                View active enquiries →
              </p>
            </Link>

            <Link
              href="/admin/enquiries?status=COMPLETED"
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Completed
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Completed
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-950">
                {completedEnquiries}
              </p>

              <p className="mt-3 text-xs font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                View completed enquiries →
              </p>
            </Link>

            <Link
              href="/admin/enquiries?status=CANCELLED"
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                  Cancelled
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Cancelled
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-950">
                {cancelledEnquiries}
              </p>

              <p className="mt-3 text-xs font-medium text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
                View cancelled enquiries →
              </p>
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-950">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Quickly access the most important admin tasks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/admin/enquiries"
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Mail className="h-5 w-5" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    All Enquiries
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    View and manage all website enquiries.
                  </p>
                </div>

                <span className="text-lg text-slate-300 transition-colors group-hover:text-slate-700">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/admin/enquiries?status=NEW"
              className="group rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                <CircleDot className="h-5 w-5" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    New Enquiries
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Review newly received enquiries.
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700">
                  {newEnquiries}
                </span>
              </div>
            </Link>

            <Link
              href="/admin/enquiries?status=IN_PROGRESS"
              className="group rounded-xl border border-violet-100 bg-violet-50/50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-600 text-white">
                <Clock3 className="h-5 w-5" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    In Progress
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Continue working on active enquiries.
                  </p>
                </div>

                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">
                  {inProgressEnquiries}
                </span>
              </div>
            </Link>

            <Link
              href="/admin/enquiries?status=COMPLETED"
              className="group rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    Completed
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Review completed enquiries.
                  </p>
                </div>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  {completedEnquiries}
                </span>
              </div>
            </Link>
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

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {enquiry.service}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          enquiry.status === "NEW"
                            ? "bg-blue-50 text-blue-700"
                            : enquiry.status === "CONTACTED"
                              ? "bg-amber-50 text-amber-700"
                              : enquiry.status === "IN_PROGRESS"
                                ? "bg-violet-50 text-violet-700"
                                : enquiry.status === "COMPLETED"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-red-50 text-red-700"
                        }`}
                      >
                        {enquiry.status === "NEW"
                          ? "New"
                          : enquiry.status === "CONTACTED"
                            ? "Contacted"
                            : enquiry.status === "IN_PROGRESS"
                              ? "In Progress"
                              : enquiry.status === "COMPLETED"
                                ? "Completed"
                                : "Cancelled"}
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