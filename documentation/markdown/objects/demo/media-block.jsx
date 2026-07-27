import snippet from 'layr.css/src/objects/layr.media.css?raw';

const IMAGE_URL = '/static/assets/filler-image.svg';

const MediaBlock = () => (
  <div className="o-Container--lg">
    <div className="o-Media u-mb3 u-cf">
      <div className="o-Media__figure">
        <img src={IMAGE_URL} alt="Impossible Triangle" />
      </div>
      <div className="o-Media__body u-pl3 small">
        <p className="u-system">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
    <div className="o-Media u-mb3 u-cf">
      <div className="o-Media__figure">
        <img src={IMAGE_URL} alt="Impossible Triangle" />
      </div>
      <div className="o-Media__body u-pl3 small">
        <p className="u-system">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  </div>
);

export { MediaBlock, snippet };
