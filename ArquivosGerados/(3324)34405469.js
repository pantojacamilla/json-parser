        var express = require('express');&#xD;&#xA;    var path = require('path');&#xD;&#xA;    var debug = require('debug')('workspace:server');&#xD;&#xA;    var http = require('http');&#xD;&#xA;    var favicon = require('serve-favicon');&#xD;&#xA;    var logger = require('morgan');&#xD;&#xA;    var cookieParser = require('cookie-parser');&#xD;&#xA;    var bodyParser = require('body-parser');&#xD;&#xA;    var jquery = require('jquery');&#xD;&#xA;    var session = require('express-session')({&#xD;&#xA;        secret: "secret",&#xD;&#xA;        key: 'secret.sid',&#xD;&#xA;        resave: true,&#xD;&#xA;        saveUninitialized: true,&#xD;&#xA;        cookie: {&#xD;&#xA;            maxAge: 3600000&#xD;&#xA;        }&#xD;&#xA;    });&#xD;&#xA;    var mysql      = require('mysql');&#xD;&#xA;    var connection = mysql.createConnection({&#xD;&#xA;      host     : 'localhost',&#xD;&#xA;      user     : 'root',&#xD;&#xA;      password : 'password',&#xD;&#xA;      database : 'database'&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    connection.connect();&#xD;&#xA;    &#xD;&#xA;    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {&#xD;&#xA;      if (err) throw err;&#xD;&#xA;    &#xD;&#xA;      console.log('The solution is: ', rows[0].solution);&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    connection.end();&#xD;&#xA;    &#xD;&#xA;    var openid = require('openid');&#xD;&#xA;    &#xD;&#xA;    var app = express();&#xD;&#xA;    &#xD;&#xA;    var port = normalizePort(process.env.PORT || '3000');&#xD;&#xA;    app.set('port', port);&#xD;&#xA;    &#xD;&#xA;    var server = http.Server(app);&#xD;&#xA;    &#xD;&#xA;    var socket = require('socket.io')(server);&#xD;&#xA;    socket.on('connect', function(){});&#xD;&#xA;    socket.on('event', function(data){});&#xD;&#xA;    socket.on('disconnect', function(){});&#xD;&#xA;    &#xD;&#xA;    server.listen(port);&#xD;&#xA;    server.on('error', onError);&#xD;&#xA;    server.on('listening', onListening);&#xD;&#xA;    &#xD;&#xA;    function normalizePort(val) {&#xD;&#xA;        var port = parseInt(val, 10);&#xD;&#xA;    &#xD;&#xA;        if (isNaN(port)) {&#xD;&#xA;            // named pipe&#xD;&#xA;            return val;&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;        if (port >= 0) {&#xD;&#xA;            // port number&#xD;&#xA;            return port;&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;        return false;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function onError(error) {&#xD;&#xA;        if (error.syscall !== 'listen') {&#xD;&#xA;            throw error;&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;        var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;&#xD;&#xA;    &#xD;&#xA;        // handle specific listen errors with friendly messages&#xD;&#xA;        switch (error.code) {&#xD;&#xA;            case 'EACCES':&#xD;&#xA;            console.error(bind + ' requires elevated privileges');&#xD;&#xA;            process.exit(1);&#xD;&#xA;            break;&#xD;&#xA;            case 'EADDRINUSE':&#xD;&#xA;            console.error(bind + ' is already in use');&#xD;&#xA;            process.exit(1);&#xD;&#xA;            break;&#xD;&#xA;            default:&#xD;&#xA;            throw error;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function onListening() {&#xD;&#xA;        var addr = server.address();&#xD;&#xA;        var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;&#xD;&#xA;        console.log('Listening on ' + bind);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    // view engine setup&#xD;&#xA;    app.set('views', path.join(__dirname, 'views'));&#xD;&#xA;    app.set('view engine', 'jade');&#xD;&#xA;    &#xD;&#xA;    // uncomment after placing your favicon in /public&#xD;&#xA;    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));&#xD;&#xA;    app.use(logger('dev'));&#xD;&#xA;    app.use(bodyParser.json());&#xD;&#xA;    app.use(bodyParser.urlencoded({&#xD;&#xA;        extended: false&#xD;&#xA;    }));&#xD;&#xA;    &#xD;&#xA;    app.use(cookieParser());&#xD;&#xA;    app.use(express.static(path.join(__dirname, 'public')));&#xD;&#xA;    &#xD;&#xA;    app.use(session);&#xD;&#xA;    &#xD;&#xA;    function createRelyingParty(req) {&#xD;&#xA;        var baseUrl = req.protocol + "://" + req.get("host");&#xD;&#xA;        return new openid.RelyingParty(baseUrl + "/verify", baseUrl, true, false, []);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    // for every request lets make the user session available to the templates&#xD;&#xA;    app.use(function(req, res, next) {&#xD;&#xA;        res.locals.user = req.session.user;&#xD;&#xA;        next();&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    app.get("/", function(req, res) {&#xD;&#xA;        res.render('index', {&#xD;&#xA;            title: 'Roulette',&#xD;&#xA;            session: (typeof req.session.user !== 'undefined') ? req.session.user : ''&#xD;&#xA;        });&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    socket.on('connection', function(socket){&#xD;&#xA;      console.log('a user connected');&#xD;&#xA;      socket.on('disconnect', function(){&#xD;&#xA;        console.log('user disconnected');&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    socket.on('connection', function(socket){&#xD;&#xA;      socket.on('chat message', function(msg){&#xD;&#xA;        socket.emit('chat message', msg);&#xD;&#xA;        console.log('message: ' + msg);&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    var r = require('./SpinGen');&#xD;&#xA;    &#xD;&#xA;    // catch 404 and forward to error handler&#xD;&#xA;    app.use(function(req, res, next) {&#xD;&#xA;        var err = new Error('Not Found');&#xD;&#xA;        err.status = 404;&#xD;&#xA;        next(err);&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    // error handlers&#xD;&#xA;    &#xD;&#xA;    // development error handler&#xD;&#xA;    // will print stacktrace&#xD;&#xA;    if (app.get('env') === 'development') {&#xD;&#xA;        app.use(function(err, req, res, next) {&#xD;&#xA;            res.status(err.status || 500);&#xD;&#xA;            res.render('error', {&#xD;&#xA;                message: err.message,&#xD;&#xA;                error: err&#xD;&#xA;            });&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    // production error handler&#xD;&#xA;    // no stacktraces leaked to user&#xD;&#xA;    app.use(function(err, req, res, next) {&#xD;&#xA;        res.status(err.status || 500);&#xD;&#xA;        res.render('error', {&#xD;&#xA;            message: err.message,&#xD;&#xA;            error: {}&#xD;&#xA;        });&#xD;&#xA;    });