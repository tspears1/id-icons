import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import { resolve } from 'jsr:@std/path'

export default defineConfig({
   plugins: [
      deno(),
   ],
   build: {
      lib: {
         entry: resolve(__dirname, 'icons/icons.ts'),
         formats: ['es'],
         fileName: 'icons'
      }
   }

});
