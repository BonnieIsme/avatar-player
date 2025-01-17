import { defineConfig } from 'rollup';
import path from 'path';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default defineConfig({
  input: 'src/index.tsx',
  output: [
    {
      exports: 'named',
      file: pkg.module,
      name: 'avatar-player',
      format: 'esm',
      globals: {
        vue: 'Vue',
      },
    },
    {
      exports: 'named',
      file: pkg.main,
      name: 'avatar-player',
      format: 'umd',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  external: ['vue'],
  plugins: [
    alias({
      entries: {
        '@': path.resolve(__dirname, 'src'),
      },
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: [
        [
          '@vue/babel-plugin-jsx',
          {
            optimize: true,
          },
        ],
      ],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    terser(),
  ],
});
