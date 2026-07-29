import type { ScaleBase } from "./spacing.js";

function typescale(x: ScaleBase = 1, unit = "rem") {
  const base = Number(x);

  return {
    f1: `${base * 3.125}${unit}`,
    f2: `${base * 2.5}${unit}`,
    f3: `${base * 2.125}${unit}`,
    f4: `${base * 1.75}${unit}`,
    f5: `${base * 1.5}${unit}`,
    f6: `${base * 1.25}${unit}`,
  };
}

export default typescale;
