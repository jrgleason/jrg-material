import {getMJS} from "../../node_modules/@jrg-material/build/dist/index.mjs"

import pkg from './package.json';

export default [getMJS(pkg)];