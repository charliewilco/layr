import type { ComponentType } from "preact";
import renderToString from "preact-render-to-string";

import { HighlightedCode } from "./highlighted-code";

interface ISnippet {
  component: ComponentType<any>;
  snippet: string;
}

function formatHtml(html: string) {
  let indentation = 0;

  return html
    .replace(/></g, ">\n<")
    .split("\n")
    .map(function indentLine(line) {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("</")) {
        indentation = Math.max(indentation - 1, 0);
      }

      const formattedLine = `${"  ".repeat(indentation)}${trimmedLine}`;
      const openingTag = trimmedLine.match(/^<([a-z][\w:-]*)\b[^>]*>/i)?.[1];
      const isSelfClosing = trimmedLine.endsWith("/>");
      const closesOnSameLine =
        openingTag !== undefined &&
        new RegExp(`</${openingTag}>$`, "i").test(trimmedLine);

      if (openingTag && !isSelfClosing && !closesOnSameLine) {
        indentation += 1;
      }

      return formattedLine;
    })
    .join("\n");
}

export function Snippet({ component: Component, snippet }: ISnippet) {
  const html = formatHtml(renderToString(<Component />));

  return (
    <div className="Snippet u-mt4">
      <div className="Snippet__preview u-mb3">
        <Component />
      </div>
      <details className="Snippet__details">
        <summary className="Snippet__summary">
          <span>View source</span>
          <span className="Snippet__summaryMeta">HTML + CSS</span>
        </summary>
        <div
          className="Snippet__sources"
          role="group"
          aria-label="Example source code">
          <section className="Snippet__source">
            <h4 className="Snippet__heading">HTML</h4>
            <HighlightedCode code={html} language="html" />
          </section>
          <section className="Snippet__source">
            <h4 className="Snippet__heading">CSS</h4>
            <HighlightedCode code={snippet} language="css" />
          </section>
        </div>
      </details>
    </div>
  );
}
