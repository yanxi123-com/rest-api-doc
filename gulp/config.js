'use strict';

var _ = require('lodash');
var moment = require('moment');
var path = require('path');

var options = {};

function buildPath() {
    var arg = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];

    return path.join.apply(path, [process.cwd(), options.target].concat(arg));
}

module.exports = {

    setOpts: function (opts) {
        _.extend(options, opts);
    },

    getApiGroups: function () {
        return path.join(process.cwd(), options.source, 'index.coffee');
    },

    isProd: function () {
        return options.isProd;
    },

    buildTime: moment().format('YYMMDDHHmm'),

    'serverport': 3200,

    'styles': {
        'src': path.join(__dirname, '../app/styles/**/*.scss'),
        'dest': function () {
            return buildPath('css');
        }
    },

    'scripts': {
        'src': path.join(__dirname, '../app/js/**/*.js'),
        'dest': function () {
            return buildPath('js');
        }
    },

    'views': {
        'watch': [
            path.join(__dirname, '../app/index.html'),
            path.join(__dirname, '../app/views/**/*.html')
        ],
        'src': path.join(__dirname, '../app/views/**/*.html'),
        'dest': function () {
            return buildPath('js');
        }
    },

    'dist': {
        'root': buildPath
    },

    'browserify': {
        'entries': [path.join(__dirname, '../app/js/main.js')],
        'bundleName': 'main.js',
        'sourcemap': false
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};
