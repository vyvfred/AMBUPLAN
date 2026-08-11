import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const githubPagesBasePath = process.env.VITE_BASE_PATH ?? (repositoryName ? `/${repositoryName}/` : "./");

export default defineConfig(() => ({
  base: githubPagesBasePath,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));