export function CodeBlock({ snippet }: { snippet: string }) {
  return (
    <pre className="Snippet__code">
      <code className="language-css">{snippet}</code>
    </pre>
  );
}
