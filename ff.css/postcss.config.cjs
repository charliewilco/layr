const postcssCustomProperties = require("postcss-custom-properties");

const removeCustomPropertyDeclarations = {
  postcssPlugin: "remove-custom-property-declarations",
  OnceExit(root) {
    root.walkRules(":root", function removeVariables(rule) {
      rule.walkDecls(/^--/, function removeVariable(declaration) {
        declaration.remove();
      });

      if (!rule.nodes?.length) {
        rule.remove();
      }
    });
  },
};

module.exports = {
  map: false,
  plugins: [
    postcssCustomProperties({
      preserve: false,
    }),
    removeCustomPropertyDeclarations,
  ],
};
