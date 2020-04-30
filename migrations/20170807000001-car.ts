export async function up(sequelize) {
  // language=PostgreSQL
  sequelize.query(`
      CREATE TABLE "cars" (
          "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
          UNIQUE INDEX "id_UNIQUE" ("id" ASC),
          "price" INTEGER NOT NULL,
          "firstRegistrationDate" DATE
      );
  `);

  console.log('*Table cars created!*');
}

export async function down(sequelize) {
  // language=PostgreSQL
  sequelize.query(`DROP TABLE cars`);
}