import obsidianSnapshot from "./obsidian.json" with { type: "json" };

import color from "./lib/color.js";
import families from "./lib/families.js";
import spacing from "./lib/spacing.js";
import typescale from "./lib/typescale.js";

export type ObsidianTokens = Readonly<Record<string, string>>;

const obsidian: ObsidianTokens = obsidianSnapshot;

const kndlng = {
  obsidian,
  families,
  spacing,
  color,
  typescale,
};

export {
  typescale as Typescale,
  families as Families,
  obsidian as Obsidian,
  color as Color,
  spacing as Spacing,
};

export default kndlng;
