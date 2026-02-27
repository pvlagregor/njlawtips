import "./stl/register";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { stlTableBlock } from "sanity-plugin-stl-table";
import { schema } from "./schema";

export default defineConfig({
  name: "njlawtips",
  title: "NJ Law Tips",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [...schema.types, stlTableBlock],
  },
});
