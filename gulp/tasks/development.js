'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {

  cb = cb || function() {};

  global.buildDir = 'dev';
  global.isProd = false;

  runSequence('clean', ['styles', 'images', 'views', 'browserify'], 'watch', cb);

});

gulp.task('dev-online', function(cb) {

  cb = cb || function() {};

  global.buildDir = 'dev-online';
  global.isProd = true;

  runSequence('clean', ['styles', 'images', 'views', 'browserify'], cb);

});
