#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import stylelint from "stylelint";
import config from "stylelint-config-wilco";

const modulePath = fileURLToPath(import.meta.url);
const packagePath = join(dirname(modulePath), "package.json");
const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));

const usage = `Usage
  $ wilco <input>

Options
  --help, -h     Print this help text
  --version, -v  Print out the version number

Examples
  $ wilco ./styles/**/*.css`;

function parseArgs(args) {
  const flags = new Set(args.filter((arg) => arg.startsWith("-")));
  const files = args.filter((arg) => !arg.startsWith("-"));

  return {
    files,
    help: flags.has("--help") || flags.has("-h"),
    version: flags.has("--version") || flags.has("-v"),
  };
}

function formatWarnings(results) {
  const messages = [];

  for (const result of results) {
    if (result.warnings.length === 0) {
      continue;
    }

    messages.push(result.source);
    messages.push("Ln:Cl  Rule");

    for (const warning of result.warnings) {
      messages.push(`${warning.line}:${warning.column}  ${warning.text}`);
    }
  }

  return messages.join("\n");
}

export async function lintFiles(files) {
  if (files.length === 0) {
    return {
      errored: true,
      output: "Please specify some files",
    };
  }

  const result = await stylelint.lint({
    config,
    files,
  });

  return {
    errored: result.errored,
    output: result.errored
      ? formatWarnings(result.results)
      : "Your code doesn't contain any linting violations!",
  };
}

export async function wilco(args = process.argv.slice(2)) {
  const parsed = parseArgs(args);

  if (parsed.version) {
    return {
      errored: false,
      output: packageJson.version,
    };
  }

  if (parsed.help) {
    return {
      errored: false,
      output: usage,
    };
  }

  return lintFiles(parsed.files);
}

if (process.argv[1] === modulePath) {
  wilco()
    .then((result) => {
      process.stdout.write(`${result.output}\n`);
      process.exitCode = result.errored ? 1 : 0;
    })
    .catch((error) => {
      process.stderr.write(`${error.message}\n`);
      process.exitCode = 1;
    });
}

export default wilco;
