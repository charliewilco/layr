export function Stats({ data }: { data: Record<string, string | number> }) {
  return (
    <ul className="o-Flex o-Flex--j--sb o-UIList u-center u-system">
      <li className="Pane  o-Column--4/12 u-p3 u-mr3">
        <span className="h2 u-bl">7.3kb</span>
        <small>Gzip Size</small>
      </li>
      <li className="Pane  o-Column--4/12 u-p3 u-mr3">
        <span className="h2 u-bl">{data["total-selectors"]}</span>
        <small>Selectors</small>
      </li>
      <li className="Pane o-Column--4/12 u-p3">
        <span className="h2 u-bl">{data["total-rules"]}</span>
        <small>Rules</small>
      </li>
    </ul>
  );
}
