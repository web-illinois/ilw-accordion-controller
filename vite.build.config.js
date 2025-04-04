import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-accordion-controller",
            entry: "ilw-accordion-controller.js",
            fileName: "ilw-accordion-controller",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-accordion-controller.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
