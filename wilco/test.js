import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

import test from "node:test";

import { lintFiles, wilco } from "./index.js";

const execFileAsync = promisify(execFile);

test("prints a helpful message when no files are provided", async () => {
  const result = await wilco([]);

  assert.equal(result.errored, true);
  assert.match(result.output, /Please specify some files/);
});

test("prints the current package version", async () => {
  const result = await wilco(["--version"]);

  assert.equal(result.errored, false);
  assert.equal(result.output, "0.2.0");
});

test("passes valid css fixtures", async () => {
  const result = await lintFiles(["css/test.css"]);

  assert.equal(result.errored, false);
  assert.match(result.output, /doesn't contain any linting violations/);
});

test("runs through the command line", async () => {
  const { stdout } = await execFileAsync(process.execPath, ["index.js", "--help"], {
    cwd: import.meta.dirname,
  });

  assert.match(stdout, /Usage/);
});
