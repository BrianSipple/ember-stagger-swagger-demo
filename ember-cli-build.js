/*jshint node:true*/
/* global require, module */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const cssImport = require('postcss-import');
const cssCustomProperties = require('postcss-custom-properties');
const cssWring = require('csswring');
const cssNext = require('postcss-cssnext');
const cssReporter = require('postcss-reporter');
const cssNested = require('postcss-nested');

const Funnel = require('broccoli-funnel');

const MATCH_CSS = new RegExp('.*\\.css$');

const cssNextOptions = {
  browsers: ['last 2 version'],
  sourcemap: true,
};

const postcssOptions = {
  plugins: [
    { module: cssImport },
    { module: cssCustomProperties },
    { module: cssNested },
    { module: cssNext, options: cssNextOptions },

    // minify all the things!
    { module: cssWring },

    // report all the things!
    { module: cssReporter },
  ]
};

// "base" styles within the app/styles directory itself
const appCSS = new Funnel('app/styles', {
  srcDir: '/',
  destDir: '.',
  include: [MATCH_CSS],
});

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    postcssOptions,

    trees: {
      styles: appCSS   // expose this virtual node (aka, virtual directory) to app.css during the build
    },

  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/savvy.min.css');


  return app.toTree();
};
