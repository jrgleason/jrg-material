import {getMJS} from './src/index.mjs'
import pkg from './package.json';

export default [
  getMJS(pkg)
];