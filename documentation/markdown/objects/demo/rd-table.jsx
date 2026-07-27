import snippet from 'layr.css/src/objects/layr.rd-table.css?raw';

const THeading = ({ children }) => (
  <th className="o-RDTable__heading u-w700 u-left u-p2">{children}</th>
);

const TData = ({ children, data }) => (
  <td className="o-RDTable__content u-p2" data-heading={data}>
    {children}
  </td>
);

const TRow = ({ children }) => <tr className="o-RDTable__row">{children}</tr>;

const RDTable = () => (
  <table className="o-RDTable u-w400">
    <thead className="small">
      <tr>
        <THeading>Name</THeading>
        <THeading>Type</THeading>
        <THeading>Grade</THeading>
      </tr>
    </thead>
    <tbody>
      <TRow>
        <TData data="Name">Gizmo</TData>
        <TData data="Type">Robot</TData>
        <TData data="Grade">A+</TData>
      </TRow>
      <TRow>
        <TData data="Name">Sherlock Holmes</TData>
        <TData data="Type">Human</TData>
        <TData data="Grade">B-</TData>
      </TRow>
      <TRow>
        <TData data="Name">Merlin</TData>
        <TData data="Type">Wizard</TData>
        <TData data="Grade">C</TData>
      </TRow>
      <TRow>
        <TData data="Name">Richard Nixon</TData>
        <TData data="Type">Cyborg</TData>
        <TData data="Grade">B-</TData>
      </TRow>
    </tbody>
  </table>
);

export { RDTable, snippet };
