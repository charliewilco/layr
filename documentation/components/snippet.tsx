import type { ComponentType } from "preact";
import renderToString from "preact-render-to-string";

interface ISnippet {
  component: ComponentType<any>;
  snippet: string;
}

const formatHtml = (html: string) =>
  html
    .replace(/></g, ">\n<")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const Snippet = ({ component: Component, snippet }: ISnippet) => (
  <div className="Snippet u-mt4">
    <div className="Snippet__preview u-mb3">
      <Component />
    </div>
    <details className="u-mb2">
      <summary className="NavButton u-w700 u-py2">HTML</summary>
      <pre className="Snippet__code">
        <code
          className="language-html"
          dangerouslySetInnerHTML={{
            __html: formatHtml(renderToString(<Component />)),
          }}
        />
      </pre>
    </details>
    <details>
      <summary className="NavButton u-w700 u-py2">CSS</summary>
      <pre className="Snippet__code">
        <code className="language-css">{snippet}</code>
      </pre>
    </details>
  </div>
);
