import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import path from 'path';
import {getMJS, getUMD} from "../../node_modules/@jrg-material/build/dist/index.mjs";

import pkg from './package.json';

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
mjs.plugins.push(pcss);
const umd = getUMD(pkg);
umd.plugins.push(pcss);

export default [
    umd,
    mjs
]