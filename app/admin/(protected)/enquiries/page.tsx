"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Eye,
  Filter,
  Loader2,
  Mail,
  Phone,
  Search,
  Trash2,
  X,
} from "lucide-react";

type EnquiryStatus =
  | "NEW"
  | "CONTACTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

type Enquiry = {
  id: string;
  fullName: string;
  company: string | null;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  status: EnquiryStatus;
  createdAt: string;
};

const statusOptions: {
  value: EnquiryStatus;
  label: string;
}[] = [
  {
    value: "NEW",
    label: "New",
  },
  {
    value: "CONTACTED",
    label: "Contacted",
  },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
  },
  {
    value: "COMPLETED",
    label: "Completed",
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
  },
];

function getStatusLabel(status: EnquiryStatus) {
  return (
    statusOptions.find((option) => option.value === status)
      ?.label ?? status
  );
}

function getStatusClasses(status: EnquiryStatus) {
  switch (status) {
    case "NEW":
      return "bg-blue-50 text-blue-700 ring-blue-600/20";

    case "CONTACTED":
      return "bg-amber-50 text-amber-700 ring-amber-600/20";

    case "IN_PROGRESS":
      return "bg-violet-50 text-violet-700 ring-violet-600/20";

    case "COMPLETED":
      return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";

    case "CANCELLED":
      return "bg-red-50 text-red-700 ring-red-600/20";

    default:
      return "bg-slate-50 text-slate-700 ring-slate-600/20";
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AdminEnquiriesPage() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);

  const [deletingId, setDeletingId] = useState<string | null>(
    null,
  );

  const [updatingStatusId, setUpdatingStatusId] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function fetchEnquiries() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/admin/enquiries",
        );

        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message ||
              "Failed to fetch enquiries.",
          );
        }

        setEnquiries(data.enquiries ?? []);
      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch enquiries.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchEnquiries();
  }, [router]);

  const serviceOptions = useMemo(() => {
    const services = enquiries
      .map((enquiry) => enquiry.service)
      .filter(Boolean);

    return Array.from(new Set(services)).sort();
  }, [enquiries]);

  const filteredEnquiries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return enquiries.filter((enquiry) => {
      const matchesSearch =
        !query ||
        enquiry.fullName
          .toLowerCase()
          .includes(query) ||
        (enquiry.company ?? "")
          .toLowerCase()
          .includes(query) ||
        enquiry.email
          .toLowerCase()
          .includes(query) ||
        enquiry.phone
          .toLowerCase()
          .includes(query) ||
        enquiry.service
          .toLowerCase()
          .includes(query);

      const matchesService =
        selectedService === "all" ||
        enquiry.service === selectedService;

      const matchesStatus =
        selectedStatus === "all" ||
        enquiry.status === selectedStatus;

      return (
        matchesSearch &&
        matchesService &&
        matchesStatus
      );
    });
  }, [
    enquiries,
    searchQuery,
    selectedService,
    selectedStatus,
  ]);

  async function handleStatusChange(
    enquiryId: string,
    status: EnquiryStatus,
  ) {
    try {
      setUpdatingStatusId(enquiryId);
      setError("");

      const response = await fetch(
        "/api/admin/enquiries",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: enquiryId,
            status,
          }),
        },
      );

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Failed to update enquiry status.",
        );
      }

      setEnquiries((currentEnquiries) =>
        currentEnquiries.map((enquiry) =>
          enquiry.id === enquiryId
            ? {
                ...enquiry,
                status,
              }
            : enquiry,
        ),
      );

      setSelectedEnquiry((currentEnquiry) =>
        currentEnquiry?.id === enquiryId
          ? {
              ...currentEnquiry,
              status,
            }
          : currentEnquiry,
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to update enquiry status.",
      );
    } finally {
      setUpdatingStatusId(null);
    }
  }

  async function handleDelete(enquiryId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(enquiryId);
      setError("");

      const response = await fetch(
        "/api/admin/enquiries",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: enquiryId,
          }),
        },
      );

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Failed to delete enquiry.",
        );
      }

      setEnquiries((currentEnquiries) =>
        currentEnquiries.filter(
          (enquiry) => enquiry.id !== enquiryId,
        ),
      );

      setSelectedEnquiry((currentEnquiry) =>
        currentEnquiry?.id === enquiryId
          ? null
          : currentEnquiry,
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to delete enquiry.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  function clearFilters() {
    setSearchQuery("");
    setSelectedService("all");
    setSelectedStatus("all");
  }

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedService !== "all" ||
    selectedStatus !== "all";

  return (
    <div className="min-h-screen bg-slate-50 lg:ml-64">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Admin Panel
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Enquiries
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage and track enquiries received from
              your website.
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    placeholder="Search by name, company, email, phone or service..."
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div className="relative w-full lg:w-56">
                  <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <select
                    value={selectedService}
                    onChange={(event) =>
                      setSelectedService(
                        event.target.value,
                      )
                    }
                    className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-9 pr-9 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  >
                    <option value="all">
                      All Services
                    </option>

                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>

                <div className="relative w-full lg:w-48">
                  <select
                    value={selectedStatus}
                    onChange={(event) =>
                      setSelectedStatus(
                        event.target.value,
                      )
                    }
                    className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  >
                    <option value="all">
                      All Statuses
                    </option>

                    {statusOptions.map((status) => (
                      <option
                        key={status.value}
                        value={status.value}
                      >
                        {status.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-900">
                    {filteredEnquiries.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-900">
                    {enquiries.length}
                  </span>{" "}
                  enquiries
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading enquiries...
              </div>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>

              <h2 className="mt-4 text-base font-semibold text-slate-900">
                No enquiries found
              </h2>

              <p className="mt-1 max-w-md text-sm text-slate-500">
                Try changing your search or filter
                criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[1050px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Enquiry
                      </th>

                      <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Service
                      </th>

                      <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Budget
                      </th>

                      <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Date
                      </th>

                      <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredEnquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <td className="px-5 py-4">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">
                              {enquiry.fullName}
                            </p>

                            {enquiry.company && (
                              <p className="mt-0.5 truncate text-xs text-slate-500">
                                {enquiry.company}
                              </p>
                            )}

                            <p className="mt-1 truncate text-xs text-slate-400">
                              {enquiry.email}
                            </p>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <p className="max-w-44 text-sm font-medium text-slate-700">
                            {enquiry.service}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <p className="text-sm text-slate-600">
                            {enquiry.budget}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <div className="relative inline-flex">
                            <select
                              value={enquiry.status}
                              disabled={
                                updatingStatusId ===
                                enquiry.id
                              }
                              onChange={(event) =>
                                handleStatusChange(
                                  enquiry.id,
                                  event.target
                                    .value as EnquiryStatus,
                                )
                              }
                              className={`h-8 appearance-none rounded-full py-0 pl-3 pr-8 text-xs font-semibold ring-1 outline-none transition disabled:cursor-not-allowed disabled:opacity-60 ${getStatusClasses(
                                enquiry.status,
                              )}`}
                              aria-label={`Change status for ${enquiry.fullName}`}
                            >
                              {statusOptions.map(
                                (status) => (
                                  <option
                                    key={status.value}
                                    value={
                                      status.value
                                    }
                                  >
                                    {status.label}
                                  </option>
                                ),
                              )}
                            </select>

                            {updatingStatusId ===
                            enquiry.id ? (
                              <Loader2 className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 animate-spin" />
                            ) : (
                              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
                            )}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <p className="whitespace-nowrap text-sm text-slate-500">
                            {formatDate(
                              enquiry.createdAt,
                            )}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedEnquiry(
                                  enquiry,
                                )
                              }
                              className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                            >
                              <Eye className="h-4 w-4" />
                              View
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(
                                  enquiry.id,
                                )
                              }
                              disabled={
                                deletingId ===
                                enquiry.id
                              }
                              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                              aria-label={`Delete enquiry from ${enquiry.fullName}`}
                            >
                              {deletingId ===
                              enquiry.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divide-y divide-slate-100 lg:hidden">
                {filteredEnquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    className="p-4 sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {enquiry.fullName}
                        </p>

                        {enquiry.company && (
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {enquiry.company}
                          </p>
                        )}

                        <p className="mt-1 truncate text-xs text-slate-400">
                          {enquiry.email}
                        </p>
                      </div>

                      <div className="relative inline-flex shrink-0">
                        <select
                          value={enquiry.status}
                          disabled={
                            updatingStatusId ===
                            enquiry.id
                          }
                          onChange={(event) =>
                            handleStatusChange(
                              enquiry.id,
                              event.target
                                .value as EnquiryStatus,
                            )
                          }
                          className={`h-8 appearance-none rounded-full py-0 pl-3 pr-8 text-xs font-semibold ring-1 outline-none transition disabled:cursor-not-allowed disabled:opacity-60 ${getStatusClasses(
                            enquiry.status,
                          )}`}
                          aria-label={`Change status for ${enquiry.fullName}`}
                        >
                          {statusOptions.map(
                            (status) => (
                              <option
                                key={status.value}
                                value={status.value}
                              >
                                {status.label}
                              </option>
                            ),
                          )}
                        </select>

                        {updatingStatusId ===
                        enquiry.id ? (
                          <Loader2 className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 animate-spin" />
                        ) : (
                          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
                        )}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Service
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {enquiry.service}
                        </p>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Budget
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {enquiry.budget}
                        </p>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Timeline
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {enquiry.timeline}
                        </p>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Date
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {formatDate(
                            enquiry.createdAt,
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href={`tel:${enquiry.phone}`}
                        className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </a>

                      <a
                        href={`mailto:${enquiry.email}`}
                        className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedEnquiry(
                            enquiry,
                          )
                        }
                        className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(enquiry.id)
                        }
                        disabled={
                          deletingId === enquiry.id
                        }
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                        aria-label={`Delete enquiry from ${enquiry.fullName}`}
                      >
                        {deletingId === enquiry.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {selectedEnquiry && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedEnquiry(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Enquiry Details
                </p>

                <h2 className="mt-1 text-lg font-bold text-slate-950">
                  {selectedEnquiry.fullName}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedEnquiry(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close enquiry details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative inline-flex">
                  <select
                    value={selectedEnquiry.status}
                    disabled={
                      updatingStatusId ===
                      selectedEnquiry.id
                    }
                    onChange={(event) =>
                      handleStatusChange(
                        selectedEnquiry.id,
                        event.target
                          .value as EnquiryStatus,
                      )
                    }
                    className={`h-9 appearance-none rounded-full py-0 pl-3 pr-9 text-xs font-semibold ring-1 outline-none transition disabled:cursor-not-allowed disabled:opacity-60 ${getStatusClasses(
                      selectedEnquiry.status,
                    )}`}
                    aria-label="Change enquiry status"
                  >
                    {statusOptions.map((status) => (
                      <option
                        key={status.value}
                        value={status.value}
                      >
                        {status.label}
                      </option>
                    ))}
                  </select>

                  {updatingStatusId ===
                  selectedEnquiry.id ? (
                    <Loader2 className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 animate-spin" />
                  ) : (
                    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
                  )}
                </div>

                <span className="text-xs text-slate-400">
                  {getStatusLabel(
                    selectedEnquiry.status,
                  )}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Full Name
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.fullName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Company
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.company ||
                      "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="mt-1 block break-all text-sm font-medium text-slate-900 hover:underline"
                  >
                    {selectedEnquiry.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
                  >
                    {selectedEnquiry.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Service
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.service}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Budget
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.budget}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Timeline
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.timeline}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Submitted
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {formatDate(
                      selectedEnquiry.createdAt,
                    )}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Project Details
                </p>

                <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {selectedEnquiry.projectDetails}
                  </p>
                </div>
              </div>

              <div className="flex justify-end border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={() =>
                    handleDelete(selectedEnquiry.id)
                  }
                  disabled={
                    deletingId === selectedEnquiry.id
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {deletingId ===
                  selectedEnquiry.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                  Delete Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}