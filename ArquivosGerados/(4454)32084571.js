    // Here is server.js&#xD;&#xA;    var express = require('express');&#xD;&#xA;    var nodemailer = require('nodemailer');&#xD;&#xA;    var app = express();&#xD;&#xA;    // Send index.html&#xD;&#xA;    app.get('/', function(request, response) {&#xD;&#xA;      response.sendfile('index.html');&#xD;&#xA;    });&#xD;&#xA;    // Where I should receive data from JS written in index.html&#xD;&#xA;    app.post('/send', function(req, res) {&#xD;&#xA;      var mailOptions　 = 　 {&#xD;&#xA;        to: req.query.to,&#xD;&#xA;        subject: req.query.subject,&#xD;&#xA;        text: req.query.text&#xD;&#xA;      }&#xD;&#xA;    });