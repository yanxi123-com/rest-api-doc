#!/usr/bin/env node

var gulp = require('gulp');
var program = require('commander');

var config = require('../gulp/config');

program
    .version('0.0.1')
    .option('-s, --source', 'directory which the api defined in')
    .option('-t, --target', 'dirrectory which the api doc created in')
    .option('-d, --development', 'development mode')
    .parse(process.argv);

config.setOpts({
    source: program.source || 'api',
    target: program.target || 'api-doc',
    isProd: !program.development
});

require('../gulp');

if (program.development) {
    gulp.start('dev');
} else {
    gulp.start('prod');
}

