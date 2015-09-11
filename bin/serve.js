#!/usr/bin/env node

'use strict';

require('coffee-script/register');

var program = require('commander');
var path = require('path');

var packageInfo = require('../package');

program
    .version(packageInfo.version)
    .option('-s, --source', 'directory which the api defined in')
    .option('-d, --development', 'development mode')
    .option('-p --port', 'server port')
    .parse(process.argv);

var config = {
    staticRoot: path.join(__dirname, '../app'),
    serverPort: program.port || 5073,
    apiPath: path.join(process.cwd(), program.source || 'api', 'index.coffee')
};

var http = require('http');
var express = require('express');
var morgan = require('morgan');

var server = express();

// log all requests to the console
server.use(morgan('dev'));
server.use(express.static(config.staticRoot));

server.get('/api', function (req, res) {
    res.json(require(config.apiPath));
});

// Serve index.html for all routes to leave routing up to Angular
server.use('/', function (req, res) {
    res.sendFile('index.html', {root: config.staticRoot});
});

// Start webserver if not already running
var s = http.createServer(server);
s.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
        console.log('Development server is already started at port ' + config.serverPort);
    }
    else {
        throw err;
    }
});

s.listen(config.serverPort, function () {
    return console.log("Server started: http://localhost:" + config.serverPort);
});

process.on('uncaughtException', function (err) {
    console.log('uncaughtException');
    return console.error(err.stack);
});
