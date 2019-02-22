const stat = require('fs').stat;
const path = require('path');

const resolve = () => ({
  name: '@haensl/rollup-plugin-local-resolve',
  resolveId: (importee, importer) => {
    if (path.isAbsolute(importee)
      || path.basename(importee) === importee) {
      return Promise.resolve(null);
    }

    if (!importer) {
      return Promise.resolve(null);
    }

    const importerDir = path.dirname(importer);
    const pathsToTry = [ '.js', '.jsx' ]
      .map((ext) => path.join(importerDir, importee, `index${ext}`));
    return Promise.all(
      pathsToTry.map((p) =>
        new Promise((resolve) => {
          stat(p, (err, stats) => {
            if (err || !stats.isFile()) {
              resolve(null);
            }

            resolve(p);
          });
        })
      )
    )
    .then((paths) => paths.filter((p) => p !== null))
    .then((paths) => {
      if (paths.length > 1) {
        throw new Error('Found multiple matching paths!', paths);
      }

      return paths[0];
    });
  }
});

module.exports = resolve;
