import display from 'layr.css/src/utilities/layr.display.css?raw';
import floats from 'layr.css/src/utilities/layr.floats.css?raw';
import width from 'layr.css/src/utilities/layr.width.css?raw';

const snippet = `
/*
  Layout Utilities

  Display..........Breakpoint Specific Display Properties.
  Floats...........Clearfix, Breakpoint Floats.
  Width............max-width, width
*/

${display}

${floats}

${width}
`;

const LayoutHelpers = () => (
  <div className="u-cf">
    <div className="o-col--5/12 u-fl">
      <h6 className="small u-caps">Floated Left</h6>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </small>
    </div>
    <div className="o-col--5/12 u-fr">
      <h6 className="small u-caps">Floated Right</h6>
      <small>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </small>
    </div>
  </div>
);

export { LayoutHelpers, snippet };
