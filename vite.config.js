import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" lets the site work under https://USERNAME.github.io/REPO/ with no extra setup
export default defineConfig({ plugins: [react()], base: "./" });
