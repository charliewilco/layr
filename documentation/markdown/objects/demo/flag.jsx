const IMAGE_URL = '/static/assets/filler-image.svg';
import snippet from 'layr.css/src/objects/layr.flag.css?raw';

const Flag = () => (
  <>
    <div className="o-Flag u-mb3">
      <figure className="o-Flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt="Impossible Triangle" className="u-bl" />
      </figure>
      <div className="o-Flag__body small">
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-Flag o-Flag--top u-mb3">
      <figure className="o-Flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt="Impossible Triangle" className="u-bl" />
      </figure>
      <div className="o-Flag__body small">
        <h6 className="u-mb2">Top</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-Flag o-Flag--bottom u-mb3">
      <figure className="o-Flag__figure o-col--3/12 u-mr3">
        <img src={IMAGE_URL} alt="Impossible Triangle" className="u-bl" />
      </figure>
      <div className="o-Flag__body small">
        <h6 className="u-mb2">Bottom</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed. Culpa ipsam pariatur cumque maxime!
        </p>
      </div>
    </div>
    <div className="o-Flag o-Flag--reverse u-mb3">
      <figure className="o-Flag__figure o-col--3/12">
        <img src={IMAGE_URL} alt="Impossible Triangle" className="u-bl" />
      </figure>
      <div className="o-Flag__body small u-mr3">
        <h6 className="u-mb2">Reversed</h6>
        <p className="u-m0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro
          provident ipsa nam, quod molestias doloribus dolore sequi quaerat, facilis
          repellendus est corporis dolorum sed.
        </p>
      </div>
    </div>
  </>
);

export { Flag, snippet };
