import { createHighlighter } from "shiki";

export type CodeLanguage = "css" | "html";

const highlighter = await createHighlighter({
  langs: ["css", "html"],
  themes: ["github-light"],
});

export function highlightCode(code: string, language: CodeLanguage) {
  return highlighter.codeToHtml(code.trim(), {
    lang: language,
    theme: "github-light",
  });
}
