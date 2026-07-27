import snippet from 'layr.css/src/objects/layr.flex.css?raw';

const Flex = () => (
  <>
    <div className="o-Flex u-center u-offwhite u-mb4">
      <div className="o-Flex__child u-bg--fuchsia u-m1 u-p2">
        <span>One Flex Child</span>
      </div>
      <div className="o-Flex__child u-bg--bluegreen u-m1 u-p2">
        <span>Second Flex Child</span>
      </div>
    </div>
    <h6 className="small u-caps">Space Around</h6>
    <div className="o-Flex o-Flex--j--sa u-center u-offwhite u-mb4">
      <div className="u-bg--fuchsia u-m1 u-p2">
        <span>One Flex Child</span>
      </div>
      <div className="u-bg--bluegreen u-m1 u-p2">
        <span>Second Flex Child</span>
      </div>
    </div>
    <h6 className="small u-caps">Space Between</h6>
    <div className="o-Flex o-Flex--j--sb u-center u-offwhite u-mb4">
      <div className="u-bg--fuchsia u-m1 u-p2">
        <span>One Flex Child</span>
      </div>
      <div className="u-bg--bluegreen u-m1 u-p2">
        <span>Second Flex Child</span>
      </div>
    </div>
    <h6 className="small u-caps">Centered</h6>
    <div className="o-Flex o-Flex--j--c u-center u-offwhite u-mb4">
      <div className="u-bg--fuchsia u-m1 u-p2">
        <span>One Flex Child</span>
      </div>
      <div className="u-bg--bluegreen u-m1 u-p2">
        <span>Second Flex Child</span>
      </div>
    </div>
    <h6 className="small u-caps">Centered Horizontally</h6>
    <div className="o-Flex o-Flex--center--h u-center u-offwhite u-mb4">
      <div className="o-Flex__child u-bg--fuchsia u-m1 u-py6 u-px2">
        <span>One Flex Child</span>
      </div>
      <div className="o-Flex__child u-bg--bluegreen u-m1 u-p2">
        <span>Second Flex Child</span>
      </div>
      <div className="o-Flex__child u-bg--yellow u-m1 u-py4 u-px2">
        <span>Third Flex Child</span>
      </div>
    </div>
  </>
);

export { Flex, snippet };
