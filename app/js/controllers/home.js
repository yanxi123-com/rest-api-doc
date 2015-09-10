'use strict';

var apiGroups = require(process.env.API_GROUPS);
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl($scope, $rootScope) {

    $rootScope.apiGroups = $scope.apiGroups = apiGroups;
}

controllersModule.controller('HomeCtrl', HomeCtrl);
