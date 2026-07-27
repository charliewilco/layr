import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const distDirectory = fileURLToPath(new URL("../dist", import.meta.url));
const expectedBasePath = `/${process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "layr"}`;
const attributePattern = /\b(?:href|src)="(\/[^"#?]*)/g;
const shouldCheckPagesPaths =
  process.env.GITHUB_ACTIONS === "true" || process.env.CHECK_GITHUB_PAGES_PATHS === "true";
const failures = [];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const allowedRootPathPattern = new RegExp(
  `^${escapeRegExp(expectedBasePath)}(?:/|$)`,
);

if (!shouldCheckPagesPaths) {
  console.log("Skipping GitHub Pages path check outside of GitHub Actions.");
  process.exit(0);
}

async function readHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await readHtmlFiles(path)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

try {
  const htmlFiles = await readHtmlFiles(distDirectory);

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const matches = html.matchAll(attributePattern);

    for (const match of matches) {
      const path = match[1];

      if (!allowedRootPathPattern.test(path)) {
        failures.push(`${relative(distDirectory, file)}: ${path}`);
      }
    }
  }
} catch (error) {
  console.error("Unable to inspect documentation/dist. Run the documentation build first.");
  throw error;
}

if (failures.length > 0) {
  console.error("Found root-relative documentation paths that break GitHub Pages:");
  console.error(failures.map(function formatFailure(failure) {
    return `  ${failure}`;
  }).join("\n"));
  process.exitCode = 1;
}
