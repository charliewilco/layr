const autoprefixer = require("autoprefixer");
const postcssCustomProperties = require("postcss-custom-properties");

module.exports = {
  map: false,
  plugins: [
    postcssCustomProperties({
      preserve: true,
    }),
    autoprefixer({
      remove: true,
    }),
  ],
};
