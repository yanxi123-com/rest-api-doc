'use strict';

var fs = require('fs');
var path = require('path');

var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync(path.join(__dirname, 'tasks/')).filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});