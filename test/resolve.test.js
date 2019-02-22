const rollup = require('rollup');
const expect = require('chai').expect;
const join = require('path').join;
const assert = require('assert');
const localResolve = require('../src');

const expectNoWarnings = () =>
  (warning) => {
    if (warning) {
      throw new Error(`Unexpected warning: "${warning.message}"`);
    }
  };

const executeBundle = (bundle) =>
  bundle
    .generate({
      format: 'cjs'
    })
    .then((generated) => {
      const fn = new Function('module', 'exports', 'require', 'assert', generated. output[0].code);
      const module = {
        exports: {}
      };

      try {
        fn(module, module.exports, assert);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(generated.output[0].code);
        throw err;
      }

      return module;
    });

describe('rollup-plugin-local-resolve', () => {
  describe('relative forward import', () => {
    describe('index.js', () => {
      let module;

      beforeEach((done) => {
        const input = join(__dirname, 'fixtures/forward/js/index.js');
        rollup
          .rollup({
            input,
            onwarn: expectNoWarnings,
            plugins: [
              localResolve()
            ]
          })
          .then(executeBundle)
          .then((_module) => {
            module = _module;
          })
          .then(done);
      });

      it('finds the imported module', () => {
        expect(module.exports).to.equal('imported!');
      });
    });

    describe('index.jsx', () => {
      let module;

      beforeEach((done) => {
        const input = join(__dirname, 'fixtures/forward/jsx/index.js');
        rollup
          .rollup({
            input,
            onwarn: expectNoWarnings,
            plugins: [
              localResolve()
            ]
          })
          .then(executeBundle)
          .then((_module) => {
            module = _module;
          })
          .then(done);
      });

      it('finds the imported module', () => {
        expect(module.exports).to.equal('imported!');
      });
    });
  });

  describe('relative backward import', () => {
    describe('index.js', () => {
      let module;

      beforeEach((done) => {
        const input = join(__dirname, 'fixtures/backward/js/index.js');
        rollup
          .rollup({
            input,
            onwarn: expectNoWarnings,
            plugins: [
              localResolve()
            ]
          })
          .then(executeBundle)
          .then((_module) => {
            module = _module;
          })
          .then(done);
      });

      it('finds the imported module', () => {
        expect(module.exports).to.equal('imported!');
      });
    });

    describe('index.jsx', () => {
      let module;

      beforeEach((done) => {
        const input = join(__dirname, 'fixtures/backward/jsx/index.js');
        rollup
          .rollup({
            input,
            onwarn: expectNoWarnings,
            plugins: [
              localResolve()
            ]
          })
          .then(executeBundle)
          .then((_module) => {
            module = _module;
          })
          .then(done);
      });

      it('finds the imported module', () => {
        expect(module.exports).to.equal('imported!');
      });
    });
  });
});
