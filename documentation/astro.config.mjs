import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "layr";

export default defineConfig({
  site: "https://charliewilco.github.io",
  base: isGitHubActions ? `/${repositoryName}` : "/",
  integrations: [mdx(), preact()],
  output: "static",
});
