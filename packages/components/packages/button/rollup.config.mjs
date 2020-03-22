import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import {string} from 'rollup-plugin-string';
import path from 'path';

import {getMJS, getUMD} from "../../node_modules/@jrg-material/build/dist/index.mjs"

import pkg from './package.json';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const pcss = postcss({
    extensions: ['.sass', '.scss'],
    plugins: [
        autoprefixer
    ],
    use: [
        [
            'sass', {
                includePaths: [path.resolve('node_modules')]
            }
        ]
    ]
})

const mjs = getMJS(pkg);
mjs.plugins = [
  string({include: '**/*.(html|css|svg)'}),
  resolve({
    extensions: ['.mjs', '.css', '.sass', '.scss']
  }),
  pcss
]
const umd = getUMD(pkg);
umd.plugins.push(pcss);
export default [
    umd,
    mjs
]