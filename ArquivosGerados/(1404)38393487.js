    var LocalStrategy   = require('passport-local').Strategy;&#xD;&#xA;    var User = require('../app/models/user');&#xD;&#xA;    function saveTheUsr(){&#xD;&#xA;      var usr = new User();&#xD;&#xA;      usr.local.email    = email;&#xD;&#xA;      usr.local.password = password;&#xD;&#xA;      usr.save(function(err) {&#xD;&#xA;          if (err)&#xD;&#xA;            throw err;&#xD;&#xA;          return done(null, usr);&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    passport.use('local-signup', new LocalStrategy({&#xD;&#xA;            usernameField : 'username',&#xD;&#xA;            passwordField : 'password',&#xD;&#xA;            passReqToCallback : true&#xD;&#xA;        },&#xD;&#xA;        function(req, email, password, done) {&#xD;&#xA;            User.findOne({ 'local.email' :  email }, function(err, user) {&#xD;&#xA;                if (err)&#xD;&#xA;                    return done(err);&#xD;&#xA;                if (user) {&#xD;&#xA;                    return done(null, false);&#xD;&#xA;                } else {&#xD;&#xA;                    saveTheUsr();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        }));