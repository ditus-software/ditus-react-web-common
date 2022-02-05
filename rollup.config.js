import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

export default {
  input: "src/index.js",
  output: {
    file: pkg.main,
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    // nodeResolve({
    //   extensions: ['.js'],
    // }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
      exclude: ['node_modules/**'],
    }),
    commonjs({
    }),
  ]
};
