import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.NODE_ENV === "production" && process.env.RENDER ? "/data/data.db" : "./data.db",
  },
});
