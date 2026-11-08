"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Code2,
  ExternalLink,
  Eye,
  FolderKanban,
  Image as ImageIcon,
  Loader2,
  Pencil,
  Plus,
  Search,
  Star,
  Trash2,
  X,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  published: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

type ProjectForm = {
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  published: boolean;
  sortOrder: string;
};

const emptyForm: ProjectForm = {
  title: "",
  slug: "",
  category: "",
  description: "",
  imageUrl: "",
  technologies: "",
  liveUrl: "",
  githubUrl: "",
  featured: false,
  published: false,
  sortOrder: "0",
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AdminProjectsPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] =
    useState<Project | null>(null);
  const [form, setForm] = useState<ProjectForm>(emptyForm);

  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/projects", {
        cache: "no-store",
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch projects.");
      }

      setError("");
      setProjects(data.projects ?? []);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch projects.",
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Initial project loading without calling a state-updating function
  // directly from the effect body.
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/admin/projects", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (response.status === 401) {
          router.push("/admin/login");
          return null;
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch projects.");
        }

        return data;
      })
      .then((data) => {
        if (!data) return;

        setError("");
        setProjects(data.projects ?? []);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;

        console.error(err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch projects.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [router]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.slug.toLowerCase().includes(query) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(query),
        );

      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "published" && project.published) ||
        (selectedStatus === "draft" && !project.published) ||
        (selectedStatus === "featured" && project.featured);

      return matchesSearch && matchesStatus;
    });
  }, [projects, searchQuery, selectedStatus]);

  const publishedCount = projects.filter(
    (project) => project.published,
  ).length;

  const draftCount = projects.filter(
    (project) => !project.published,
  ).length;

  const featuredCount = projects.filter(
    (project) => project.featured,
  ).length;

  function handleRefresh() {
    setLoading(true);
    void fetchProjects();
  }

  function openCreateModal() {
    setEditingProject(null);
    setForm(emptyForm);
    setSlugManuallyEdited(false);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  }

  function openEditModal(project: Project) {
    setEditingProject(project);
    setForm({
      title: project.title,
      slug: project.slug,
      category: project.category,
      description: project.description,
      imageUrl: project.imageUrl ?? "",
      technologies: project.technologies.join(", "),
      liveUrl: project.liveUrl ?? "",
      githubUrl: project.githubUrl ?? "",
      featured: project.featured,
      published: project.published,
      sortOrder: String(project.sortOrder),
    });
    setSlugManuallyEdited(true);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  }

  function closeModal() {
    if (saving) return;

    setIsModalOpen(false);
    setEditingProject(null);
    setForm(emptyForm);
  }

  function updateField<K extends keyof ProjectForm>(
    field: K,
    value: ProjectForm[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTitleChange(value: string) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: slugManuallyEdited ? current.slug : createSlug(value),
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (
      !form.title.trim() ||
      !form.category.trim() ||
      !form.description.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const technologies = form.technologies
      .split(",")
      .map((technology) => technology.trim())
      .filter(Boolean);

    const payload = {
      ...(editingProject ? { id: editingProject.id } : {}),
      title: form.title.trim(),
      slug: form.slug.trim() || createSlug(form.title),
      category: form.category.trim(),
      description: form.description.trim(),
      imageUrl: form.imageUrl.trim(),
      technologies,
      liveUrl: form.liveUrl.trim(),
      githubUrl: form.githubUrl.trim(),
      featured: form.featured,
      published: form.published,
      sortOrder: Number.parseInt(form.sortOrder, 10) || 0,
    };

    try {
      setSaving(true);

      const response = await fetch("/api/admin/projects", {
        method: editingProject ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            (editingProject
              ? "Failed to update project."
              : "Failed to create project."),
        );
      }

      setIsModalOpen(false);
      setEditingProject(null);
      setForm(emptyForm);

      setSuccess(
        editingProject
          ? "Project updated successfully."
          : "Project created successfully.",
      );

      await fetchProjects();
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(project: Project) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"? This action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(project.id);
      setError("");
      setSuccess("");

      const response = await fetch("/api/admin/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: project.id }),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to delete project.");
      }

      setProjects((current) =>
        current.filter((item) => item.id !== project.id),
      );

      setSuccess("Project deleted successfully.");
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Failed to delete project.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 lg:ml-64">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Page Heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Admin Panel
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Project Management
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Create, organize and manage your portfolio projects.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{success}</p>
            <button
              type="button"
              onClick={() => setSuccess("")}
              className="ml-auto"
              aria-label="Dismiss success message"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Total Projects
              </p>
              <FolderKanban className="h-5 w-5 text-slate-400" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {projects.length}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              All portfolio projects
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Published
              </p>
              <Eye className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {publishedCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Visible projects
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Drafts
              </p>
              <FolderKanban className="h-5 w-5 text-amber-500" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {draftCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Unpublished projects
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Featured
              </p>
              <Star className="h-5 w-5 text-amber-500" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {featuredCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Highlighted projects
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects by title, category or technology..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 lg:w-48"
                aria-label="Filter projects"
              >
                <option value="all">All Projects</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
                <option value="featured">Featured</option>
              </select>

              <button
                type="button"
                onClick={handleRefresh}
                disabled={loading}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <span>Refresh</span>
                )}
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredProjects.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-900">
                {projects.length}
              </span>{" "}
              projects
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading projects...
              </div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <FolderKanban className="h-6 w-6 text-slate-400" />
              </div>

              <h2 className="mt-4 text-base font-semibold text-slate-900">
                {projects.length === 0
                  ? "No projects yet"
                  : "No matching projects"}
              </h2>

              <p className="mt-1 max-w-md text-sm text-slate-500">
                {projects.length === 0
                  ? "Create your first portfolio project to get started."
                  : "Try changing your search or filter criteria."}
              </p>

              {projects.length === 0 && (
                <button
                  type="button"
                  onClick={openCreateModal}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Plus className="h-4 w-4" />
                  Create Project
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-4 p-4 sm:p-5 xl:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex h-40 shrink-0 items-center justify-center overflow-hidden bg-slate-100 sm:h-auto sm:min-h-44 sm:w-40">
                      {project.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="h-9 w-9 text-slate-300" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            project.published
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {project.published ? "Published" : "Draft"}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                            <Star className="h-3 w-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h2 className="mt-3 truncate text-base font-bold text-slate-950">
                        {project.title}
                      </h2>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {project.category}
                      </p>

                      <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 4 && (
                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
                        <span className="text-xs text-slate-400">
                          Added {formatDate(project.createdAt)}
                        </span>

                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} live website`}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} GitHub repository`}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                            >
                              <Code2 className="h-4 w-4" />
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={() => openEditModal(project)}
                            aria-label={`Edit ${project.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(project)}
                            disabled={deletingId === project.id}
                            aria-label={`Delete ${project.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {deletingId === project.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/50 p-3 sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="my-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Portfolio Content
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-950">
                  {editingProject ? "Edit Project" : "Create Project"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close project form"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-950 disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="max-h-[calc(100vh-190px)] space-y-5 overflow-y-auto p-5 sm:p-6">
                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="project-title"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Project Title *
                    </label>
                    <input
                      id="project-title"
                      required
                      maxLength={150}
                      value={form.title}
                      onChange={(event) =>
                        handleTitleChange(event.target.value)
                      }
                      placeholder="e.g. NexaCart"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project-category"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Category *
                    </label>
                    <input
                      id="project-category"
                      required
                      maxLength={100}
                      value={form.category}
                      onChange={(event) =>
                        updateField("category", event.target.value)
                      }
                      placeholder="e.g. E-commerce"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-slug"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    URL Slug
                  </label>
                  <input
                    id="project-slug"
                    value={form.slug}
                    onChange={(event) => {
                      setSlugManuallyEdited(true);
                      updateField("slug", createSlug(event.target.value));
                    }}
                    placeholder="project-url-slug"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Automatically generated from the project title.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="project-description"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Description *
                  </label>
                  <textarea
                    id="project-description"
                    required
                    rows={4}
                    maxLength={5000}
                    value={form.description}
                    onChange={(event) =>
                      updateField("description", event.target.value)
                    }
                    placeholder="Describe the project, its purpose and key features..."
                    className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm leading-6 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-image"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Project Image URL
                  </label>
                  <input
                    id="project-image"
                    type="url"
                    value={form.imageUrl}
                    onChange={(event) =>
                      updateField("imageUrl", event.target.value)
                    }
                    placeholder="https://example.com/project-image.jpg"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-technologies"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Technologies
                  </label>
                  <input
                    id="project-technologies"
                    value={form.technologies}
                    onChange={(event) =>
                      updateField("technologies", event.target.value)
                    }
                    placeholder="Next.js, TypeScript, Prisma, PostgreSQL"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Separate technologies using commas.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="project-live-url"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Live Website URL
                    </label>
                    <input
                      id="project-live-url"
                      type="url"
                      value={form.liveUrl}
                      onChange={(event) =>
                        updateField("liveUrl", event.target.value)
                      }
                      placeholder="https://example.com"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project-github-url"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      GitHub Repository URL
                    </label>
                    <input
                      id="project-github-url"
                      type="url"
                      value={form.githubUrl}
                      onChange={(event) =>
                        updateField("githubUrl", event.target.value)
                      }
                      placeholder="https://github.com/username/repository"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-sort-order"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Display Order
                  </label>
                  <input
                    id="project-sort-order"
                    type="number"
                    min="0"
                    value={form.sortOrder}
                    onChange={(event) =>
                      updateField("sortOrder", event.target.value)
                    }
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 sm:max-w-xs"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Lower numbers appear first.
                  </p>
                </div>

                <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={(event) =>
                        updateField("featured", event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-300 accent-slate-950"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Featured Project
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={form.published}
                      onChange={(event) =>
                        updateField("published", event.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-300 accent-slate-950"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      Publish Project
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="h-10 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                  {saving
                    ? "Saving..."
                    : editingProject
                      ? "Update Project"
                      : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}