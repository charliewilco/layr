import position from 'layr.css/src/utilities/layr.position.css?raw';
import overflow from 'layr.css/src/utilities/layr.overflow.css?raw';
import zindex from 'layr.css/src/utilities/layr.zindex.css?raw';

const snippet = `
/*
  Positioning Utilities

  Z-Index..........Small collection of common z-index values
  Overflow.........General, X and Y
  Position.........Absolute, Static, Fixed, Relative
*/

${zindex}

${overflow}

${position}
`;

export { snippet };
