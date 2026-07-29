export type ScaleBase = number | `${number}`;

function spacing(x: ScaleBase = 1, unit = "rem") {
  const base = Number(x);

  return {
    one: `${base / 4}${unit}`,
    two: `${base / 2}${unit}`,
    three: `${base}${unit}`,
    four: `${base * 2}${unit}`,
    five: `${base * 2.4}${unit}`,
    six: `${base * 4}${unit}`,
  };
}

export default spacing;
