const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssImport = require("postcss-import");
const postcssParker = require("postcss-parker");

module.exports = function postcssConfig(ctx) {
  return {
    map: false,
    plugins:
      ctx.env === "production"
        ? [
            cssnano({
              preset: [
                "default",
                {
                  discardComments: {
                    removeAllButFirst: true,
                  },
                },
              ],
            }),
          ]
        : [
            postcssImport({
              skipDuplicates: true,
            }),
            postcssCustomProperties({
              preserve: false,
            }),
            autoprefixer({
              remove: true,
            }),
            postcssParker({
              outputFile: "parker.json",
            }),
          ],
  };
};
