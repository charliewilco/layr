# KNDLNG

KNDLNG preserves the small JavaScript API that exposed Obsidian.css design
tokens to CSS-in-JS consumers. It vendors the token snapshot from
`obsidian.css@2.1.3` that the original build bundled at runtime.

The source at standalone commit
[`db32996`](https://github.com/charliewilco/kndlng/commit/db32996d057df79afe5507a4215c42e89533e283)
was moved from
[`charliewilco/kndlng`](https://github.com/charliewilco/kndlng) into the Layr
monorepo. This workspace carries forward its intended export shape and bundled
token data. It deliberately corrects the invalid `san-serif` font fallback and
is not intended for npm republishing.

## Build and test

From the Layr repository root:

```sh
npm install
npm run build --workspace kndlng
npm run test --workspace kndlng
```

## Usage

```ts
import { Color, Families, Obsidian, Spacing, Typescale } from "kndlng";

const card = {
  color: Obsidian.offwhite,
  backgroundColor: Color.blue.medium,
  fontFamily: Families.charter,
  fontSize: Typescale().f4,
  padding: Spacing().three,
};
```
