require("dotenv/config");
// Use CommonJS require so this file works when package.json.type is "commonjs"
const { defineConfig } = require("drizzle-kit");

// dotenv.config();

module.exports = defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./drizzle/schema.js",
  dbCredentials: {
    // Prefer environment variable but fall back to local connection string for convenience
    url: process.env.DATABASE_URL,
  },
});
