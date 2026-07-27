import snippet from 'layr.css/src/objects/layr.intrinsic.css?raw';

const Intrinsic = () => (
  <div className="o-Flex o-Flex--wrap">
    <div className="o-Column--12/12 o-Column--6/12@md u-p2">
      <div className="o-Intrinsic o-Intrinsic--16x9">
        <iframe
          src="https://www.youtube.com/embed/-fqu-5IuOkc"
          className="o-Intrinsic__item"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
    <div className="o-Column--12/12 o-Column--6/12@md u-p2">
      <div className="o-Intrinsic o-Intrinsic--16x9">
        <iframe
          src="https://www.youtube.com/embed/-fqu-5IuOkc"
          className="o-Intrinsic__item"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export { snippet, Intrinsic };
