const process = require('process');
const username = process.env.POSTGRES_USER || "admin";
const password = process.env.POSTGRES_PASSWORD || "password";
module.exports = {
  "type": "postgres",
  "host": "127.0.0.1",
  "port": 5432,
  username,
  password,
  "database": "node_hero",
  "synchronize": true,
  "dropSchema": false,
  "logging": false,
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
}