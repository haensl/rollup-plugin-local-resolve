# rollup-plugin-local-resolve
[![NPM](https://nodei.co/npm/@haensl%2Frollup-plugin-local-resolve.png?downloads=true)](https://nodei.co/npm/@haensl%2Frollup-plugin-local-resolve/)

[![npm version](https://badge.fury.io/js/@haensl%2Frollup-plugin-local-resolve.svg)](http://badge.fury.io/js/@haensl%2Frollup-plugin-local-resolve)
[![Build Status](https://travis-ci.org/haensl/rollup-plugin-local-resolve.svg?branch=master)](https://travis-ci.org/haensl/rollup-plugin-local-resolve)

Rollup plugin to resolve relative imports from local folders without stating the index file. E.g. `import something from '../some-dir'.`

## Quick start

1. Install the plugin

```bash
npm i -D @haensl/rollup-plugin-local-resolve
```

2. Use it in your `rollup.config.js`

```javascript
import localResolve from '@haensl/rollup-plugin-local-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    localResolve()
  ],
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ]
}
```

## Credits

* Functionality inspired by Johannes Stein's [rollup-plugin-local-resolve](https://github.com/frostney/rollup-plugin-local-resolve)
* Unit tests inspired by rollup's own [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

