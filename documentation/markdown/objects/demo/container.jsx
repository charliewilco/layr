import snippet from 'layr.css/src/objects/layr.containers.css?raw';

const Container = () => (
  <div className="u-w700">
    <div className="o-Container--xs o-Container--wrap u-mb2 u-bg--blue u-p2 u-center u-offwhite">
      Xtra Small = 28.125rem / 450px
    </div>
    <div className="o-Container--sm o-Container--wrap u-mb2 u-bg--blue u-p2 u-center u-offwhite">
      Small = 37.5rem / 600px
    </div>
    <div className="o-Container--md o-Container--wrap u-mb2 u-bg--blue u-p2 u-center u-offwhite">
      Medium = 46.875rem / 750px
    </div>
    <div className="o-Container--lg o-Container--wrap u-mb2 u-bg--blue u-p2 u-center u-offwhite">
      Large = 56.25rem / 900px
    </div>
    <div className="o-Container o-Container--wrap u-mb2 u-bg--blue u-p2 u-center u-offwhite">
      Full = 75rem / 1200px
    </div>
  </div>
);

export { Container, snippet };
