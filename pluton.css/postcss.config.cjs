const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

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
            autoprefixer({
              remove: true,
            }),
          ],
  };
};
