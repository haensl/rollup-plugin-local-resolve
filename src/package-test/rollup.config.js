const localResolve = require('@haensl/rollup-plugin-local-resolve');

module.exports = {
  input: './index.js',
  output: {
    file: 'build/test-app.cjs.js',
    format: 'cjs',
    name: 'test-app',
    indent: false
  },
  plugins: [
    localResolve()
  ]
};
