import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
const name = process.env.ADMIN_NAME?.trim();
const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!name) {
throw new Error("ADMIN_NAME is required.");
}

if (!email) {
throw new Error("ADMIN_EMAIL is required.");
}

if (!password) {
throw new Error("ADMIN_PASSWORD is required.");
}

if (password.length < 8) {
throw new Error("ADMIN_PASSWORD must be at least 8 characters.");
}

const passwordHash = await bcrypt.hash(password, 12);

const existingAdmin = await prisma.admin.findUnique({
where: {
email,
},
});

if (existingAdmin) {
await prisma.admin.update({
where: {
email,
},
data: {
name,
passwordHash,
},
});


console.log("Admin account updated successfully.");
return;


}

await prisma.admin.create({
data: {
name,
email,
passwordHash,
},
});

console.log("Admin account created successfully.");
}

main()
.catch((error) => {
console.error("Failed to create admin:", error);
process.exitCode = 1;
})
.finally(async () => {
await prisma.$disconnect();
});
