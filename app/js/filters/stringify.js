'use strict';

var stringifyObj = require('./stringify-obj');

var filtersModule = require('./_index.js');

/**
 * @ngInject
 */
function StringifyFilter($sce) {

    return function (obj) {
        return $sce.trustAsHtml(stringifyObj(obj, {
            indent: '  '
        }));
    };

}

filtersModule.filter('stringify', StringifyFilter);
