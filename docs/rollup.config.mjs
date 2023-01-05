import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import path from "path";

export default {
    input: "main.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: "inline"
    },
    plugins: [
        typescript(),
        commonjs(),
        resolve({ dedupe: ['preact', "preact/compat", "preact/hooks"] }),
        getBabelOutputPlugin({
            configFile: path.resolve(".babelrc"),
            sourceMaps: true,
            allowAllFormats: true
        }),
    ],
}
