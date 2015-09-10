'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function(cb) {

  cb = cb || function() {};
  runSequence('clean', ['styles', 'views', 'browserify'], cb);

});
