import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      deno(),
   ],
   build: {
      rollupOptions: {
         input: {
            icon: "./icons/icons.ts"
         },
         output: {
            entryFileNames: "[name].json",
         },
      },
   }

});
