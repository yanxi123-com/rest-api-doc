'use strict';

var gulp = require('gulp');
var rsync = require('gulp-rsync');

var handleErrors = require('../util/handleErrors');
var config = require('../config');

gulp.task('deploy-dev', ['dev-online'], function () {

    return gulp.src(config.dist.root() + '/**')
        .on('error', handleErrors)
        .pipe(rsync({
            root: config.dist.root(),
            hostname: 'example.com',
            username: 'root',
            recursive: true,
            clean: true,
            destination: '/your/server/path'
        }));
});

gulp.task('deploy', [], function (cb) {

});
