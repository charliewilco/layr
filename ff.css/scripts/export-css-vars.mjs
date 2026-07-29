import { readFile, writeFile } from "node:fs/promises";
import postcss from "postcss";

const [, , input = "index.css", output = "families.json"] = process.argv;

function toCamelCase(name) {
  const strippedName = name.replace(/^--/, "");
  const lowerCamelName = strippedName
    .replace(/^[A-Z]+(?=[A-Z][a-z]|$)/, function lowercaseAcronym(match) {
      return match.toLowerCase();
    })
    .replace(/^[A-Z]/, function lowercaseInitial(match) {
      return match.toLowerCase();
    });

  return lowerCamelName.replace(
    /-([a-z0-9])/g,
    function replaceSegment(_match, segment) {
      return segment.toUpperCase();
    },
  );
}

const css = await readFile(input, "utf8");
const root = postcss.parse(css, { from: input });
const variables = {};

root.walkDecls(function collectVariable(declaration) {
  if (!declaration.prop.startsWith("--")) {
    return;
  }

  variables[toCamelCase(declaration.prop)] = declaration.value.trim();
});

await writeFile(output, `${JSON.stringify(variables)}\n`);
