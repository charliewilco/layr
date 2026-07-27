import { mkdirSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import type { PluginCreator } from "postcss";
import { analyze } from "modern-parker";

interface ParkerPluginOptions {
  outputFile?: string;
}

const defaultOptions: Required<ParkerPluginOptions> = {
  outputFile: "./parker.json",
};

function writeReport(outputFile: string, css: string) {
  const report = analyze(css);
  const destination = resolve(outputFile);

  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, `${JSON.stringify(report, null, 2)}\n`);
}

const parker: PluginCreator<ParkerPluginOptions> = function parker(options = {}) {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  return {
    postcssPlugin: "postcss-parker",
    OnceExit(root) {
      writeReport(opts.outputFile, root.toString());
    },
  };
};

parker.postcss = true;

export = parker;
