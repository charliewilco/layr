import snippet from 'layr.css/src/components/layr.dropdown.css?raw';

const Dropdown = () => (
  <>
    <a href="#" className="c-Btn">
      Button
    </a>
    <div className="c-Dropdown__container u-relative u-py6 u-mb6">
      <div className="u-absolute" style={{ left: 0, top: 0 }}>
        <div
          className="c-Dropdown c-Dropdown--l u-mxw--fit active"
          style={{ width: '18rem' }}>
          <h3 className="h6 u-p2">
            <a href="#">Heading</a>
          </h3>
          <hr className="u-bg--ltgray" />
          <nav className="c-Nav small">
            <ul className="o-UIList">
              <li className="o-UIList__item u-p2">
                <a href="#" className="u-gray200">
                  Preferences
                </a>
              </li>
              <li className="o-UIList__item u-p2">
                <a href="#" className="u-gray200">
                  Help
                </a>
              </li>
              <li className="o-UIList__item u-p2">
                <a href="#" className="u-gray200">
                  Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
);

export { Dropdown, snippet };
