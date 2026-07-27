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
