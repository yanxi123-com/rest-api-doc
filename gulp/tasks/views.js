'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var templateCache = require('gulp-angular-templatecache');
var htmlreplace = require('gulp-html-replace');

var config = require('../config');

// Views task
gulp.task('views', function () {

    // Put our index.html in the dist folder
    gulp.src('app/index.html')
        .pipe(gulpif(config.isProd(), htmlreplace({
            css: 'css/main-' + config.buildTime + '.css',
            js: 'js/main-' + config.buildTime + '.js'
        })))
        .pipe(gulp.dest(config.dist.root()));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest(config.views.dest));

});