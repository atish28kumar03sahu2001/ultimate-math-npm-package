import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default defineConfig({
    input: "src/index.ts",
    output: [
        {
            dir: "dist",
            format: "es",
            name: "math-unlimited",
            entryFileNames: "[name].es.js",
        },
        {
            dir: "dist",
            format: "cjs",
            name: "math-unlimited",
            entryFileNames: "[name].cjs.js",
            exports: "auto",
        },
    ],
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        babel({
          babelHelpers: "bundled",
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          exclude: "node_modules/**",
        }),
    ]
})