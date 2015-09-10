'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var watchify = require('watchify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var ngAnnotate = require('browserify-ngannotate');
var envify = require('envify/custom');
var coffeeify    = require('coffeeify');
var path = require('path');

var handleErrors = require('../util/handleErrors');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

    var bundler = browserify({
        entries: config.browserify.entries,
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }, watchify.args);

    if (!config.isProd()) {
        bundler = watchify(bundler);
        bundler.on('update', function () {
            rebundle();
        });
    }

    bundler.transform(ngAnnotate);
    bundler.transform(coffeeify);
    bundler.transform(envify({
        API_GROUPS: config.getApiGroups(),
        TEMPLATES: path.join(config.views.dest(), 'templates.js'),
        DATA_TYPE: path.join(__dirname, '../../app/coffee/data-type.coffee')
    }));
    bundler.transform('brfs');
    bundler.transform('bulkify');

    function rebundle() {
        var stream = bundler.bundle();
        var createSourcemap = config.isProd() && config.browserify.sourcemap;

        gutil.log('Rebundle...');

        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulpif(createSourcemap, buffer()))
            .pipe(gulpif(createSourcemap, sourcemaps.init()))
            .pipe(gulpif(config.isProd(), streamify(uglify({
                compress: {drop_console: true}
            }))))
            .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest()))
            .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
    }

    return rebundle();

}

gulp.task('browserify', function () {

    if (config.isProd()) {
        return buildScript("main-" + config.buildTime + ".js");
    }
    return buildScript('main.js');
});
