'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        }).state('group', {
            url: '/group/:name',
            controller: 'GroupCtrl as group',
            templateUrl: 'group.html',
            title: 'Group'
        }).state('apis', {
            url: '/group/:name/:index',
            controller: 'ApisCtrl as apis',
            templateUrl: 'apis.html',
            title: 'Api Spec'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = Routes;
