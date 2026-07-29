import { HighlightedCode } from "./highlighted-code";

export function CodeBlock({ snippet }: { snippet: string }) {
  return (
    <div className="Snippet__sources Snippet__sources--single u-mt4">
      <section className="Snippet__source">
        <h4 className="Snippet__heading">CSS</h4>
        <HighlightedCode code={snippet} language="css" />
      </section>
    </div>
  );
}
