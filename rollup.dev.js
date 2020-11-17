import serve from "rollup-plugin-serve";
import babel from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const path = require("path");
const extensions = [".js", ".jsx", ".ts", ".tsx"];

import template from "./html-template";

export default {
    external: [],
    input: path.resolve(__dirname, './src/index.tsx'),
    output: {
        file: "build/main.js"
    },
    plugins: [
        resolve({
            extensions,
            browser: true
        }),
        commonjs({
            extensions,
            include: [ "./entry.tsx", "node_modules/**" ],
        }),
        babel({
            extensions,
            babelrc: false,
            babelHelpers: "runtime",
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
            plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                [
                    "@babel/plugin-transform-typescript",
                    {
                        isTSX: true,
                        allowNamespaces: true,
                        allowDeclareFields: true,
                        onlyRemoveTypeImports: true,
                    },
                ],
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
                "transform-inline-environment-variables",
            ],
        }),
        html({
            title: "UI-kit demo page",
            publicPath: "",
            fileName: "index.html",
            template,
        }),
        serve({
            open: true,
            contentBase: ["build"],
            host: "localhost",
            port: 1857,
            historyApiFallback: true,
        }),
    ],
}
