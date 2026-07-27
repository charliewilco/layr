import postcss from "postcss";
import type { Declaration, Rule } from "postcss";

export type ModernParkerValue = number | string | string[];

export interface ModernParkerReport {
  "total-stylesheets": number;
  "total-stylesheet-size": number;
  "total-rules": number;
  "selectors-per-rule": number;
  "total-selectors": number;
  "identifiers-per-selector": number;
  "specificity-per-selector": number;
  "top-selector-specificity": number;
  "top-selector-specificity-selector": string;
  "total-id-selectors": number;
  "total-identifiers": number;
  "total-declarations": number;
  "total-unique-colours": number;
  "unique-colours": string[];
  "total-important-keywords": number;
  "total-media-queries": number;
  "media-queries": string[];
  [metric: string]: ModernParkerValue;
}

interface SelectorReading {
  selector: string;
  identifiers: string[];
  specificity: number;
}

const IDENTIFIER_PATTERN = /[#.:]?[\w\-*]+|\[[\w=\-~'"|]+\]|:{2}[\w-]+/g;
const HEX_COLOR_PATTERN = /#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/g;

const mean = (values: number[]) => {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

const unique = <T>(values: T[]) => [...new Set(values)];

const splitList = (value: string) => {
  const items: string[] = [];
  let current = "";
  let bracketDepth = 0;
  let parenDepth = 0;
  let quote: string | undefined;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const previous = value[index - 1];

    if (quote) {
      current += char;
      if (char === quote && previous !== "\\") {
        quote = undefined;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }

    if (char === "[") {
      bracketDepth += 1;
    } else if (char === "]") {
      bracketDepth = Math.max(0, bracketDepth - 1);
    } else if (char === "(") {
      parenDepth += 1;
    } else if (char === ")") {
      parenDepth = Math.max(0, parenDepth - 1);
    }

    if (char === "," && bracketDepth === 0 && parenDepth === 0) {
      items.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  const finalItem = current.trim();
  if (finalItem.length > 0) {
    items.push(finalItem);
  }

  return items;
};

const getIdentifiers = (selector: string) =>
  selector.match(IDENTIFIER_PATTERN)?.filter(Boolean) ?? [];

const getSpecificity = (identifiers: string[]) =>
  identifiers.reduce((specificity, identifier) => {
    if (identifier.includes(":not")) {
      return specificity;
    }

    if (identifier.startsWith("#")) {
      return specificity + 100;
    }

    if (
      identifier.startsWith(".") ||
      identifier.startsWith("[") ||
      (identifier.startsWith(":") && !identifier.startsWith("::"))
    ) {
      return specificity + 10;
    }

    if (identifier.startsWith("::")) {
      return specificity + 1;
    }

    if (/^[a-zA-Z_]/.test(identifier)) {
      return specificity + 1;
    }

    return specificity;
  }, 0);

const readSelector = (selector: string): SelectorReading => {
  const identifiers = getIdentifiers(selector);

  return {
    selector,
    identifiers,
    specificity: getSpecificity(identifiers),
  };
};

const expandShortHex = (hex: string) => {
  if (hex.length !== 4) {
    return hex.toUpperCase();
  }

  const [, red, green, blue] = hex;
  return `#${red}${red}${green}${green}${blue}${blue}`.toUpperCase();
};

const collectColours = (declarations: Declaration[]) =>
  declarations.flatMap((declaration) =>
    (declaration.value.match(HEX_COLOR_PATTERN) ?? []).map(expandShortHex),
  );

const collectRules = (css: string) => {
  const root = postcss.parse(css, { from: undefined });
  const rules: Rule[] = [];
  const declarations: Declaration[] = [];
  const mediaQueries: string[] = [];

  root.walkRules((rule) => {
    rules.push(rule);
  });

  root.walkDecls((declaration) => {
    declarations.push(declaration);
  });

  root.walkAtRules("media", (mediaRule) => {
    mediaQueries.push(...splitList(mediaRule.params));
  });

  return {
    rules,
    declarations,
    mediaQueries,
  };
};

export const analyze = (css: string): ModernParkerReport => {
  const { rules, declarations, mediaQueries } = collectRules(css);
  const selectorLists = rules.map((rule) => splitList(rule.selector));
  const selectors = selectorLists.flat();
  const selectorReadings = selectors.map(readSelector);
  const identifierCounts = selectorReadings.map(
    (reading) => reading.identifiers.length,
  );
  const specificities = selectorReadings.map((reading) => reading.specificity);
  const topSelector = selectorReadings.reduce<SelectorReading | undefined>(
    (highest, reading) => {
      if (!highest || reading.specificity > highest.specificity) {
        return reading;
      }

      return highest;
    },
    undefined,
  );
  const colours = unique(collectColours(declarations));
  const uniqueMediaQueries = unique(mediaQueries);

  return {
    "total-stylesheets": 1,
    "total-stylesheet-size": Buffer.byteLength(css),
    "total-rules": rules.length,
    "selectors-per-rule": mean(selectorLists.map((selectors) => selectors.length)),
    "total-selectors": selectors.length,
    "identifiers-per-selector": mean(identifierCounts),
    "specificity-per-selector": mean(specificities),
    "top-selector-specificity": topSelector?.specificity ?? 0,
    "top-selector-specificity-selector": topSelector?.selector ?? "",
    "total-id-selectors": selectors.filter((selector) => selector.includes("#"))
      .length,
    "total-identifiers": identifierCounts.reduce((sum, count) => sum + count, 0),
    "total-declarations": declarations.length,
    "total-unique-colours": colours.length,
    "unique-colours": colours,
    "total-important-keywords": declarations.filter(
      (declaration) =>
        declaration.important || /!important\b/i.test(declaration.value),
    ).length,
    "total-media-queries": uniqueMediaQueries.length,
    "media-queries": uniqueMediaQueries,
  };
};

export default analyze;
