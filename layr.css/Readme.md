# Layr

Core workspace

---

Layr is a live ITCSS reference implementation for teams.

Layr is the renamed continuation of the old Obsidian.css project. It is private and not currently intended for npm republishing; the package exists so the Astro documentation can import and demonstrate the real CSS source.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS-like](https://charliewilco.github.io/layr/itcss/) methodology. It uses PostCSS plugins to resolve imports, process custom properties, add vendor prefixes, generate stylesheet metrics, and minify production CSS.

## Local Build

```sh
npm run build --workspace layr.css
```

## Workspace Usage

```css
@import 'layr.css/src/settings';
@import 'layr.css/src/generic';
@import 'layr.css/src/elements';
@import 'layr.css/src/objects';
@import 'layr.css/src/components';
@import 'layr.css/src/utilities';
```
