import align from 'layr.css/src/utilities/layr.align.css?raw';
import columns from 'layr.css/src/utilities/layr.text-columns.css?raw';
import asst from 'layr.css/src/utilities/layr.type-assrt.css?raw';

const snippet = `
/*
  Typographic Utilities

  Text Columns.........Responsive Text Columns
  Align................Breakpoint Specific Text Align.
  Type Assorted........Font Weights, Letter Spacing, Rendering, Text Transform
*/

${align}
${columns}
${asst}
`;

const Typography = () => (
  <>
    <div className="u-py3">
      <h6 className="small u-caps u-left">Aligned Left</h6>
      <h6 className="small u-caps u-center">Aligned Center</h6>
      <h6 className="small u-caps u-right">Aligned Right</h6>
    </div>
    <div className="u-py3">
      <span className="u-caps">Uppercase</span>
      <span className="u-lower">Lowercase</span>
    </div>
    <div className="u-py3">
      <h6 className="u-w700 u-lt-5">
        <span className="u-caps">Font Weight 700 and Letter Spaced by</span>{' '}
        <code className="u-w400 u-lt-1">5px</code>
      </h6>
    </div>
    <div className="u-py3 u-tclm-3">
      <header className="u-mb4">
        <h6>Reponsive Text Columns</h6>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat,
        laudantium est temporibus inventore cum, vero repudiandae et veniam quia
        debitis amet architecto quam necessitatibus mollitia laboriosam natus sint,
        sunt.
      </p>
      <p>
        Culpa tempore, ipsum minus harum non saepe reiciendis pariatur delectus? Ut
        cum, voluptatem voluptatibus soluta commodi odio id, libero quia minus
        facilis distinctio, obcaecati aliquam debitis sed optio rem quae.
      </p>
      <p>
        Quas pariatur cupiditate magni natus ab saepe velit deleniti earum quidem
        vero commodi quis, libero nostrum quisquam officiis eos nam sunt voluptatem
        consequatur inventore, perspiciatis recusandae eligendi maiores tenetur.
        Totam.
      </p>
      <p>
        Impedit molestias soluta incidunt modi possimus suscipit non, consectetur
        expedita quaerat recusandae dolores vero labore culpa numquam excepturi est
        voluptatum maiores fugiat nostrum! Placeat doloremque harum molestias,
        quaerat, delectus deserunt.
      </p>
    </div>
  </>
);

export { snippet, Typography };
