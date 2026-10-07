import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const ENQUIRY_STATUSES = [
  "NEW",
  "CONTACTED",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
] as const;

type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

async function verifyAdmin() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const admin = await prisma.admin.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });

  return admin;
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
        {
          status: 401,
        },
      );
    }

    const enquiries = await prisma.contactEnquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        enquiries,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Failed to fetch admin enquiries:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch enquiries.",
      },
      {
        status: 500,
      },
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
        {
          status: 401,
        },
      );
    }

    const body = await request.json();

    const enquiryId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    const status =
      typeof body?.status === "string"
        ? body.status.trim().toUpperCase()
        : "";

    if (!enquiryId) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !ENQUIRY_STATUSES.includes(
        status as EnquiryStatus,
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid enquiry status.",
        },
        {
          status: 400,
        },
      );
    }

    const enquiry = await prisma.contactEnquiry.findUnique({
      where: {
        id: enquiryId,
      },
      select: {
        id: true,
      },
    });

    if (!enquiry) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry not found.",
        },
        {
          status: 404,
        },
      );
    }

    const updatedEnquiry =
      await prisma.contactEnquiry.update({
        where: {
          id: enquiryId,
        },
        data: {
          status: status as EnquiryStatus,
        },
      });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry status updated successfully.",
        enquiry: updatedEnquiry,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Failed to update enquiry status:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update enquiry status.",
      },
      {
        status: 500,
      },
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
        {
          status: 401,
        },
      );
    }

    const body = await request.json();

    const enquiryId =
      typeof body?.id === "string"
        ? body.id.trim()
        : "";

    if (!enquiryId) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    const enquiry = await prisma.contactEnquiry.findUnique({
      where: {
        id: enquiryId,
      },
      select: {
        id: true,
      },
    });

    if (!enquiry) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry not found.",
        },
        {
          status: 404,
        },
      );
    }

    await prisma.contactEnquiry.delete({
      where: {
        id: enquiryId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry deleted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Failed to delete enquiry:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}