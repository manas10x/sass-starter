import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-html-purgecss";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        projects: resolve(__dirname, "src/projects/index.html"),
        project: resolve(__dirname, "src/project/index.html"),
      },
    },
  },
});

export default {
	plugins: [htmlPurge()],
};
