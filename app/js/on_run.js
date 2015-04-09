'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, $window, AppSettings, $location) {

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });


  $rootScope.scrollToTop = function() {
    $window.scrollTo(0, 0);
    $location.hash('top');
  };

}

module.exports = OnRun;
