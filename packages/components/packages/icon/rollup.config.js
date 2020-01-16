import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {string} from 'rollup-plugin-string';
import pkg from './package.json';

export default [{
  input: 'src/jrg-icon-button.mjs',
  external: ['ms'],
  plugins: [
    string({
      include: "**/*.(html|css|svg)"
    })
  ],
  output: [
      {
          file: pkg.cjs,
          format: 'cjs'
      },
    	{
          file: pkg.main,
          format: 'esm'
      }
    ]
},{
    input: 'src/jrg-icon-button.mjs',
    plugins:[
        resolve(),
  		commonjs(),
        string({
          include: "**/*.(html|css|svg)"
        })
    ],
    output: [
       {
           name: 'jackiergleason',
           file: pkg.browser,
           format: 'umd'
       }
    ]
}]