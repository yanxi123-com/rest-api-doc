'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap');
require(process.env.TEMPLATES);
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');
require('./filters/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives',
    'app.filters',
    'ui.bootstrap'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});