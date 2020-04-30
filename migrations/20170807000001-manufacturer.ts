export async function up(sequelize) {
  // language=PostgreSQL
  sequelize.query(`
      CREATE TABLE "manufacturers" (
          "id" SERIAL UNIQUE PRIMARY KEY NOT NULL,
          UNIQUE INDEX "id_UNIQUE" ("id" ASC),
          "name" VARCHAR(30) NOT NULL,
          "phone" VARCHAR(30) NOT NULL,
          "siret" VARCHAR(100) UNIQUE NOT NULL,
          "car_id" INTEGER REFERENCES cars(id)
      );
  `);

  console.log('*Table manufacturers created!*');
}

export async function down(sequelize) {
  // language=PostgreSQL
  sequelize.query(`DROP TABLE manufacturers`);
}