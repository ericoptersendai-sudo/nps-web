import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  base: repositoryName ? `/${repositoryName}/` : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173
  }
});
