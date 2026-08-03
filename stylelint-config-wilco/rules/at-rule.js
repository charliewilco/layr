const atRule = {
  "@stylistic/at-rule-name-case": "lower",
  "@stylistic/at-rule-name-space-after": "always-single-line",
  "@stylistic/at-rule-semicolon-newline-after": "always",
  "at-rule-empty-line-before": [
    "always",
    {
      except: ["blockless-after-same-name-blockless", "first-nested"],
      ignore: ["after-comment"],
    },
  ],
};

export default atRule;
