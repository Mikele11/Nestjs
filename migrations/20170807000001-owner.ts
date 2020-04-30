export async function up(sequelize) {
  // language=PostgreSQL
  sequelize.query(`
      CREATE TABLE "owners" (
          "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
          UNIQUE INDEX "id_UNIQUE" ("id" ASC),
          "name" VARCHAR(30) NOT NULL,
          "purchaseDate" DATE,
          "car_id" INTEGER REFERENCES cars(id)
      );
  `);

  console.log('*Table owners created!*');
}

export async function down(sequelize) {
  // language=PostgreSQL
  sequelize.query(`DROP TABLE owners`);
}