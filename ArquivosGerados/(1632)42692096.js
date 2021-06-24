    const Promise = require('bluebird');       &#xD;&#xA;    router.post('/register', function(req, res, next) {&#xD;&#xA;      console.log('registering... ', req.body); &#xD;&#xA;      var ret = {};&#xD;&#xA;      &#xD;&#xA;      verifyRecaptcha(req.body.recaptcha)&#xD;&#xA;      .then(()=>{&#xD;&#xA;        // exceptions thrown here do NOT get caught in catch()&#xD;&#xA;        return mail.validate_email(req.body.email);&#xD;&#xA;        &#xD;&#xA;      }).then(() => {&#xD;&#xA;        return db.create_customer(req.body);&#xD;&#xA;        &#xD;&#xA;      }).then((customerId) => {&#xD;&#xA;        ret.status = true;&#xD;&#xA;        ret.customerId = customerId;&#xD;&#xA;        res.send(ret);&#xD;&#xA;      }).error((e)=> { &#xD;&#xA;        // I expected my validate_email exception &#xD;&#xA;        // to be caught here, but it isn't&#xD;&#xA;        console.error('/register got an error (108)', e);&#xD;&#xA;        res.status(500).send({&#xD;&#xA;          error: 'unable to register'&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;      }).catch(function(e) {&#xD;&#xA;        console.error('/register got an error (114)', e);&#xD;&#xA;        res.status(500).send({&#xD;&#xA;          error: 'unknown internal error'&#xD;&#xA;        });&#xD;&#xA;      });                                                        &#xD;&#xA;    });                                                           