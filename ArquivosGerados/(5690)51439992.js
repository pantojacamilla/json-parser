    'use strict';&#xD;&#xA;    var http = require('http');&#xD;&#xA;    var https = require('https');&#xD;&#xA;    var fs= require('fs');&#xD;&#xA;    var express = require('express');&#xD;&#xA;    var WebSocket = require('ws');&#xD;&#xA;    var server = {&#xD;&#xA;        cert: fs.readFileSync('../ssl/wss/new/certificate.pem'),&#xD;&#xA;        key: fs.readFileSync('../ssl/wss/new/private.pem'),&#xD;&#xA;        ca: fs.readFileSync('../ssl/wss/new/ca_bundle.pem'),&#xD;&#xA;        rejectUnauthorized: false&#xD;&#xA;    };&#xD;&#xA;    var web = express();&#xD;&#xA;    //Server initializations&#xD;&#xA;    var httpServer = http.createServer(web);&#xD;&#xA;    var httpsServer = https.createServer(server, web);&#xD;&#xA;    var wss = new WebSocket.Server({ server: httpsServer });&#xD;&#xA;    httpServer.listen(8080);&#xD;&#xA;    httpsServer.listen(58443, function listen(connection) {});