import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
  log: ['error', 'warn', 'info', 'query']
});

export { prismaClient };