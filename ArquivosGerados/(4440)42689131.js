    app.use('static', express.static(__dirname + '/public'));&#xD;&#xA;    app.use('dist', express.static(__dirname + '/dist'));&#xD;&#xA;    app.get('*', (req, res) => {&#xD;&#xA;          match({&#xD;&#xA;              routes,&#xD;&#xA;              location: req.url&#xD;&#xA;            }, (error, redirectLocation, renderProps) => {&#xD;&#xA;              if (error) {&#xD;&#xA;                res.status(500).send(error.message)&#xD;&#xA;              } else if (redirectLocation) {&#xD;&#xA;                res.redirect(302, redirectLocation.pathname + redirectLocation.search)&#xD;&#xA;              } else if (renderProps) {&#xD;&#xA;                var html = renderToString( < RouterContext { ...renderProps&#xD;&#xA;                  }&#xD;&#xA;                  />);&#xD;&#xA;                  res.status(200).send(template({&#xD;&#xA;                    body: html&#xD;&#xA;                  }));&#xD;&#xA;                }&#xD;&#xA;                else {&#xD;&#xA;                  res.status(400).send('Not found.')&#xD;&#xA;                }&#xD;&#xA;              });&#xD;&#xA;          });