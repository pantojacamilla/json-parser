    require.config({&#xD;&#xA;      paths: {&#xD;&#xA;        jquery: 'libs/jquery',&#xD;&#xA;        underscore: 'libs/underscore',&#xD;&#xA;        backbone: 'libs/backbone'&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    require(['underscore', 'backbone', 'app'],&#xD;&#xA;    function(_, Backbone, app) {&#xD;&#xA;        console.log(app);&#xD;&#xA;        app.start();&#xD;&#xA;    });