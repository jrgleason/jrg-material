import resolve from '@rollup/plugin-node-resolve';
import {string} from 'rollup-plugin-string';

import {getMJS, getUMD} from "../../node_modules/@jrg-material/build/dist/index.mjs"

import pkg from './package.json';

const mjs = getMJS(pkg);
mjs.plugins = [
  string({include: '**/*.(html|css|svg)'}),
  resolve({
    extensions: ['.css']
  })
]
const umd = getUMD(pkg);

export default [
    umd,
    mjs
]