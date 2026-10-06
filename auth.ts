import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
session: {
strategy: "jwt",
},

pages: {
signIn: "/admin/login",
},

providers: [
Credentials({
name: "Admin Credentials",


  credentials: {
    email: {
      label: "Email",
      type: "email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },

  async authorize(credentials) {
    const email =
      typeof credentials?.email === "string"
        ? credentials.email.trim().toLowerCase()
        : "";

    const password =
      typeof credentials?.password === "string"
        ? credentials.password
        : "";

    if (!email || !password) {
      return null;
    }

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      return null;
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash,
    );

    if (!passwordMatches) {
      return null;
    }

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
    };
  },
}),


],

callbacks: {
async jwt({ token, user }) {
if (user) {
token.id = user.id;
}


  return token;
},

async session({ session, token }) {
  if (session.user && token.id) {
    session.user.id = token.id as string;
  }

  return session;
},


},

secret: process.env.AUTH_SECRET,
});
