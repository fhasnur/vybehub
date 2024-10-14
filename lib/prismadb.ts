import { PrismaClient } from "@prisma/client";

declare global {
  let prisma: PrismaClient | undefined
};

const prismadb = (globalThis as typeof globalThis & { prisma: PrismaClient | undefined }).prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") (globalThis as typeof globalThis & { prisma: PrismaClient | undefined }).prisma = prismadb;

export default prismadb;