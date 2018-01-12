# webpack-typescript

> A Vue, Webpack and Typescript setup with hot reload, dynamic imports, unit testing, 
code coverage, sass and bundling/minification.

> This template is for Vue 2.5. See the [changelog](CHANGELOG.md) for updates.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli), forked from [ducksoupdev](https://github.com/ducksoupdev/vue-webpack-typescript).  It has been modified to support Vue.js [Single File Components](https://vuejs.org/v2/guide/single-file-components.html), [Pug templating](https://pugjs.org) by default, and a few other minor changes.

Note on Pug!  Even though templates are compiled with Pug, the interpolation of attributes should use Vue.js template syntax instead (i.e., `p {{myProperty}}`), as the Vue.js template processor executes on the HTML emitted from Pug.  A little weird,  but works out well.

``` bash
$ npm install -g vue-cli
$ vue init wwoods/vue-webpack-typescript my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: Webpack + Typescript with config for source maps & hot-reload
- `npm test`: Mocha unit tests
- `npm run test:debug`: Debug Mocha unit tests in Chrome
- `npm run test:watch`: Fast feedback Mocha unit tests with hot-reload
- `npm run coverage`: Karma coverage reporter
- `npm run lint`: Lint all Typescript files
- `npm run build`: build with HTML/CSS/JS minification, code splitting and icon generation
- `npm run ci:teamcity`: Teamcity CI integration
- `npm run ci:jenkins`: Jenkins CI integration


### TODO

* Need to figure out a way to set up what is built as NPM module and install it to other applications.

