export const CodeBlock = ({ snippet }: { snippet: string }) => (
  <pre className="Snippet__code">
    <code className="language-css">{snippet}</code>
  </pre>
);
