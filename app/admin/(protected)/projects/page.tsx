"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Eye,
  Image as ImageIcon,
  Loader2,
  Pencil,
  Plus,
  Search,
  Star,
  Tag,
  Trash2,
  X,
} from "lucide-react";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  featured: boolean;
  published: boolean;
  publishedAt: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

type BlogForm = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string;
  author: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  sortOrder: string;
};

const emptyForm: BlogForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  category: "",
  tags: "",
  author: "NexaBizz Team",
  readTime: "5",
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

export default function AdminBlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [form, setForm] = useState<BlogForm>(emptyForm);

  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/blogs", {
        cache: "no-store",
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch blogs.");
      }

      setError("");
      setBlogs(data.blogs ?? []);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch blogs.",
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/admin/blogs", {
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
          throw new Error(data?.message || "Failed to fetch blogs.");
        }

        return data;
      })
      .then((data) => {
        if (!data) return;

        setError("");
        setBlogs(data.blogs ?? []);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;

        console.error(err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch blogs.",
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

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.slug.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "published" && blog.published) ||
        (selectedStatus === "draft" && !blog.published) ||
        (selectedStatus === "featured" && blog.featured);

      return matchesSearch && matchesStatus;
    });
  }, [blogs, searchQuery, selectedStatus]);

  const publishedCount = blogs.filter((blog) => blog.published).length;
  const draftCount = blogs.filter((blog) => !blog.published).length;
  const featuredCount = blogs.filter((blog) => blog.featured).length;

  function handleRefresh() {
    setLoading(true);
    void fetchBlogs();
  }

  function openCreateModal() {
    setEditingBlog(null);
    setForm(emptyForm);
    setSlugManuallyEdited(false);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  }

  function openEditModal(blog: Blog) {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      coverImage: blog.coverImage ?? "",
      category: blog.category,
      tags: blog.tags.join(", "),
      author: blog.author,
      readTime: String(blog.readTime),
      featured: blog.featured,
      published: blog.published,
      sortOrder: String(blog.sortOrder),
    });
    setSlugManuallyEdited(true);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  }

  function closeModal() {
    if (saving) return;

    setIsModalOpen(false);
    setEditingBlog(null);
    setForm(emptyForm);
  }

  function updateField<K extends keyof BlogForm>(
    field: K,
    value: BlogForm[K],
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
      !form.excerpt.trim() ||
      !form.content.trim() ||
      !form.author.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const readTime = Number.parseInt(form.readTime, 10);
    const sortOrder = Number.parseInt(form.sortOrder, 10);

    if (!Number.isInteger(readTime) || readTime < 1 || readTime > 120) {
      setError("Read time must be between 1 and 120 minutes.");
      return;
    }

    if (!Number.isInteger(sortOrder) || sortOrder < 0) {
      setError("Display order must be a non-negative number.");
      return;
    }

    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const payload = {
      ...(editingBlog ? { id: editingBlog.id } : {}),
      title: form.title.trim(),
      slug: form.slug.trim() || createSlug(form.title),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      coverImage: form.coverImage.trim(),
      category: form.category.trim(),
      tags,
      author: form.author.trim(),
      readTime,
      featured: form.featured,
      published: form.published,
      sortOrder,
    };

    try {
      setSaving(true);

      const response = await fetch("/api/admin/blogs", {
        method: editingBlog ? "PATCH" : "POST",
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
            (editingBlog
              ? "Failed to update blog."
              : "Failed to create blog."),
        );
      }

      setIsModalOpen(false);
      setEditingBlog(null);
      setForm(emptyForm);

      setSuccess(
        editingBlog
          ? "Blog updated successfully."
          : "Blog created successfully.",
      );

      await fetchBlogs();
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(blog: Blog) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${blog.title}"? This action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(blog.id);
      setError("");
      setSuccess("");

      const response = await fetch("/api/admin/blogs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: blog.id }),
      });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to delete blog.");
      }

      setBlogs((current) =>
        current.filter((item) => item.id !== blog.id),
      );

      setSuccess("Blog deleted successfully.");
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Failed to delete blog.",
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
              Blog Management
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Create, publish and manage your website articles and insights.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add Blog
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
                Total Blogs
              </p>
              <BookOpen className="h-5 w-5 text-slate-400" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {blogs.length}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              All website articles
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
              Visible articles
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Drafts
              </p>
              <BookOpen className="h-5 w-5 text-amber-500" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {draftCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Unpublished articles
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
              Highlighted articles
            </p>
          </div>
        </div>

        {/* Blog List */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search blogs by title, category, author or tag..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 lg:w-48"
                aria-label="Filter blogs"
              >
                <option value="all">All Blogs</option>
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
                {filteredBlogs.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-900">
                {blogs.length}
              </span>{" "}
              blogs
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading blogs...
              </div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <BookOpen className="h-6 w-6 text-slate-400" />
              </div>

              <h2 className="mt-4 text-base font-semibold text-slate-900">
                {blogs.length === 0
                  ? "No blogs yet"
                  : "No matching blogs"}
              </h2>

              <p className="mt-1 max-w-md text-sm text-slate-500">
                {blogs.length === 0
                  ? "Create your first article to get started."
                  : "Try changing your search or filter criteria."}
              </p>

              {blogs.length === 0 && (
                <button
                  type="button"
                  onClick={openCreateModal}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Plus className="h-4 w-4" />
                  Create Blog
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-4 p-4 sm:p-5 xl:grid-cols-2">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex h-40 shrink-0 items-center justify-center overflow-hidden bg-slate-100 sm:h-auto sm:min-h-52 sm:w-44">
                      {blog.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
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
                            blog.published
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </span>

                        {blog.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                            <Star className="h-3 w-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h2 className="mt-3 line-clamp-2 text-base font-bold text-slate-950">
                        {blog.title}
                      </h2>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {blog.category}
                      </p>

                      <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
                        {blog.excerpt}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {blog.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}

                        {blog.tags.length > 4 && (
                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">
                            +{blog.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                        <span>{blog.author}</span>
                        <span>{blog.readTime} min read</span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {blog.publishedAt
                            ? formatDate(blog.publishedAt)
                            : `Created ${formatDate(blog.createdAt)}`}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openEditModal(blog)}
                            aria-label={`Edit ${blog.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(blog)}
                            disabled={deletingId === blog.id}
                            aria-label={`Delete ${blog.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {deletingId === blog.id ? (
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
          <div className="my-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Website Content
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-950">
                  {editingBlog ? "Edit Blog" : "Create Blog"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close blog form"
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
                      htmlFor="blog-title"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Blog Title *
                    </label>
                    <input
                      id="blog-title"
                      required
                      maxLength={180}
                      value={form.title}
                      onChange={(event) =>
                        handleTitleChange(event.target.value)
                      }
                      placeholder="e.g. The Future of Digital Transformation"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="blog-category"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Category *
                    </label>
                    <input
                      id="blog-category"
                      required
                      maxLength={100}
                      value={form.category}
                      onChange={(event) =>
                        updateField("category", event.target.value)
                      }
                      placeholder="e.g. Technology"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="blog-slug"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    URL Slug
                  </label>
                  <input
                    id="blog-slug"
                    value={form.slug}
                    onChange={(event) => {
                      setSlugManuallyEdited(true);
                      updateField("slug", createSlug(event.target.value));
                    }}
                    placeholder="blog-url-slug"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Automatically generated from the blog title.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="blog-excerpt"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Short Excerpt *
                  </label>
                  <textarea
                    id="blog-excerpt"
                    required
                    rows={3}
                    maxLength={2000}
                    value={form.excerpt}
                    onChange={(event) =>
                      updateField("excerpt", event.target.value)
                    }
                    placeholder="Write a short summary of this article..."
                    className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm leading-6 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="blog-content"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Blog Content *
                  </label>
                  <textarea
                    id="blog-content"
                    required
                    rows={12}
                    maxLength={100000}
                    value={form.content}
                    onChange={(event) =>
                      updateField("content", event.target.value)
                    }
                    placeholder="Write the complete blog article here..."
                    className="w-full resize-y rounded-lg border border-slate-200 px-3 py-3 text-sm leading-7 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Enter the complete article content. Line breaks are preserved in the form.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="blog-cover-image"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Cover Image URL
                  </label>
                  <input
                    id="blog-cover-image"
                    type="url"
                    value={form.coverImage}
                    onChange={(event) =>
                      updateField("coverImage", event.target.value)
                    }
                    placeholder="https://example.com/blog-cover.jpg"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="blog-author"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Author *
                    </label>
                    <input
                      id="blog-author"
                      required
                      maxLength={100}
                      value={form.author}
                      onChange={(event) =>
                        updateField("author", event.target.value)
                      }
                      placeholder="NexaBizz Team"
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="blog-read-time"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Read Time (minutes)
                    </label>
                    <input
                      id="blog-read-time"
                      type="number"
                      min="1"
                      max="120"
                      value={form.readTime}
                      onChange={(event) =>
                        updateField("readTime", event.target.value)
                      }
                      className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="blog-tags"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Tags
                  </label>
                  <input
                    id="blog-tags"
                    value={form.tags}
                    onChange={(event) =>
                      updateField("tags", event.target.value)
                    }
                    placeholder="Technology, Business, Innovation"
                    className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Separate tags using commas.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="blog-sort-order"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Display Order
                  </label>
                  <input
                    id="blog-sort-order"
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
                      Featured Blog
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
                      Publish Blog
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
                    : editingBlog
                      ? "Update Blog"
                      : "Create Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}