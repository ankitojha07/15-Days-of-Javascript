// Use node-postgres (pg) + drizzle node-postgres adapter in CommonJS
const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

require("dotenv/config");

// dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

const db = drizzle(pool);

module.exports = { db };
