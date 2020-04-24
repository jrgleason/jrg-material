import {JRGBuild} from '@jrg-material/build'
import pkg from './package.json';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const build = new JRGBuild(pkg, __dirname)

export default [
    build.mjs
];