    var webpack = require('webpack'),&#xD;&#xA;        path = require('path'),&#xD;&#xA;        glob = require('glob');&#xD;&#xA;    var config = {&#xD;&#xA;        context: __dirname + 'App/js',&#xD;&#xA;        entry: {&#xD;&#xA;            app: 'app-loader.coffee'&#xD;&#xA;        },&#xD;&#xA;        output: {&#xD;&#xA;            path: __dirname + '/public/js',&#xD;&#xA;            filename: '[name].js',&#xD;&#xA;            chunkFilename: '[id].[name].js'&#xD;&#xA;        },&#xD;&#xA;        plugins: [&#xD;&#xA;            new webpack.ProvidePlugin({&#xD;&#xA;                _: 'underscore',&#xD;&#xA;                $: 'jquery'&#xD;&#xA;            })&#xD;&#xA;        ],&#xD;&#xA;        module: {&#xD;&#xA;            loaders: [&#xD;&#xA;                {test: /bootstrap/, loader: 'imports?jquery'},&#xD;&#xA;                {test: /jquery-bbq/, loader: 'imports?jquery.browser'},&#xD;&#xA;                {test: /jquery.cookie/, loader: 'exports?jquery.cookie!imports?jquery'},&#xD;&#xA;                {test: /jquery.colorpicker/, loader: 'imports?jquery'},&#xD;&#xA;                {test: /jquery.tablednd/, loader: 'imports?jquery'},&#xD;&#xA;                {test: /json2/, loader: 'exports?JSON!imports?jquery'},&#xD;&#xA;                {test: /swfobject/, loader: 'exports?swfobject'},&#xD;&#xA;                {test: /\.coffee$/, loader: 'coffee-loader'}&#xD;&#xA;            ]&#xD;&#xA;        },&#xD;&#xA;        resolve: {&#xD;&#xA;            extensions: ['', '.coffee', '.js'],&#xD;&#xA;            root: [__dirname + '/App/js'],&#xD;&#xA;            alias: {&#xD;&#xA;                'bootstrap': 'lib/bootstrap/dist/js/bootstrap',&#xD;&#xA;                'domReady': 'lib/domReady/domReady',&#xD;&#xA;                'jquery': 'lib/jquery/jquery.min',&#xD;&#xA;                'jquery-bbq': 'lib/jquery-bbq/jquery.ba-bbq.min',&#xD;&#xA;                'jquery.browser': 'lib/jquery.browser/dist/jquery.browser',&#xD;&#xA;                'jquery.chosen': 'lib/chosen/chosen.jquery.min',&#xD;&#xA;                'jquery.cookie': 'lib/jquery.cookie/jquery.cookie',&#xD;&#xA;                'jquery.colorpicker': 'lib/jQuery-ColorPicker/colorpicker.min',&#xD;&#xA;                'jquery.fileupload': 'lib/blueimp-file-upload/js/jquery.fileupload',&#xD;&#xA;                'jquery-mobile': 'lib/jquery-mobile-bower/js/jquery.mobile-1.3.2.min',&#xD;&#xA;                'jquery.scrollTo': 'lib/jquery.scrollTo/jquery.scrollTo.min',&#xD;&#xA;                'jquery.tagsinput': 'lib/jquery.tagsinput/src/jquery.tagsinput',&#xD;&#xA;                'jquery.tablednd': 'lib/TableDnD/js/jquery.tablednd',&#xD;&#xA;                'jquery.ui': 'lib/jquery-ui/jquery-ui',&#xD;&#xA;                'jquery.ui.widget': 'lib/blueimp-file-upload/js/vendor/jquery.ui.widget',&#xD;&#xA;                'jquery.validate': 'lib/jquery-validation/dist/jquery.validate',&#xD;&#xA;                'json2': 'lib/JSON-js/json2',&#xD;&#xA;                'swfobject': 'lib/swfobject/swfobject/swfobject',&#xD;&#xA;                'sugar': 'lib/sugar/release/sugar.min',&#xD;&#xA;                'underscore': 'lib/underscore/underscore-min'&#xD;&#xA;            }&#xD;&#xA;        },&#xD;&#xA;        resolveLoader: {&#xD;&#xA;            root: path.join(__dirname, 'node_modules')&#xD;&#xA;        }&#xD;&#xA;    };&#xD;&#xA;    module.exports = config;