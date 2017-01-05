'use strict';

var NOAH = NOAH || {};

/** Requirements */
var karma = require('karma').Server

/**
 * NOAH.test
 * Run unit tests using Karma
 */
NOAH.test = (function(options) {

  var component = options.component || '*';
  var callback  = options.callback || process.exit;
  var singlerun = (options.singlerun !== 'undefined') ? options.singlerun : true;

  karma.start({

      frameworks: [
        'mocha', 
        'chai', 
        'sinon-chai'
      ],

      plugins: [
        'karma-chai-plugins',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-phantomjs-launcher'
      ],

      files: [
        'assets/vendor/**/*.js',
        'assets/js/*.js',
        'test/js/' + component + '.test.js'
      ],

      reporters: ['mocha'],

      browsers: ['PhantomJS'],

      client: {
        captureConsole: true
      },

      singleRun: singlerun,
      port: 9876,
      colors: true,
      autoWatch: true

  }, callback);

});

// Export the function to use in other files
exports.NOAH = NOAH.test;