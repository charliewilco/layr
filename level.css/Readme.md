# Level.css

Level.css is the historical reset-only sibling of Obsidian.css. It provides a
small baseline for the box model, default margins, responsive media, forms, and
code blocks without the rest of the layered framework.

The source at standalone commit
[`adc4139`](https://github.com/charliewilco/level.css/commit/adc41396f93539ac52fa7bd984d2f0272a3e95d3)
was moved from
[`charliewilco/level.css`](https://github.com/charliewilco/level.css) into the
Layr monorepo so the related implementations can be built and inspected
together. This workspace preserves the published `level.css@0.1.1` source API,
but it is not currently intended for npm republishing.

## Build

From the Layr repository root:

```sh
npm install
npm run build --workspace level.css
```

## Usage

```css
@import "level.css";
```
