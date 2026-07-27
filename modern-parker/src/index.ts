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
const FUNCTION_COLOR_PATTERN = /\b(?:rgb|rgba|hsl|hsla)\(\s*[^)]+\)/gi;

function mean(values: number[]) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce(sumNumbers, 0) / values.length;
}

function sumNumbers(sum: number, value: number) {
  return sum + value;
}

function unique<T>(values: T[]) {
  return [...new Set(values)];
}

function splitList(value: string) {
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

    if (
      char === "," &&
      previous !== "\\" &&
      bracketDepth === 0 &&
      parenDepth === 0
    ) {
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
}

function getIdentifiers(selector: string) {
  return selector.match(IDENTIFIER_PATTERN)?.filter(Boolean) ?? [];
}

function getSpecificity(identifiers: string[]) {
  let specificity = 0;

  for (const identifier of identifiers) {
    if (identifier.includes(":not")) {
      continue;
    }

    if (identifier.startsWith("#")) {
      specificity += 100;
      continue;
    }

    if (
      identifier.startsWith(".") ||
      identifier.startsWith("[") ||
      (identifier.startsWith(":") && !identifier.startsWith("::"))
    ) {
      specificity += 10;
      continue;
    }

    if (identifier.startsWith("::")) {
      specificity += 1;
      continue;
    }

    if (/^[a-zA-Z_]/.test(identifier)) {
      specificity += 1;
    }
  }

  return specificity;
}

function readSelector(selector: string): SelectorReading {
  const identifiers = getIdentifiers(selector);

  return {
    selector,
    identifiers,
    specificity: getSpecificity(identifiers),
  };
}

function expandShortHex(hex: string) {
  if (hex.length !== 4) {
    return hex.toUpperCase();
  }

  const [, red, green, blue] = hex;
  return `#${red}${red}${green}${green}${blue}${blue}`.toUpperCase();
}

function normalizeColorFunction(color: string) {
  return color.replace(/\s+/g, " ").trim().toLowerCase();
}

function collectColours(declarations: Declaration[]) {
  const colours: string[] = [];

  for (const declaration of declarations) {
    const hexMatches = declaration.value.match(HEX_COLOR_PATTERN) ?? [];
    const functionMatches = declaration.value.match(FUNCTION_COLOR_PATTERN) ?? [];

    for (const hex of hexMatches) {
      colours.push(expandShortHex(hex));
    }

    for (const colorFunction of functionMatches) {
      colours.push(normalizeColorFunction(colorFunction));
    }
  }

  return colours;
}

function collectRules(css: string) {
  const root = postcss.parse(css, { from: undefined });
  const rules: Rule[] = [];
  const declarations: Declaration[] = [];
  const mediaQueries: string[] = [];

  root.walkRules(function collectRule(rule) {
    rules.push(rule);
  });

  root.walkDecls(function collectDeclaration(declaration) {
    declarations.push(declaration);
  });

  root.walkAtRules("media", function collectMediaRule(mediaRule) {
    mediaQueries.push(...splitList(mediaRule.params));
  });

  return {
    rules,
    declarations,
    mediaQueries,
  };
}

function getIdentifierCount(reading: SelectorReading) {
  return reading.identifiers.length;
}

function getSelectorSpecificity(reading: SelectorReading) {
  return reading.specificity;
}

function getSelectorListLength(selectors: string[]) {
  return selectors.length;
}

function countIdSelectors(readings: SelectorReading[]) {
  let count = 0;

  for (const reading of readings) {
    for (const identifier of reading.identifiers) {
      if (identifier.startsWith("#")) {
        count += 1;
      }
    }
  }

  return count;
}

function countImportantKeywords(declarations: Declaration[]) {
  let count = 0;

  for (const declaration of declarations) {
    if (declaration.important || /!important\b/i.test(declaration.value)) {
      count += 1;
    }
  }

  return count;
}

function findTopSelector(readings: SelectorReading[]) {
  let topSelector: SelectorReading | undefined;

  for (const reading of readings) {
    if (!topSelector || reading.specificity > topSelector.specificity) {
      topSelector = reading;
    }
  }

  return topSelector;
}

export function analyze(css: string): ModernParkerReport {
  const { rules, declarations, mediaQueries } = collectRules(css);
  const selectorLists = rules.map(function readSelectorList(rule) {
    return splitList(rule.selector);
  });
  const selectors = selectorLists.flat();
  const selectorReadings = selectors.map(readSelector);
  const identifierCounts = selectorReadings.map(getIdentifierCount);
  const specificities = selectorReadings.map(getSelectorSpecificity);
  const topSelector = findTopSelector(selectorReadings);
  const colours = unique(collectColours(declarations));
  const uniqueMediaQueries = unique(mediaQueries);

  return {
    "total-stylesheets": 1,
    "total-stylesheet-size": Buffer.byteLength(css),
    "total-rules": rules.length,
    "selectors-per-rule": mean(selectorLists.map(getSelectorListLength)),
    "total-selectors": selectors.length,
    "identifiers-per-selector": mean(identifierCounts),
    "specificity-per-selector": mean(specificities),
    "top-selector-specificity": topSelector?.specificity ?? 0,
    "top-selector-specificity-selector": topSelector?.selector ?? "",
    "total-id-selectors": countIdSelectors(selectorReadings),
    "total-identifiers": identifierCounts.reduce(sumNumbers, 0),
    "total-declarations": declarations.length,
    "total-unique-colours": colours.length,
    "unique-colours": colours,
    "total-important-keywords": countImportantKeywords(declarations),
    "total-media-queries": uniqueMediaQueries.length,
    "media-queries": uniqueMediaQueries,
  };
}

export default analyze;
