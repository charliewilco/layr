import snippet from 'layr.css/src/components/layr.input-group.css?raw';

const InputGroup = () => (
  <div className="o-Container--xs u-p3 u-sh--2 u-bg--offwhite u-mxa">
    <h6 className="small u-mb3">Sign Up for Our Newsletter</h6>
    <div className="c-InputGroup o-Flex">
      <input
        type="text"
        className="c-InputGroup--first c-Field u-m0"
        placeholder="address@email.com"
      />
      <button className="c-Btn c-InputGroup--last">Submit</button>
    </div>
  </div>
);

export { InputGroup, snippet };
