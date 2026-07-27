import assert from "node:assert/strict";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import postcss from "postcss";
import parker from "../dist/index.js";

test("writes a Modern Parker report from a PostCSS root", async function writesReport() {
  const directory = await mkdtemp(join(tmpdir(), "postcss-parker-"));
  const outputFile = join(directory, "parker.json");
  const css = ".button, .link:hover { color: #147AAB; }";

  await postcss([parker({ outputFile })]).process(css, { from: undefined });

  const report = JSON.parse(await readFile(outputFile, "utf8"));

  assert.equal(report["total-stylesheets"], 1);
  assert.equal(report["total-rules"], 1);
  assert.equal(report["total-selectors"], 2);
  assert.equal(report["total-declarations"], 1);
  assert.deepEqual(report["unique-colours"], ["#147AAB"]);
});
