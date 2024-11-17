


import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // Entry point
  output: [
    {
      dir: 'dist',
      format: 'es', // Preserve ES modules for tree-shaking
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'cjs', // CommonJS for Node compatibility
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(), // Minify output
  ],
  external: ['react', 'react-dom'], // Mark peer dependencies as external
};

