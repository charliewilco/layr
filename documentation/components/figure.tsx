interface IFigure {
  imgURL: string;
  altText: string;
  caption?: string;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
function withBase(href: string) {
  return href.startsWith("/") ? `${base}${href}` : href;
}

export function Figure({ imgURL, altText, caption }: IFigure) {
  return (
    <figure className="Figure u-mt2 u-mb4">
      <img src={withBase(imgURL)} alt={altText} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
