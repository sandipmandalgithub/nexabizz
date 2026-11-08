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

function normalizeTechnologies(value: unknown) {
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

    const projects = await prisma.project.findMany({
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        projects,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects.",
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

    const description =
      typeof body?.description === "string"
        ? body.description.trim()
        : "";

    const slugInput =
      typeof body?.slug === "string"
        ? body.slug.trim()
        : "";

    const slug = createSlug(slugInput || title);

    const technologies = normalizeTechnologies(
      body?.technologies,
    );

    const imageUrl = body?.imageUrl || null;
    const liveUrl = body?.liveUrl || null;
    const githubUrl = body?.githubUrl || null;

    if (!title || !category || !description || !slug) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Title, category, and description are required.",
        },
        { status: 400 },
      );
    }

    if (title.length > 150 || category.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Title or category is too long.",
        },
        { status: 400 },
      );
    }

    if (description.length > 10000) {
      return NextResponse.json(
        {
          success: false,
          message: "Description is too long.",
        },
        { status: 400 },
      );
    }

    if (technologies === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Technologies must be an array of strings.",
        },
        { status: 400 },
      );
    }

    if (
      !isValidOptionalUrl(imageUrl) ||
      !isValidOptionalUrl(liveUrl) ||
      !isValidOptionalUrl(githubUrl)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide valid HTTP or HTTPS URLs.",
        },
        { status: 400 },
      );
    }

    const existingProject = await prisma.project.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "A project with this slug already exists.",
        },
        { status: 409 },
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        category,
        description,
        technologies,
        imageUrl,
        liveUrl,
        githubUrl,
        featured: body?.featured === true,
        published: body?.published === true,
        sortOrder:
          Number.isInteger(body?.sortOrder) &&
          body.sortOrder >= 0
            ? body.sortOrder
            : 0,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully.",
        project,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create project:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project.",
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

    const projectId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    if (!projectId) {
      return NextResponse.json(
        {
          success: false,
          message: "Project ID is required.",
        },
        { status: 400 },
      );
    }

    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        { status: 404 },
      );
    }

    const data: {
      title?: string;
      slug?: string;
      category?: string;
      description?: string;
      technologies?: string[];
      imageUrl?: string | null;
      liveUrl?: string | null;
      githubUrl?: string | null;
      featured?: boolean;
      published?: boolean;
      sortOrder?: number;
    } = {};

    if (body.title !== undefined) {
      if (
        typeof body.title !== "string" ||
        !body.title.trim() ||
        body.title.trim().length > 150
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid project title is required.",
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
          : data.title || existingProject.title;

      const slug = createSlug(slugSource);

      if (!slug) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid project slug is required.",
          },
          { status: 400 },
        );
      }

      const duplicateSlug = await prisma.project.findFirst({
        where: {
          slug,
          NOT: { id: projectId },
        },
        select: { id: true },
      });

      if (duplicateSlug) {
        return NextResponse.json(
          {
            success: false,
            message: "A project with this slug already exists.",
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
            message: "A valid project category is required.",
          },
          { status: 400 },
        );
      }

      data.category = body.category.trim();
    }

    if (body.description !== undefined) {
      if (
        typeof body.description !== "string" ||
        !body.description.trim() ||
        body.description.trim().length > 10000
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "A valid project description is required.",
          },
          { status: 400 },
        );
      }

      data.description = body.description.trim();
    }

    if (body.technologies !== undefined) {
      const technologies = normalizeTechnologies(
        body.technologies,
      );

      if (technologies === null) {
        return NextResponse.json(
          {
            success: false,
            message: "Technologies must be an array of strings.",
          },
          { status: 400 },
        );
      }

      data.technologies = technologies;
    }

    for (const field of ["imageUrl", "liveUrl", "githubUrl"] as const) {
      if (body[field] !== undefined) {
        if (!isValidOptionalUrl(body[field])) {
          return NextResponse.json(
            {
              success: false,
              message: `Invalid ${field} URL.`,
            },
            { status: 400 },
          );
        }

        data[field] = body[field] || null;
      }
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

    const project = await prisma.project.update({
      where: { id: projectId },
      data,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully.",
        project,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to update project:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update project.",
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

    const projectId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    if (!projectId) {
      return NextResponse.json(
        {
          success: false,
          message: "Project ID is required.",
        },
        { status: 400 },
      );
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { id: true },
    });

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        { status: 404 },
      );
    }

    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project deleted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to delete project:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete project.",
      },
      { status: 500 },
    );
  }
}
