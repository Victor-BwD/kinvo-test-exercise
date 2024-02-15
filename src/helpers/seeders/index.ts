import CategoriaSeeder from "./categoria.seed";

async function populateCategoryDataBase() {
  const categorySeeder = new CategoriaSeeder();
  await categorySeeder.seed();
}

populateCategoryDataBase().catch(error => {
  console.error("Erro ao popular o banco de dados:", error);
});
