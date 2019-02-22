import buble from 'rollup-plugin-buble';

export default {
  input: 'src/index.js',
  plugins: [
    buble()
  ],
  external: [
    'path',
    'fs'
  ],
  output: [
    {
      file: 'dist/rollup-plugin-local-resolve.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/rollup-plugin-node-resolve.es.js',
      format: 'es'
    }
  ]
};
