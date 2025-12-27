import defineConfig from "drizzle-kit";

const config = defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./drizzle/schema.js",
  dbCredentials: {
    url: "postgresql://ankitFirstPostgres:admin123@localhost:5432/mydb",
  },
});

module.exports = config;
