'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {

  cb = cb || function() {};

  runSequence('clean', ['styles', 'views', 'browserify'], 'watch', cb);

});
