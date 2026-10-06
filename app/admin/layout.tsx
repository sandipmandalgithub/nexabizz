import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import AdminHeader from "@/components/admin/AdminHeader";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps) {
  const session = await auth();

  const isLoginPage = false;

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