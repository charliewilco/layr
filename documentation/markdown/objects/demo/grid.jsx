import snippet from 'layr.css/src/objects/layr.grid-columns.css?raw';

const Grid = () => (
  <>
    <div className="u-cf u-offwhite u-center u-mb3">
      <div className="o-Column--2/12 u-fl u-bg--red u-p2">
        <h5 className="u-system u-w300">2/12</h5>
        <small>width = 16.667%</small>
      </div>
      <div className="o-Column--10/12 u-fl u-bg--yellow u-p2">
        <h5 className="u-system u-w300">10/12</h5>
        <small>width = 83.333%</small>
      </div>
    </div>
    <div className="u-cf u-offwhite u-center u-mb3">
      <div className="o-Column--3/12 o-Column--4/12@md u-fl u-bg--blue u-p2">
        <h5 className="u-system u-w300">3/12</h5>
        <small>width = 25% at base, 33.333% at medium breakpoint</small>
      </div>
      <div className="o-Column--3/12 o-Column--4/12@md u-fl u-bg--bluegreen u-p2">
        <h5 className="u-system u-w300">3/12</h5>
        <small>width = 25% at base, 33.333% at medium breakpoint</small>
      </div>
      <div className="o-Column--6/12 o-Column--4/12@md u-fl u-bg--green u-p2">
        <h5 className="u-system u-w300">6/12</h5>
        <small>width = 50% at base, 33.333% at medium breakpoint</small>
      </div>
    </div>
  </>
);

export { Grid, snippet };
