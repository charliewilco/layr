import margin from 'layr.css/src/utilities/layr.spacing-margin.css?raw';
import padding from 'layr.css/src/utilities/layr.spacing-padding.css?raw';

const snippet = `
/*---------Spacing Utilities----------*/

/*
  NOTE: Adapted from Basscss from Brent Jackson
  http://www.basscss.com/#basscss-margin
  http://www.basscss.com/#basscss-padding
*/

${margin}

${padding}

:root {
  --spacing-1: calc(var(--base-spacing) / 4);
  --spacing-2: calc(var(--base-spacing) / 2);
  --spacing-3: calc(var(--base-spacing));
  --spacing-4: calc(var(--base-spacing) * 2);
  --spacing-5: calc(var(--base-spacing) * 2.4);
  --spacing-6: calc(var(--base-spacing) * 4);
}

`;

const Spacing = () => (
  <div>
    <div className="u-mb1">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-mb2">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-mb3">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-mb4">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-mb5">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-mb6">
      <div className="u-p3 u-bg--yellow" />
    </div>
    <div className="u-inbl u-mr1">
      <div className="u-p3 u-bg--orange" />
    </div>
    <div className="u-inbl u-mr2">
      <div className="u-p3 u-bg--orange" />
    </div>
    <div className="u-inbl u-mr3">
      <div className="u-p3 u-bg--orange" />
    </div>
    <div className="u-inbl u-mr4">
      <div className="u-p3 u-bg--orange" />
    </div>
    <div className="u-inbl u-mr5">
      <div className="u-p3 u-bg--orange" />
    </div>
    <div className="u-inbl u-mr6">
      <div className="u-p3 u-bg--orange" />
    </div>
  </div>
);

export { Spacing, snippet };
