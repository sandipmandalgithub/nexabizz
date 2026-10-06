"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  Loader2,
  Mail,
  Phone,
  Search,
  Trash2,
  X,
} from "lucide-react";

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
  createdAt: string;
};

export default function AdminEnquiriesPage() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    async function fetchEnquiries() {
      try {
        const response = await fetch("/api/admin/enquiries");

        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }

        const data = await response.json();

        if (!response.ok || !data.success) {
          setErrorMessage(
            data.message || "Failed to load enquiries.",
          );
          return;
        }

        setEnquiries(data.enquiries || []);
      } catch {
        setErrorMessage(
          "Unable to load enquiries. Please try again.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchEnquiries();
  }, [router]);

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const searchValue = searchTerm.toLowerCase().trim();

    if (!searchValue) {
      return true;
    }

    return (
      enquiry.fullName.toLowerCase().includes(searchValue) ||
      (enquiry.company || "")
        .toLowerCase()
        .includes(searchValue) ||
      enquiry.email.toLowerCase().includes(searchValue) ||
      enquiry.phone.toLowerCase().includes(searchValue) ||
      enquiry.service.toLowerCase().includes(searchValue)
    );
  });

  async function handleDelete(id: string) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this enquiry?",
    );

    if (!shouldDelete) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch("/api/admin/enquiries", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.message || "Failed to delete enquiry.",
        );
        return;
      }

      setEnquiries((previous) =>
        previous.filter((enquiry) => enquiry.id !== id),
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(null);
      }
    } catch {
      setErrorMessage(
        "Unable to delete enquiry. Please try again.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  function formatDate(dateString: string) {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  }

  return (
    <main className="min-h-screen bg-slate-50 lg:ml-64">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Admin Panel
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Enquiries
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                View and manage enquiries submitted through the
                NexaBizz contact form.
              </p>
            </div>

            <div className="text-sm text-slate-500">
              {filteredEnquiries.length}{" "}
              {filteredEnquiries.length === 1
                ? "enquiry"
                : "enquiries"}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search enquiries..."
              className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="mb-6 flex items-center justify-between gap-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <span>{errorMessage}</span>

            <button
              type="button"
              onClick={() => setErrorMessage("")}
              className="shrink-0 rounded p-1 transition-colors hover:bg-red-100"
              aria-label="Dismiss error"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex min-h-80 items-center justify-center rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading enquiries...
            </div>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-center">
            <Mail className="h-10 w-10 text-slate-300" />

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              {searchTerm
                ? "No matching enquiries"
                : "No enquiries yet"}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              {searchTerm
                ? "Try a different search term."
                : "New enquiries submitted through the contact form will appear here."}
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Name
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Service
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="transition-colors hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {enquiry.fullName}
                          </p>

                          {enquiry.company && (
                            <p className="mt-1 text-xs text-slate-500">
                              {enquiry.company}
                            </p>
                          )}
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="space-y-1">
                          <a
                            href={`mailto:${enquiry.email}`}
                            className="block text-sm text-slate-700 transition-colors hover:text-slate-950"
                          >
                            {enquiry.email}
                          </a>

                          <a
                            href={`tel:${enquiry.phone}`}
                            className="block text-xs text-slate-500 transition-colors hover:text-slate-900"
                          >
                            {enquiry.phone}
                          </a>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                          {enquiry.service}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {formatDate(enquiry.createdAt)}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedEnquiry(enquiry)
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                          >
                            <Eye className="h-4 w-4" />
                            View Details
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(enquiry.id)
                            }
                            disabled={
                              deletingId === enquiry.id
                            }
                            className="inline-flex items-center justify-center rounded-lg border border-red-200 bg-white p-2 text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label={`Delete enquiry from ${enquiry.fullName}`}
                          >
                            {deletingId === enquiry.id ? (
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
          </div>
        )}
      </div>

      {selectedEnquiry && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-details-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Enquiry Details
                </p>

                <h2
                  id="enquiry-details-title"
                  className="mt-1 text-xl font-bold text-slate-950"
                >
                  {selectedEnquiry.fullName}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close enquiry details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Full Name
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.fullName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Company
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.company || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {selectedEnquiry.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {selectedEnquiry.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.service}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Budget
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.budget}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Timeline
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedEnquiry.timeline}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Submitted
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {formatDate(selectedEnquiry.createdAt)}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project Details
                </p>

                <div className="mt-2 rounded-xl bg-slate-50 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                    {selectedEnquiry.projectDetails}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Enquiry ID
                </p>

                <p className="mt-1 break-all font-mono text-xs text-slate-500">
                  {selectedEnquiry.id}
                </p>
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-200 px-6 py-4">
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}