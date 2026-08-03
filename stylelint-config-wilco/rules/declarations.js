const declarations = {
  "@stylistic/declaration-bang-space-after": "never",
  "@stylistic/declaration-bang-space-before": "always",
  "@stylistic/declaration-block-semicolon-newline-after": "always-multi-line",
  "@stylistic/declaration-block-semicolon-space-after": "always-single-line",
  "@stylistic/declaration-block-semicolon-space-before": "never",
  "@stylistic/declaration-block-trailing-semicolon": "always",
  "@stylistic/declaration-colon-newline-after": "always-multi-line",
  "@stylistic/declaration-colon-space-after": "always-single-line",
  "@stylistic/declaration-colon-space-before": "never",
  "declaration-block-no-duplicate-properties": true,
  "declaration-block-no-redundant-longhand-properties": true,
  "declaration-block-no-shorthand-property-overrides": true,
  "declaration-block-single-line-max-declarations": 1,
  "declaration-empty-line-before": [
    "always",
    {
      except: ["after-declaration", "first-nested"],
      ignore: ["after-comment", "inside-single-line-block"],
    },
  ],
};

export default declarations;
