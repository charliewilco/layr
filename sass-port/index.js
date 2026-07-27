const path = require('path');
const layrPath = require.resolve('./lib/_layr.scss');

const layrDir = path.dirname(layrPath);

function includePaths() {
  return [layrDir];
}

module.exports = {
  includePaths: includePaths(),

  with() {
    const paths = Array.prototype.slice.call(arguments);
    const result = [].concat.apply(includePaths(), paths);
    return result;
  }
};
