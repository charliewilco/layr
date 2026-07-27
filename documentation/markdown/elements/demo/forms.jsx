import snippet from 'layr.css/src/elements/layr.forms.css?raw';

const FormsDemo = () => (
  <form>
    <div className="u-py2">
      <div className="u-inbl u-py1 u-mr3">
        <label htmlFor="label1">Text Input </label>
        <input type="text" id="label1" name="name" placeholder="Text Input" />
      </div>
      <div className="u-inbl u-py1">
        <label htmlFor="label2">Email Input</label>
        <input type="email" id="label2" name="name" placeholder="Text Input" />
      </div>
    </div>
    <div className="u-py2">
      <label htmlFor="label3">Select one</label>
      <select name="select" id="label3">
        <option value="value1">Value 1</option>
        <option value="value2" selected>
          Value 2
        </option>
        <option value="value3">Value 3</option>
      </select>
    </div>
    <div className="u-py2">
      <label htmlFor="label4">Textarea</label>
      <br />
      <textarea id="label4" name="name" rows={8} cols={40} defaultValue={''} />
    </div>
    <div className="u-py2">
      <button type="button" name="button">
        Button
      </button>
    </div>
  </form>
);

export { FormsDemo, snippet };
