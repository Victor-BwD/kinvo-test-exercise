import { PrismaClient } from "@prisma/client";
import categoriasJson from "../../config/constants/dummy/categorias.json";

class CategoriaSeeder {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async seed() {
    try {
      const count = await this.prisma.categorias.count();
      if (count > 0) return;

      await this.prisma.categorias.createMany({
        data: categoriasJson
      });
    } catch (error) {
      console.error("Erro ao popular o banco de dados:", error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default CategoriaSeeder;
