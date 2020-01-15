import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {string} from 'rollup-plugin-string';

const myString = string({
  include: '**/*.(html|css|svg)',
});

const getMJS = function(pkg, plugins) {
  plugins = plugins || [];
  plugins.push(myString);
  return {
    input: pkg.src,
    plugins: plugins,
    external: ['ms'],
    output: [
      {
        file: pkg.main,
        format: 'esm',
      },
    ],
  };
};
const getCJS = function(pkg, plugins) {
  plugins = plugins || [
    myString,
    commonjs(),
  ];
  return {
    input: pkg.src,
    plugins: plugins,
    external: ['ms'],
    output: [
      {
        file: pkg.cjs,
        format: 'cjs',
      },
    ],
  };
};
const getUMD = function(pkg, plugins) {
  plugins = plugins || [
    myString,
    resolve(),
  ];
  return {
    input: pkg.src,
    plugins: plugins,
    external: ['ms'],
    output: [
      {
        name: 'jackiergleason',
        file: pkg.browser,
        format: 'umd',
      },
    ],
  };
};

export {getCJS, getMJS, getUMD};
