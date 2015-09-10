'use strict';

var controllersModule = require('./_index');
var apiGroups = require(process.env.API_GROUPS);

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

        $timeout(function () {
            $anchorScroll();
        });
    });


    $scope.scrollToApi = function (index) {

        $location.hash('api-' + index);
        $anchorScroll();
    };

}

controllersModule.controller('ApisCtrl', ApisCtrl);
