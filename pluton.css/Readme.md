# Pluton

Pluton is the historical lightweight subset of Obsidian.css. It contains the
shared settings, reset, elements, core objects, and utility classes without the
full component layer that later became Layr.

The source at standalone commit
[`1610037`](https://github.com/charliewilco/pluton.css/commit/1610037b8eaf239d21787a993f60c555ac0be34d)
was moved from
[`charliewilco/pluton.css`](https://github.com/charliewilco/pluton.css) into the
Layr monorepo so the related implementations can be built and inspected
together. This workspace preserves the published `pluton.css@1.1.3` source API,
but it is not currently intended for npm republishing.

## Build

From the Layr repository root:

```sh
npm install
npm run build --workspace pluton.css
```

## Usage

```css
@import "pluton.css";

/* Or import individual layers. */
@import "pluton.css/settings";
@import "pluton.css/generic";
@import "pluton.css/elements";
@import "pluton.css/objects";
@import "pluton.css/utilities";
```
