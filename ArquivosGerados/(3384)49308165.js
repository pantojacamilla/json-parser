    mongoose.connect(keys.mongoURI);&#xD;&#xA;    app.use(bodyParser.json());&#xD;&#xA;    app.use(&#xD;&#xA;      cookieSession({&#xD;&#xA;        maxAge: 15 * 24 * 60 * 60 * 1000,&#xD;&#xA;        keys: [keys.cookieKey]&#xD;&#xA;      })&#xD;&#xA;    );&#xD;&#xA;    app.use(passport.initialize());&#xD;&#xA;    app.use(passport.session());&#xD;&#xA;    passportService();