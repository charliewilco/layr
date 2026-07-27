interface IFigure {
  imgURL: string;
  altText: string;
  caption?: string;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const withBase = (href: string) => (href.startsWith("/") ? `${base}${href}` : href);

export const Figure = ({ imgURL, altText, caption }: IFigure) => (
  <figure className="Figure u-mt2 u-mb4">
    <img src={withBase(imgURL)} alt={altText} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);
