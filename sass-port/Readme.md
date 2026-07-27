**DEPRECATED: Not kept up to date**

# Layr.scss

A deprecated Sass port of Layr.

Layr is the renamed continuation of the old Obsidian.css project. This Sass port is private and kept only as historical/reference material; the live implementation is the PostCSS workspace package and Astro documentation site.

Layr is a modular CSS library that focuses on code common to most projects.

This project works under the belief that when abstracted most CSS is shockingly similar across projects. More than likely you'll need a type scale, a grid system, spacing utilities, media blocks, sensible default styling for elements (forms, tables, buttons). This project is a collection of the CSS patterns that have stuck with me over the last two years and grown with me.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS-like](/itcss) methodology. It uses PostCSS plugins to compile variables, color functions and add vendor prefixes.

## Local Build

```sh
npm run build --workspace layr.scss
```

## Compiling

Importing Sass files from npm can be a tricky business...

```scss
@import "layr";

$headlines: 'Proxima Nova Condensed', Lucida Grande, sans-serif;
$body-text: 'Meta Serif Pro', Charter, serif;
```

### Gulp

```javascript
import gulp from 'gulp'
import sass from 'gulp-sass'
import layr from 'layr.scss'

gulp.task('sass', () => {
  gulp.src('path/to/input.scss')
    .pipe(sass({
      includePaths: layr.includePaths
    }))
    .pipe(gulp.dest('path/to/output.css'))
})
```

### Grunt Usage

Using [grunt-sass](https://github.com/sindresorhus/grunt-sass)

Example config:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('layr.scss').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
})
```

### Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run build --workspace layr.scss`

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
