import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "url";
import { create } from "@openreplyde/web-docker-vite-plugin";

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const base = env.VITE_APP_BASE_PATH || "/";
  return {
    plugins: [
      create({
        basePath: base,
        fileName: "observed-module.json",
        module: "observed-module",
        type: "observed",
        selector: "observed-module",
      }),
    ],
    base,
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          index: fileURLToPath(new URL("./src/observed-module.ts", import.meta.url)),
        },
      }
    },
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
