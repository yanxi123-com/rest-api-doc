'use strict';

var apiGroups = require('api-groups');

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ApisCtrl($scope, $stateParams, $anchorScroll, $location, $timeout, $rootScope) {
    $rootScope.apiGroups = apiGroups;
    $anchorScroll.yOffset = 75;

    $timeout(function () {
        apiGroups.some(function (group) {

            if (group.name === $stateParams.name) {
                $scope.group = group;
                $scope.apis = group && group.apisList[$stateParams.index];

                return true;
            }
        });

        $timeout(function() {
            $anchorScroll();
        });
    });


    $scope.scrollToApi = function (index) {

        $location.hash('api-' + index);
        $anchorScroll();
    };

}

controllersModule.controller('ApisCtrl', ApisCtrl);
