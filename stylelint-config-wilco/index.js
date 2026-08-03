import atRule from "./rules/at-rule.js";
import blocks from "./rules/blocks.js";
import colors from "./rules/colors.js";
import comments from "./rules/comments.js";
import customProps from "./rules/custom-props.js";
import declarations from "./rules/declarations.js";
import feature from "./rules/feature.js";
import functions from "./rules/functions.js";
import nest from "./rules/nest.js";
import property from "./rules/property.js";
import selectors from "./rules/selectors.js";
import units from "./rules/units.js";
import values from "./rules/value-list.js";

const misc = {
  "@stylistic/indentation": 2,
  "@stylistic/max-empty-lines": 2,
  "@stylistic/media-query-list-comma-space-before": "never",
  "@stylistic/no-eol-whitespace": true,
  "@stylistic/no-extra-semicolons": true,
  "@stylistic/no-missing-end-of-source-newline": true,
  "@stylistic/number-leading-zero": "never",
  "@stylistic/number-no-trailing-zeros": true,
  "keyframe-declaration-no-important": true,
  "length-zero-no-unit": true,
  "no-empty-source": true,
  "no-invalid-double-slash-comments": true,
  "shorthand-property-no-redundant-values": true,
  "string-no-newline": true,
};

const wilco = {
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    ...atRule,
    ...blocks,
    ...colors,
    ...comments,
    ...customProps,
    ...declarations,
    ...feature,
    ...functions,
    ...nest,
    ...property,
    ...selectors,
    ...units,
    ...values,
    ...misc,
  },
};

export default wilco;
