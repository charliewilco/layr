import assert from "node:assert/strict";
import test from "node:test";

import stylelint from "stylelint";

import wilco from "../index.js";

const validCss = `@import url("x.css");
@import url(y.css);

/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#FFF, rgba(0, 0, 0, .8));
  color: #333;
  display: block;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-width: 60em),
  screen and (min-width: 70em) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #FFF 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #FFF,
      2px 2px 1px 1px #CCC inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: "->";
    background-image: url(x.svg);
  }
}

`;

const invalidCss = `a {
  top: 0.2em;
}

`;

test("no warnings with valid css", async () => {
  const data = await stylelint.lint({
    code: validCss,
    config: wilco,
  });
  const { errored, results } = data;
  const { warnings } = results[0];

  assert.equal(errored, false);
  assert.equal(warnings.length, 0);
});

test("a warning with invalid css", async () => {
  const data = await stylelint.lint({
    code: invalidCss,
    config: wilco,
  });
  const { errored, results } = data;
  const { warnings } = results[0];

  assert.equal(errored, true);
  assert.equal(warnings.length, 1);
  assert.equal(warnings[0].rule, "@stylistic/number-leading-zero");
});
