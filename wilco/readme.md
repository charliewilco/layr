# ![Wilco](/wilco.png)</h1>

<a href="https://github.com/charlespeters/VVWIP">
  <img align="right" src="https://unpkg.com/vvwip/AWIP.svg" alt="AWIP" />
</a>

Wilco (_def_: short for will comply) is a linter built on top of [Stylelint](http://stylelint.io/) with an opinionated ruleset; think [Standard.js](http://standardjs.com/) for CSS.

## Install

```sh
npm install --global wilco
```

## Usage

```sh
wilco ./path/to/styles/**/*.css
```

## Rules

This is a modification of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with a few exceptions:

- Hex codes should be in all caps
- No Leading Zeroes
- Whitelisted units ['px', 'em', 'rem', '%', 'deg', 'ms']

All rules found [here](https://github.com/charlespeters/stylelint-config-wilco)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
