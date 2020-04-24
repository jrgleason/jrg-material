import resolve from '@rollup/plugin-node-resolve';
import pug from 'rollup-plugin-pug';
// import rollupTerser from "rollup-plugin-terser";
// import * as rollupLint from "rollup-plugin-eslint";
import path from 'path';
import SassShadow from '@jrg/rollup-sass-shadow';

import pkg from './package.json';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const shadow = new SassShadow(__dirname);

const UMD = {
    input: pkg.src,
    plugins: [
    // TODO https://stackoverflow.com/questions/60697946/how-do-you-include-extensions-in-rollup-plugin-eslint
//         eslint({
//             extensions: [".mjs"]
//         }),
        shadow.plugin,
        resolve(),
        pug()
    ],
    external: ['ms'],
    output: [
      {
        name: 'jackiergleason',
        file: pkg.browser,
        format: 'umd',
      },
    ]
};

export default [UMD];