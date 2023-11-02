import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({
    jsxRuntime: "classic",
  }), ssr({
    prerender: false
  })],
});