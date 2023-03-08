import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import path from "path";
import sourcemaps from "rollup-plugin-sourcemaps"

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
    input: "main.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true
    },
    plugins: [
        typescript({ sourceMap: true }), 
        commonjs({ sourceMap: true, extensions }), 
        resolve({ extensions, dedupe: ['preact', "preact/compat", "preact/hooks"] }),   // TODO: Why, exactly, is dedupe needed? It doesn't not make sense, but could the Preact error be avoided?
        babel({
            configFile: path.resolve(".babelrc"),
            sourceMaps: true,
            babelHelpers: "bundled",
            extensions
        }),
        sourcemaps()    // TODO: This is deprecated but needed for TS source maps
    ],
}
