'use strict';

var type = require(process.env.DATA_TYPE);

var filtersModule = require('./_index.js');

/**
 * @ngInject
 */
filtersModule.filter('stringify2', function ($sce) {

    return function (obj) {

        var result = JSON.stringify(obj, function (key, value) {
            if (value instanceof type()) {
                switch (value.type) {
                    case Number :
                        return 1;
                    case String:
                        return "string";
                    default:
                        return value.type.name;
                }
            } else {
                return value;
            }
        }, 4);

        return $sce.trustAsHtml(result);
    };
});
