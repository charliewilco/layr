const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function withBase(path) {
  if (!path.startsWith('/') || path.startsWith('//')) {
    return path;
  }

  return `${base}${path}`;
}

const fillerImage = withBase('/static/assets/filler-image.svg');

export { fillerImage, withBase };
