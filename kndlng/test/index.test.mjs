import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import kndlng, {
  Color,
  Families,
  Obsidian,
  Spacing,
  Typescale,
} from "../dist/index.js";

test("preserves the historical named and default exports", function preservesExports() {
  assert.equal(kndlng.obsidian, Obsidian);
  assert.equal(kndlng.families, Families);
  assert.equal(kndlng.spacing, Spacing);
  assert.equal(kndlng.color, Color);
  assert.equal(kndlng.typescale, Typescale);
});

test("preserves the Obsidian 2.1.3 token snapshot", function preservesTokens() {
  assert.equal(Obsidian.blue, "#147AAB");
  assert.equal(Obsidian.offwhite, "#FDFDFD");
  assert.equal(Obsidian.indigo, "#675997");
  assert.equal(Obsidian.color1, "#147AAB");
  assert.equal(Obsidian.headlines, Obsidian.default);
  assert.equal(Obsidian.baseSpacing, "1rem");
  assert.equal(Object.keys(Obsidian).length, 163);
  assert.equal(
    createHash("sha256").update(JSON.stringify(Obsidian)).digest("hex"),
    "f39935c3387aa75ed67d97590932224851ac44a64c712b536bd8ff72bbf68b2f",
  );
});

test("preserves historical values and corrects the invalid fallback", function preservesValues() {
  assert.equal(Color.indigo.medium, "#675997");
  assert.equal(
    Families.charter,
    "'Charter', 'Bitstream Charter', 'Georgia', 'Times', serif",
  );
  assert.match(Families.avenir, /sans-serif$/);
});

test("creates spacing and type scales from numbers or numeric strings", function createsScales() {
  assert.deepEqual(Spacing(), {
    one: "0.25rem",
    two: "0.5rem",
    three: "1rem",
    four: "2rem",
    five: "2.4rem",
    six: "4rem",
  });
  assert.equal(Spacing("2", "px").three, "2px");
  assert.equal(Typescale().f4, "1.75rem");
  assert.equal(Typescale(2, "em").f1, "6.25em");
});
