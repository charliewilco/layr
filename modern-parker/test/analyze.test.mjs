import assert from "node:assert/strict";
import test from "node:test";
import { analyze } from "../dist/index.js";

test("reports Parker-compatible stylesheet metrics", function reportsMetrics() {
  const report = analyze(`
    .a, .b:hover { color: #fff; }
    #hero { color: #000000 !important; }
    @media (min-width: 40rem), print {
      .card[data-state="open"]::before { color: #abc; }
    }
  `);

  assert.equal(report["total-stylesheets"], 1);
  assert.equal(report["total-rules"], 3);
  assert.equal(report["total-selectors"], 4);
  assert.equal(report["total-declarations"], 3);
  assert.equal(report["total-id-selectors"], 1);
  assert.equal(report["total-important-keywords"], 1);
  assert.deepEqual(report["unique-colours"], ["#FFFFFF", "#000000", "#AABBCC"]);
  assert.deepEqual(report["media-queries"], ["(min-width: 40rem)", "print"]);
});

test("reports zeroes for empty stylesheets", function reportsEmptyStylesheet() {
  const report = analyze("");

  assert.equal(report["total-stylesheets"], 1);
  assert.equal(report["total-stylesheet-size"], 0);
  assert.equal(report["total-rules"], 0);
  assert.equal(report["selectors-per-rule"], 0);
  assert.equal(report["total-selectors"], 0);
  assert.equal(report["identifiers-per-selector"], 0);
  assert.equal(report["specificity-per-selector"], 0);
  assert.equal(report["top-selector-specificity"], 0);
  assert.equal(report["top-selector-specificity-selector"], "");
});

test("splits selector and media lists without splitting nested commas", function reportsNestedLists() {
  const report = analyze(`
    .card:is(.featured, [data-state="active"]), .nav\\,item {
      color: rgb(20, 122, 171);
    }

    @media (min-width: 40rem), (color-gamut: p3) {
      #page #hero .title::before {
        color: hsl(200 50% 40%);
      }
    }
  `);

  assert.equal(report["total-rules"], 2);
  assert.equal(report["total-selectors"], 3);
  assert.equal(report["total-id-selectors"], 2);
  assert.equal(report["top-selector-specificity-selector"], "#page #hero .title::before");
  assert.equal(report["top-selector-specificity"], 211);
  assert.deepEqual(report["unique-colours"], [
    "rgb(20, 122, 171)",
    "hsl(200 50% 40%)",
  ]);
  assert.deepEqual(report["media-queries"], ["(min-width: 40rem)", "(color-gamut: p3)"]);
});
