import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function verifyAdmin() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  return prisma.admin.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });
}

function createSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isValidOptionalUrl(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return null;
  }

  if (!value.every((item) => typeof item === "string")) {
    return null;
  }

  return [
    ...new Set(
      value
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  ];
}

function getOptionalString(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  return typeof value === "string" ? value.trim() : null;
}

export async function GET() {
  try {
    const admin = await verifyAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    const blogs = await prisma.blog.findMany({
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        blogs,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to fetch blogs:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const admin = await verifyAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const title =
      typeof body?.title === "string"
        ? body.title.trim()
        : "";

    const category =
      typeof body?.category === "string"
        ? body.category.trim()
        : "";

    const excerpt =
      typeof body?.excerpt === "string"
        ? body.excerpt.trim()
        : "";

    const content =
      typeof body?.content === "string"
        ? body.content.trim()
        : "";

    const slugInput =
      typeof body?.slug === "string"
        ? body.slug.trim()
        : "";

    const slug = createSlug(slugInput || title);

    const tags =
      body?.tags === undefined
        ? []
        : normalizeStringArray(body.tags);

    const coverImage = getOptionalString(body?.coverImage);

    const author =
      typeof body?.author === "string" && body.author.trim()
        ? body.author.trim()
        : "NexaBizz Team";

    const readTime =
      body?.readTime === undefined
        ? 5
        : body.readTime;

    const sortOrder =
      body?.sortOrder === undefined
        ? 0
        : body.sortOrder;

    if (!title || !category || !excerpt || !content || !slug) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Title, category, excerpt, and content are required.",
        },
        { status: 400 },
      );
    }

    if (
      title.length > 180 ||
      category.length > 100 ||
      author.length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, category, or author is too long.",
        },
        { status: 400 },
      );
    }

    if (excerpt.length > 2000 || content.length > 100000) {
      return NextResponse.json(
        {
          success: false,
          message: "Excerpt or content is too long.",
        },
        { status: 400 },
      );
    }

    if (tags === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Tags must be an array of strings.",
        },
        { status: 400 },
      );
    }

    if (
      !isValidOptionalUrl(coverImage) ||
      (coverImage !== null && coverImage.length > 2048)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid HTTP or HTTPS cover image URL.",
        },
        { status: 400 },
      );
    }

    if (
      !Number.isInteger(readTime) ||
      readTime < 1 ||
      readTime > 120
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Reading time must be between 1 and 120 minutes.",
        },
        { status: 400 },
      );
    }

    if (
      !Number.isInteger(sortOrder) ||
      sortOrder < 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Sort order must be a non-negative integer.",
        },
        { status: 400 },
      );
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "A blog with this slug already exists.",
        },
        { status: 409 },
      );
    }

    const published = body?.published === true;

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        category,
        excerpt,
        content,
        coverImage,
        tags,
        author,
        readTime,
        featured: body?.featured === true,
        published,
        publishedAt: published ? new Date() : null,
        sortOrder,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully.",
        blog,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create blog:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog.",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const admin = await verifyAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const blogId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    if (!blogId) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog ID is required.",
        },
        { status: 400 },
      );
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found.",
        },
        { status: 404 },
      );
    }

    const data: {
      title?: string;
      slug?: string;
      category?: string;
      excerpt?: string;
      content?: string;
      coverImage?: string | null;
      tags?: string[];
      author?: string;
      readTime?: number;
      featured?: boolean;
      published?: boolean;
      publishedAt?: Date | null;
      sortOrder?: number;
    } = {};

    if (body.title !== undefined) {
      if (
        typeof body.title !== "string" ||
        !body.title.trim() ||
        body.title.trim().length > 180
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog title is required.",
          },
          { status: 400 },
        );
      }

      data.title = body.title.trim();
    }

    if (body.slug !== undefined || body.title !== undefined) {
      const slugSource =
        typeof body.slug === "string" && body.slug.trim()
          ? body.slug
          : data.title || existingBlog.title;

      const slug = createSlug(slugSource);

      if (!slug) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog slug is required.",
          },
          { status: 400 },
        );
      }

      const duplicateSlug = await prisma.blog.findFirst({
        where: {
          slug,
          NOT: { id: blogId },
        },
        select: { id: true },
      });

      if (duplicateSlug) {
        return NextResponse.json(
          {
            success: false,
            message: "A blog with this slug already exists.",
          },
          { status: 409 },
        );
      }

      data.slug = slug;
    }

    if (body.category !== undefined) {
      if (
        typeof body.category !== "string" ||
        !body.category.trim() ||
        body.category.trim().length > 100
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog category is required.",
          },
          { status: 400 },
        );
      }

      data.category = body.category.trim();
    }

    if (body.excerpt !== undefined) {
      if (
        typeof body.excerpt !== "string" ||
        !body.excerpt.trim() ||
        body.excerpt.trim().length > 2000
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog excerpt is required.",
          },
          { status: 400 },
        );
      }

      data.excerpt = body.excerpt.trim();
    }

    if (body.content !== undefined) {
      if (
        typeof body.content !== "string" ||
        !body.content.trim() ||
        body.content.trim().length > 100000
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog content is required.",
          },
          { status: 400 },
        );
      }

      data.content = body.content.trim();
    }

    if (body.tags !== undefined) {
      const tags = normalizeStringArray(body.tags);

      if (tags === null) {
        return NextResponse.json(
          {
            success: false,
            message: "Tags must be an array of strings.",
          },
          { status: 400 },
        );
      }

      data.tags = tags;
    }

    if (body.coverImage !== undefined) {
      if (
        !isValidOptionalUrl(body.coverImage) ||
        (body.coverImage !== null &&
          body.coverImage !== "" &&
          typeof body.coverImage === "string" &&
          body.coverImage.length > 2048)
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Please provide a valid cover image URL.",
          },
          { status: 400 },
        );
      }

      if (
        body.coverImage !== null &&
        body.coverImage !== "" &&
        typeof body.coverImage !== "string"
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Cover image must be a valid URL.",
          },
          { status: 400 },
        );
      }

      data.coverImage = body.coverImage || null;
    }

    if (body.author !== undefined) {
      if (
        typeof body.author !== "string" ||
        !body.author.trim() ||
        body.author.trim().length > 100
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid blog author is required.",
          },
          { status: 400 },
        );
      }

      data.author = body.author.trim();
    }

    if (body.readTime !== undefined) {
      if (
        !Number.isInteger(body.readTime) ||
        body.readTime < 1 ||
        body.readTime > 120
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Reading time must be between 1 and 120 minutes.",
          },
          { status: 400 },
        );
      }

      data.readTime = body.readTime;
    }

    if (body.featured !== undefined) {
      if (typeof body.featured !== "boolean") {
        return NextResponse.json(
          {
            success: false,
            message: "Featured must be a boolean.",
          },
          { status: 400 },
        );
      }

      data.featured = body.featured;
    }

    if (body.published !== undefined) {
      if (typeof body.published !== "boolean") {
        return NextResponse.json(
          {
            success: false,
            message: "Published must be a boolean.",
          },
          { status: 400 },
        );
      }

      data.published = body.published;

      if (body.published) {
        data.publishedAt =
          existingBlog.publishedAt ?? new Date();
      } else {
        data.publishedAt = null;
      }
    }

    if (body.sortOrder !== undefined) {
      if (
        !Number.isInteger(body.sortOrder) ||
        body.sortOrder < 0
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Sort order must be a non-negative integer.",
          },
          { status: 400 },
        );
      }

      data.sortOrder = body.sortOrder;
    }

    const blog = await prisma.blog.update({
      where: { id: blogId },
      data,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog updated successfully.",
        blog,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to update blog:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog.",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const admin = await verifyAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const blogId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    if (!blogId) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog ID is required.",
        },
        { status: 400 },
      );
    }

    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      select: { id: true },
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found.",
        },
        { status: 404 },
      );
    }

    await prisma.blog.delete({
      where: { id: blogId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to delete blog:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog.",
      },
      { status: 500 },
    );
  }
}