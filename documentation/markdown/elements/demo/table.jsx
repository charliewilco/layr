import snippet from 'layr.css/src/elements/layr.tables.css?raw';

const TableDefault = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gizmo</td>
        <td>Robot</td>
        <td>A+</td>
      </tr>
      <tr>
        <td>Sherlock Holmes</td>
        <td>Human</td>
        <td>B-</td>
      </tr>
      <tr>
        <td>Merlin</td>
        <td>Wizard</td>
        <td>C</td>
      </tr>
      <tr>
        <td>Richard Nixon</td>
        <td>Cyborg</td>
        <td>B-</td>
      </tr>
    </tbody>
  </table>
);

export { TableDefault, snippet };
