import snippet from 'layr.css/src/components/layr.select.css?raw';

const SelectUI = () => (
  <div className="o-Column--12/12 o-Column--6/12@md u-mxa u-p2">
    <label htmlFor="slct" className="u-gray u-mb1 u-bl">
      Select
    </label>
    <div className="c-Select">
      <select className="c-Select__elm" name="slct" id="slct">
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3" selected>
          Value 3
        </option>
        <option value="value4">Value 4</option>
        <option value="value5">Value 5</option>
      </select>
    </div>
  </div>
);

export { SelectUI, snippet };
