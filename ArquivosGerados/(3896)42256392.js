    var upload = multer({ dest: 'uploads/' });&#xD;&#xA;      // image upload route&#xD;&#xA;    app.post('/photos/upload',upload.single('avatar'),       function(req, res) {&#xD;&#xA;          console.log(req.user.img);&#xD;&#xA;          console.log(req.file);&#xD;&#xA;          var user = req.user;&#xD;&#xA;          user.img = req.file;&#xD;&#xA;          user.save(function(err) {&#xD;&#xA;              res.redirect('/profile');&#xD;&#xA;          });