import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schema";

// Manifest-safe schema definition for stlTableBlock (no React component imports).
// The full plugin with editor UI is bundled by the build step via src/sanity/sanity.config.ts.
const stlTableBlockSchema = {
  name: "stlTableBlock",
  title: "Structured Table Block",
  type: "object",
  fields: [
    { name: "stlString", title: "Table Data (STL Format)", type: "string" },
    { name: "caption", title: "Table Caption", type: "string" },
  ],
};

export default defineConfig({
  name: "njlawtips",
  title: "NJ Law Tips",
  projectId: "4zs9lbti",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [...schema.types, stlTableBlockSchema],
  },
});
