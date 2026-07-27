import snippet from 'layr.css/src/components/layr.btns.css?raw';

const Btn = () => (
  <>
    <div className="u-mb4">
      <h6 className="u-mb2 small u-caps">Xtra Small Buttons</h6>
      <a className="c-Btn c-Btn--xs u-m1">Button</a>
    </div>
    <div className="u-mb4">
      <h6 className="u-mb2 small u-caps">Buttons</h6>
      <a className="c-Btn u-m1">Button</a>
    </div>
    <div className="u-mb4">
      <h6 className="u-mb2 small u-caps">Medium Buttons</h6>
      <a className="c-Btn c-Btn--md u-m1">Button</a>
    </div>
    <div className="u-mb4">
      <h6 className="u-mb2 small u-caps">Large Buttons</h6>
      <a className="c-Btn c-Btn--lg u-m1">Button</a>
    </div>
    <div>
      <h6 className="u-mb2 small u-caps">Applied to Input Nodes</h6>
      <button className="c-Btn c-Btn--md c-Btn--3 u-m1">Button</button>
      <input type="button" defaultValue="Button" className="c-Btn c-Btn--xs u-m1" />
      <input
        type="submit"
        defaultValue="Button"
        className="c-Btn c-Btn--o c-Btn--o--2 u-m1"
      />
    </div>
  </>
);

export { snippet, Btn };
