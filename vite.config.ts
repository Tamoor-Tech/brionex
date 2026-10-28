
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // GitHub Pages repository path
  base: "/brionex/",

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("/node_modules/")) return;

          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id))
            return "react-vendor";

          if (/\/node_modules\/motion\//.test(id))
            return "motion-vendor";

          if (/\/node_modules\/lucide-react\//.test(id))
            return "icons-vendor";

          if (/\/node_modules\/(@hookform|react-hook-form|zod)\//.test(id))
            return "forms-vendor";
        },
      },
    },
  },
});
