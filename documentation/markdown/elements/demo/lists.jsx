import snippet from 'layr.css/src/elements/layr.lists.css?raw';

const UILists = () => (
  <div className="o-Flex o-Flex--wrap">
    <div className="o-col--12/12 o-col--4/12@md u-p2">
      <h6 className="u-mb2">Unordered List</h6>
      <ul>
        <li>Listed Item #1</li>
        <li>Listed Item #2</li>
        <li>Listed Item #3</li>
        <li>Listed Item #4</li>
      </ul>
    </div>
    <div className="o-col--12/12 o-col--4/12@md u-p2">
      <h6 className="u-mb2">Ordered List</h6>
      <ol>
        <li>Numbered Item #1</li>
        <li>Numbered Item #2</li>
        <li>Numbered Item #3</li>
        <li>Numbered Item #4</li>
      </ol>
    </div>
  </div>
);

export { UILists, snippet };
