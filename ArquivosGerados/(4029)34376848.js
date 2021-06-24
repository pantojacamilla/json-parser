    app.get('/oauth/callback', function(req, res) {&#xD;&#xA;        var code = req.query.code;&#xD;&#xA;        console.log('code: ', code)&#xD;&#xA;        // Make /oauth/token endpoint POST request&#xD;&#xA;        request.post({&#xD;&#xA;          url: TOKEN_URI,&#xD;&#xA;          form: {&#xD;&#xA;            grant_type: 'authorization_code',&#xD;&#xA;            client_id: CLIENT_ID,&#xD;&#xA;            code: code,&#xD;&#xA;            client_secret: API_KEY&#xD;&#xA;          }&#xD;&#xA;        }, function(err, r, body) {&#xD;&#xA;          var accessToken = JSON.parse(body).access_token;&#xD;&#xA;          console.log('access: ', accessToken)&#xD;&#xA;          // Do something with your accessToken&#xD;&#xA;          // For demo's sake, output in response:&#xD;&#xA;          res.send({ 'Your Token': accessToken });&#xD;&#xA;        });&#xD;&#xA;      });