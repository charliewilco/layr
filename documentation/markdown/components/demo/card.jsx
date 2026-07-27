import snippet from 'layr.css/src/components/layr.card-ui.css?raw';

const CardUI = () => (
  <article className="c-Card u-ov--hid u-mxa">
    <figure className="c-Card__figure o-intrinsic o-intrinsic--16x9">
      <img
        src="http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201411/363561279.jpg"
        className="o-intrinsic__item u-fit--cover u-bl"
        alt="Adam West is back as Batman"
      />
    </figure>
    <header className="u-pt3 u-px3 u-mb2 o-Flex o-Flex--center--h">
      <img
        className="o-Icon o-Icon--xs u-mr2"
        src="http://i.cdn.turner.com/cnn/.e1mo/img/4.0/logos/logo_cnn_badge_2up.png"
        alt="CSS-Tricks Logo"
      />
      <h1 className="small u-system u-ltgray u-mb0">CNN</h1>
    </header>
    <div className="c-Card__content u-px3 u-pb3">
      <h2 className="h6">
        <a href="#">Adam West is back as Batman</a>
      </h2>
      <small className="u-caps u-ltgray">
        Lisa Respers France — <time>August 18, 2016</time>
      </small>
      <p className="u-bl u-wd--100" style={{ whiteSpace: 'normal' }}>
        Here's a perfect one for a Throwback Thursday: Adam West, Burt Ward and Julie
        Newmar are reprising their famous "Batman" roles in the new animated film
        "Batman: Return of the Caped Crusaders.
      </p>
    </div>
  </article>
);

export { CardUI, snippet };
