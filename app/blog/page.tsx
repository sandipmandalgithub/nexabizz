
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BookOpen,
  Code2,
  Palette,
  ShoppingCart,
  Sparkles,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const principles = [
  {
    number: "01",
    title: "Practical insights",
    description:
      "Content should focus on useful ideas that can be applied to real digital projects and business situations.",
  },
  {
    number: "02",
    title: "Technology with purpose",
    description:
      "Tools and frameworks are discussed in the context of business requirements rather than technology for its own sake.",
  },
  {
    number: "03",
    title: "Clear communication",
    description:
      "Complex technical concepts should be explained in a way that both technical and business audiences can understand.",
  },
];

function getCategoryIcon(category: string) {
  const normalizedCategory = category.toLowerCase();

  if (
    normalizedCategory.includes("web") ||
    normalizedCategory.includes("development")
  ) {
    return Code2;
  }

  if (normalizedCategory.includes("e-commerce")) {
    return ShoppingCart;
  }

  if (
    normalizedCategory.includes("design") ||
    normalizedCategory.includes("ui") ||
    normalizedCategory.includes("ux")
  ) {
    return Palette;
  }

  if (normalizedCategory.includes("automation")) {
    return Bot;
  }

  if (
    normalizedCategory.includes("strategy") ||
    normalizedCategory.includes("business")
  ) {
    return BarChart3;
  }

  return Sparkles;
}

function formatDate(date: Date | null) {
  if (!date) return "Recently published";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function BlogPage() {
  let blogs: {
    id: string;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    coverImage: string | null;
    author: string;
    readTime: number;
    featured: boolean;
    publishedAt: Date | null;
  }[] = [];

  let fetchError = false;

  try {
    blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        excerpt: true,
        coverImage: true,
        author: true,
        readTime: true,
        featured: true,
        publishedAt: true,
      },
      orderBy: [
        { sortOrder: "asc" },
        { publishedAt: "desc" },
      ],
    });
  } catch (error) {
    console.error("Failed to load published blogs:", error);
    fetchError = true;
  }

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Insights
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Insights for modern digital businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore practical ideas around web development, digital
              experiences, technology, automation, and building better
              business solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Categories */}
      {categories.length > 0 && (
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Blog Listing */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured Topics
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ideas worth exploring.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              A growing collection of practical topics for businesses
              planning, building, or improving their digital presence.
            </p>
          </div>

          {fetchError ? (
            <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-red-400" />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Unable to load insights
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                We couldn&apos;t load the blog articles right now.
                Please try again later.
              </p>
            </div>
          ) : blogs.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => {
                const Icon = getCategoryIcon(blog.category);

                return (
                  <article
                    key={blog.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    {/* Cover Image */}
                    <Link
                      href={`/blog/${blog.slug}`}
                      aria-label={`Read ${blog.title}`}
                      className="relative block h-52 overflow-hidden bg-slate-100"
                    >
                      {blog.coverImage ? (
                        <div
                          role="img"
                          aria-label={blog.title}
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url("${blog.coverImage.replace(/"/g, "%22")}")`,
                          }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                          <Icon className="h-14 w-14 text-slate-400" />
                        </div>
                      )}

                      {blog.featured && (
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {blog.category}
                        </span>

                        <span className="text-xs font-medium text-slate-400">
                          Article
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold leading-8 text-slate-950 transition-colors group-hover:text-slate-600">
                        <Link href={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                        {blog.excerpt}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <UserRound className="h-3.5 w-3.5" />
                          {blog.author}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="h-3.5 w-3.5" />
                          {blog.readTime} min read
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(blog.publishedAt)}
                        </span>
                      </div>

                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-slate-500"
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <BookOpen className="h-8 w-8 text-slate-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Insights are coming soon.
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
                We&apos;re working on practical articles covering
                technology, digital experiences, business automation,
                and modern web development. Check back soon for new
                insights.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Perspective */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Our Perspective
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Useful thinking, without unnecessary complexity.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Digital projects involve business decisions, design choices,
                technical trade-offs, and ongoing improvement. Our insights
                are intended to make those decisions easier to understand.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-sm font-bold text-slate-400">
                    {principle.number}
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Roadmap */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Growing Library
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Practical insights for every digital journey.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  Explore practical guides, technical explanations,
                  project lessons, and digital strategy topics from
                  the NexaBizz team.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Build Something Better
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have a digital idea you want to turn into reality?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Let&apos;s discuss your requirements and explore a practical
            technology solution for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
