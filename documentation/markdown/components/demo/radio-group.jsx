import snippet from 'layr.css/src/components/layr.radio-group.css?raw';

const RadioGroup = () => (
  <>
    <h6 className="u-mb2 small u-caps">Radio Inputs</h6>
    <div className="c-RadioGroup small o-Flex o-Flex--j--sb u-w500 u-mxa u-py4 u-center">
      <input type="radio" name="r" id="ru" className="c-RadioGroup__elm" />
      <label htmlFor="ru" className="c-RadioGroup__opt o-Flex--center--v u-p2">
        Recently Updated
      </label>
      <input
        type="radio"
        name="r"
        id="created"
        className="c-RadioGroup__elm"
        defaultChecked
      />
      <label htmlFor="created" className="c-RadioGroup__opt o-Flex--center--v u-p2">
        Created On
      </label>
      <input type="radio" name="r" id="az" className="c-RadioGroup__elm" />
      <label htmlFor="az" className="c-RadioGroup__opt o-Flex--center--v u-p2">
        A to Z
      </label>
    </div>
    <h6 className="u-mb2 small u-caps">Links</h6>
    <div className="c-RadioGroup small o-Flex o-Flex--space u-w500 u-mxa u-py4 u-center">
      <a href="#" className="c-RadioGroup__opt o-Flex--center--v u-p2">
        Recently Updated
      </a>
      <a href="#" className="c-RadioGroup__opt o-Flex--center--v u-p2 active">
        Created On
      </a>
      <a href="#" className="c-RadioGroup__opt o-Flex--center--v u-p2">
        A to Z
      </a>
    </div>
  </>
);

export { RadioGroup, snippet };
