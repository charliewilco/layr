import snippet from 'layr.css/src/objects/layr.ui-list.css?raw';

let items = ['One', 'Two', 'Three', 'Four', 'Five'];

const UIListItem = ({ item }) => <li className="o-UIList__item u-m2">{item}</li>;

const UIList = () => (
  <div className="o-Flex o-Flex--j--sa">
    <div className="o-Column--4/12">
      <ul className="o-UIList">
        {items.map((item, idx) => (
          <UIListItem item={item} key={idx} />
        ))}
      </ul>
    </div>
    <div className="o-Column--4/12 u-mx4">
      <ul className="o-UIList o-UIList--dividers">
        {items.map((item, idx) => (
          <UIListItem item={item} key={idx} />
        ))}
      </ul>
    </div>
    <div className="o-Column--4/12">
      <ul className="o-UIList o-UIList--inline">
        {items.map((item, idx) => (
          <UIListItem item={item} key={idx} />
        ))}
      </ul>
    </div>
  </div>
);

export { UIList, snippet };
