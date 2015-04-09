'use strict';
var apiGroups = require('api-groups');

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl($scope, $rootScope) {

    $rootScope.apiGroups = $scope.apiGroups = apiGroups;
}

controllersModule.controller('HomeCtrl', HomeCtrl);
