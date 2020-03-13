# quick-html-boilerplate

![Desktop Screenshot](https://i.imgur.com/8N95Om7.png)

![Mobile Screenshot](https://i.imgur.com/bkGdal3.jpg)

[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)

[![Dependency Status](https://david-dm.org/engineervix/quick-html-boilerplate/status.svg?style=flat)](https://david-dm.org/engineervix/quick-html-boilerplate) [![devDependencies Status](https://david-dm.org/engineervix/quick-html-boilerplate/dev-status.svg)](https://david-dm.org/engineervix/quick-html-boilerplate?type=dev) [![dependabot](https://badgen.net/dependabot/engineervix/quick-html-boilerplate/?icon=dependabot)](https://dependabot.com/)

## About this

A dead simple and quick html starter kit for prototyping web development projects. Nothing fancy, everything is pretty basic.

## Features

- Fully responsive, using the latest [Bootstrap 4](https://getbootstrap.com/) with additional themes courtesy of [Bootswatch](https://bootswatch.com/).
- [Font Awesome 5 (free)](https://fontawesome.com/icons?m=free) icons.
- Live reload courtesy of [BrowserSync](https://browsersync.io/).
- [Gulp](https://gulpjs.com/) based workflow, with defined tasks for:
  - copying minified (dist) files of modules listed in package.json "dependencies" field to the `static/vendors` directory. This is courtesy of [gulp-npm-dist](https://github.com/dshemendiuk/gulp-npm-dist) in conjunction with [gulp-rename](https://github.com/hparra/gulp-rename),
  - deleting files and directories in the `static/vendors` directory using [del](https://github.com/sindresorhus/del),
  - _uglifying_ javascript files using [gulp-uglify](https://github.com/terinjokes/gulp-uglify),
  - _minifying_ css files using [gulp-clean-css](https://github.com/scniro/gulp-clean-css)

## Prerequisites

- [Node.js](https://nodejs.org/) with the following packages installed **globally**:
  - [concurrently](https://github.com/kimmobrunfeldt/concurrently): `npm install -g concurrently`
  - [Browsersync](https://browsersync.io/): `npm install -g browser-sync`
  - [Gulp](https://gulpjs.com/): `npm install gulp-cli -g`
- [Python3](https://www.python.org/). In this boilerplate, I use the [`http.server`](https://docs.python.org/3.6/library/http.server.html) module as a development server. There are numerous (better) alternatives so feel free to use your preferred option (An excellent example is [lite-server](https://github.com/johnpapa/lite-server), a _development only_ node server that uses BrowserSync). I chose this because python3 is always installed on any development machine I use :smile:!

## How to use this

1. Clone the repository: `git clone https://github.com/engineervix/quick-html-boilerplate.git`
2. Navigate to the cloned project directory: `cd quick-html-boilerplate`
3. Install dependencies: `npm install`
4. Copy the vendor libraries into the `static/vendors` directory: `gulp cp`
5. Start the development server: `npm run dev`. If you have `lite-server`, simply run `lite-server`.

## Credits

- HTML Template based on <https://startbootstrap.com/snippets/full-image-header/>
- svg background: <https://www.svgbackgrounds.com/#endless-constellation>
- favicon created using <https://favicon.io/>
- `<og:image>` placeholder: <https://picsum.photos>
- `.gitignore` generated using <https://www.gitignore.io/>

## TODO

- [ ] Develop a ["cookiecutter"](https://github.com/cookiecutter/cookiecutter)

---
