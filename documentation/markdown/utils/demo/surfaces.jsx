import backgrounds from 'layr.css/src/utilities/layr.backgrounds.css?raw';
import colors from 'layr.css/src/utilities/layr.color-values.css?raw';
import corners from 'layr.css/src/utilities/layr.corners.css?raw';
import shadows from 'layr.css/src/utilities/layr.shadows.css?raw';

export const Surfaces = () => (
  <div className="o-Flex o-Flex--j--sa u-center">
    <div className="u-br2 u-bg--bluegreen u-offwhite u-sh--1 u-py4 u-px3 u-m2">
      <ul className="list--reset">
        <li>Shadow 1</li>
        <li>Border 2</li>
      </ul>
    </div>
    <div className="u-br3 u-bg--yellow u-offwhite u-sh--2 u-py4 u-px3 u-m2">
      <ul className="list--reset">
        <li>Shadow 2</li>
        <li>Border 3</li>
      </ul>
    </div>
    <div className="u-br4 u-bg--red u-offwhite u-sh--3 u-py4 u-px3 u-m2">
      <ul className="list--reset">
        <li>Shadow 3</li>
        <li>Border 4</li>
      </ul>
    </div>
  </div>
);

export const snippet = `
  /*
    Surfaces Utilities

    Corners...........Border Radius Utils.
    Background........Background Values (Color, None)
    Colors............Color and Fill Values
    Shadows...........Material Like Shadows.
  */

  ${backgrounds}

  ${colors}

  ${corners}

  ${shadows}
 `;
