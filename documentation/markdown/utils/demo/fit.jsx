import snippet from 'layr.css/src/utilities/layr.object-fit.css?raw';
import { fillerImage } from '../../demo-paths';

const Fit = () => (
  <div className="o-Flex o-Flex--wrap o-Flex--j--c">
    <div className="o-Column--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Top</h6>
      <div className="o-Intrinsic o-Intrinsic--3x1 u-bg--bluegreen">
        <img
          src={fillerImage}
          className="o-Intrinsic__item u-fit--cover u-fit--tc"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-Column--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Bottom</h6>
      <div className="o-Intrinsic o-Intrinsic--3x1 u-bg--bluegreen">
        <img
          src={fillerImage}
          className="o-Intrinsic__item u-fit--cover u-fit--cb"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-Column--5/12 u-m3">
      <h6 className="small u-caps">Cover / Center Center</h6>
      <div className="o-Intrinsic o-Intrinsic--3x1 u-bg--bluegreen">
        <img
          src={fillerImage}
          className="o-Intrinsic__item u-fit--cover u-fit--cc"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-Column--5/12 u-m3">
      <h6 className="small u-caps">Contain</h6>
      <div className="o-Intrinsic o-Intrinsic--3x1 u-bg--bluegreen">
        <img
          src={fillerImage}
          className="o-Intrinsic__item u-fit--contain"
          alt="Placeholder Image"
        />
      </div>
    </div>
    <div className="o-Column--5/12 u-m3">
      <h6 className="small u-caps">Fill</h6>
      <div className="o-Intrinsic o-Intrinsic--16x9 u-bg--bluegreen">
        <img
          src={fillerImage}
          className="o-Intrinsic__item u-fit--fill"
          alt="Placeholder Image"
        />
      </div>
    </div>
  </div>
);

export { Fit, snippet };
