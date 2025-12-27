// Use node-postgres (pg) + drizzle node-postgres adapter in CommonJS
const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://ankitFirstPostgres:admin123@localhost:5432/mydb";
const pool = new Pool({ connectionString });

const db = drizzle(pool);

module.exports = { db };
