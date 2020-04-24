import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import rollupString from 'rollup-plugin-string';
import SassShadow from '@jrg/rollup-sass-shadow';

export class JRGBuild {
  constructor(pkg, __dirname) {
    this.pkg = pkg;
    this.shadow = new SassShadow(__dirname);
    this.string = rollupString.string({
      include: '**/*.(html|css|svg)',
    });
    this.basePlugins = [
      this.string,
      this.shadow.plugin,
    ];
  }
  get mjs() {
    return {
      input: this.pkg.src,
      plugins: this.basePlugins,
      external: ['ms'],
      output: [
        {
          file: this.pkg.main,
          format: 'esm',
        },
      ],
    };
  }
  get umd() {
    const plugins = this.basePlugins.concat([resolve()]);
    return {
      input: this.pkg.src,
      plugins: plugins,
      external: ['ms'],
      output: [
        {
          name: 'jackiergleason',
          file: this.pkg.browser,
          format: 'umd',
        },
      ],
    };
  }

  get cjs() {
    const plugins = this.basePlugins.concat([commonjs()]);
    return {
      input: this.pkg.src,
      plugins: plugins,
      external: ['ms'],
      output: [
        {
          file: this.pkg.cjs,
          format: 'cjs',
        },
      ],
    };
  }
}
