import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import AdminHeader from "@/components/admin/AdminHeader";

type ProtectedAdminLayoutProps = {
  children: ReactNode;
};

export default async function ProtectedAdminLayout({
  children,
}: ProtectedAdminLayoutProps) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/admin/login");
  }

  const admin = await prisma.admin.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      name: true,
      email: true,
    },
  });

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <>
      <AdminHeader
        name={admin.name}
        email={admin.email}
      />

      <div className="min-h-screen bg-slate-50">
        {children}
      </div>
    </>
  );
}