    Here is the code&#xD;&#xA;    -------&#xD;&#xA;    require('dotenv').config();&#xD;&#xA;    const restify = require('restify');&#xD;&#xA;    const builder = require('botbuilder');&#xD;&#xA;    var fs = require('fs');&#xD;&#xA;    var clients = require('restify-clients');&#xD;&#xA;    var azure = require('botbuilder-azure');&#xD;&#xA;    var now = require('currently');&#xD;&#xA;    // PORT&#xD;&#xA;    var listenPort = process.env.port || process.env.PORT || 3978;&#xD;&#xA;    // Setup Restify Server&#xD;&#xA;    var server = restify.createServer()&#xD;&#xA;    server.listen(listenPort, '::', () => {&#xD;&#xA;      console.log(`smooth like a baby's bottom`)&#xD;&#xA;    });&#xD;&#xA;    // Create chat connector for communicating with the Bot Framework Service&#xD;&#xA;    var connector = new builder.ChatConnector({&#xD;&#xA;        appId: process.env.MICROSOFT_APP_ID,&#xD;&#xA;        appPassword: process.env.MICROSOFT_APP_PASSWORD&#xD;&#xA;    });&#xD;&#xA;    // Receive messages from the user and respond&#xD;&#xA;    var bot = new builder.UniversalBot(connector, function (session) {&#xD;&#xA;        session.beginDialog('sell:Sell');&#xD;&#xA;    });&#xD;&#xA;    // Listen for messages from users&#xD;&#xA;    server.post('/api/messages', connector.listen());&#xD;&#xA;    bot.on('conversationUpdate', function (message) {&#xD;&#xA;      if (message.membersAdded) {&#xD;&#xA;        greetings = now.timeOfDay + 'welcome to Dream Realty, my name is Tony. How can I be of help this afternoon?'&#xD;&#xA;        message.membersAdded.forEach(function (identity) {&#xD;&#xA;          if (identity.id === message.address.bot.id) {&#xD;&#xA;            bot.send(new builder.Message()&#xD;&#xA;              .address(message.address)&#xD;&#xA;              .text(greetings)&#xD;&#xA;            )&#xD;&#xA;          }&#xD;&#xA;        })&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    bot.library(require('./dialogs/sell').createLibrary())