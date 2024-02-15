import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

// Basic class to be extended by all Prisma repositories
class BasePrismaRepository {
  protected prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor() {
    this.prisma = new PrismaClient();
  }
}

export { BasePrismaRepository };
