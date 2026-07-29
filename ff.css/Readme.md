# ff.css

ff.css is the historical font-family utility sibling of Obsidian.css. It
provides custom properties and `.u-` utility classes for common system, serif,
sans-serif, and monospace font stacks.

The source at standalone commit
[`31d4ae8`](https://github.com/charliewilco/ff.css/commit/31d4ae8130ed1b82ca557a4bb7704cfab303e4bc)
was moved from
[`charliewilco/ff.css`](https://github.com/charliewilco/ff.css) into the Layr
monorepo so the related implementations can be built and inspected together.
This workspace preserves the published `ff.css@0.2.0` source API, but it is not
currently intended for npm republishing.

## Build

From the Layr repository root:

```sh
npm install
npm run build --workspace ff.css
```

The build creates the browser stylesheet in `dist/ff.css` and regenerates
`families.json` from the custom properties in `index.css`.

## Usage

```css
@import "ff.css";
```
