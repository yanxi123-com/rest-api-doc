'use strict';

var _ = require('lodash');
var path = require('path');
var moment = require('moment');

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
        'src': 'app/styles/**/*.scss',
        'dest': function () {
            return buildPath('css');
        }
    },

    'scripts': {
        'src': 'app/js/**/*.js',
        'dest': function () {
            return buildPath('js');
        }
    },

    'images': {
        'src': 'app/images/**/*',
        'dest': function () {
            return buildPath('images');
        }
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/views/**/*.html'
        ],
        'src': 'app/views/**/*.html',
        'dest': 'app/js'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': buildPath,
        'options': {}
    },

    'dist': {
        'root': buildPath
    },

    'browserify': {
        'entries': ['./app/js/main.js'],
        'bundleName': 'main.js',
        'sourcemap': false
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};
