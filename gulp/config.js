'use strict';

var path = require('path');

function buildPath() {
    var arg = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];

    return path.join.apply(path, ['build', global.buildDir].concat(arg));
}

module.exports = {

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
