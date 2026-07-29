import type { CodeLanguage } from "./syntax-highlight";
import { highlightCode } from "./syntax-highlight";

interface HighlightedCodeProps {
  code: string;
  language: CodeLanguage;
}

export function HighlightedCode({ code, language }: HighlightedCodeProps) {
  return (
    <div
      className="Snippet__code"
      dangerouslySetInnerHTML={{
        __html: highlightCode(code, language),
      }}
    />
  );
}
