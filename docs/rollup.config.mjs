import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import path from "path";
import sourcemaps from "rollup-plugin-sourcemaps";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

/** @type {import('rollup').RollupOptions} */
export default {
    input: "main.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true,
    },
    treeshake: "recommended",
    plugins: [
        typescript(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('development'), preventAssignment: true }),
        commonjs({ extensions, sourceMap: true }),
        resolve({ extensions, dedupe: ['preact', "preact/compat", "preact/hooks"] }),   // TODO: Why, exactly, is dedupe needed? It doesn't not make sense, but specifically. Why.
        getBabelOutputPlugin({  // Used instead of babel because babel generates incorrect source maps for our code (but not Preact's)
            allowAllFormats: true,                  // Needed because we output in iife for this demo
            configFile: path.resolve(".babelrc"),   // getBabelOutputPlugin doesn't use the default config file                  
        }),
        sourcemaps()     // TODO: This is deprecated but needed for both Preact's and our own TS source maps.
    ],
}
