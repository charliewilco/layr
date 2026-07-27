const autoprefixer = require("autoprefixer");
const cssMqpacker = require("css-mqpacker");
const cssnano = require("cssnano");
const postcssColorFunction = require("postcss-color-function");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssExportVars = require("postcss-export-vars");
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
            postcssExportVars({
              file: "css",
              type: "json",
              matches: [],
            }),
            postcssCustomProperties({
              preserve: false,
            }),
            postcssColorFunction(),
            autoprefixer({
              remove: true,
            }),
            cssMqpacker({
              sort: true,
            }),
            postcssParker({
              outputFile: "parker.json",
            }),
          ],
  };
};
