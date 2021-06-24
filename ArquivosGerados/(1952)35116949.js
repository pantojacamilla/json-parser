    module.exports = {&#xD;&#xA;      getSitemap: function(callback) {&#xD;&#xA;        "use strict";&#xD;&#xA;        var Page = Parse.Object.extend('Page'),&#xD;&#xA;          pageQuery = new Parse.Query(Page),&#xD;&#xA;          Article = Parse.Object.extend('Article'),&#xD;&#xA;          articleQuery = new Parse.Query(Article),&#xD;&#xA;          Profile = Parse.Object.extend('Profile'),&#xD;&#xA;          profileQuery = new Parse.Query(Profile),&#xD;&#xA;          Category = Parse.Object.extend('Category'),&#xD;&#xA;          categoryQuery = new Parse.Query(Category),&#xD;&#xA;          entities = [],&#xD;&#xA;          entity = {},&#xD;&#xA;          i,&#xD;&#xA;          sitemap;&#xD;&#xA;        entity.url = '/';&#xD;&#xA;        entity.changefreq = 'weekly';&#xD;&#xA;        entity.priority = 1.0;&#xD;&#xA;        entities.push(entity);&#xD;&#xA;        entity = {};&#xD;&#xA;        articleQuery.equalTo('published', true);&#xD;&#xA;        articleQuery.select("permalink");&#xD;&#xA;        articleQuery.find().then(function(results) {&#xD;&#xA;          for (i = 0; i < results.length; i += 1) {&#xD;&#xA;            entity.url = '/article/' + results[i].get('permalink');&#xD;&#xA;            entity.changefreq = 'monthly';&#xD;&#xA;            entity.priority = 0.9;&#xD;&#xA;            entities.push(entity);&#xD;&#xA;            entity = {};&#xD;&#xA;          }&#xD;&#xA;        }, function(error) {&#xD;&#xA;          // do nothing&#xD;&#xA;        });&#xD;&#xA;        pageQuery.select("pagePermaLink");&#xD;&#xA;        pageQuery.find().then(function(results) {&#xD;&#xA;          for (i = 0; i < results.length; i += 1) {&#xD;&#xA;            entity.url = '/page/' + results[i].get('pagePermaLink');&#xD;&#xA;            entity.changefreq = 'monthly';&#xD;&#xA;            entity.priority = 0.7;&#xD;&#xA;            entities.push(entity);&#xD;&#xA;            entity = {};&#xD;&#xA;          }&#xD;&#xA;        }, function(error) {&#xD;&#xA;          // do nothing&#xD;&#xA;        });&#xD;&#xA;        profileQuery.select("objectId");&#xD;&#xA;        profileQuery.find().then(function(results) {&#xD;&#xA;          for (i = 0; i < results.length; i += 1) {&#xD;&#xA;            entity.url = '/author/' + results[i].id;&#xD;&#xA;            entity.changefreq = 'monthly';&#xD;&#xA;            entity.priority = 0.6;&#xD;&#xA;            entities.push(entity);&#xD;&#xA;            entity = {};&#xD;&#xA;          }&#xD;&#xA;        }, function(error) {&#xD;&#xA;          // do nothing&#xD;&#xA;        });&#xD;&#xA;        categoryQuery.select("categoryPermaLink");&#xD;&#xA;        categoryQuery.find().then(function(results) {&#xD;&#xA;          for (i = 0; i < results.length; i += 1) {&#xD;&#xA;            entity.url = '/category/' + results[i].get('categoryPermaLink');&#xD;&#xA;            entity.changefreq = 'weekly';&#xD;&#xA;            entity.priority = 0.5;&#xD;&#xA;            entities.push(entity);&#xD;&#xA;            entity = {};&#xD;&#xA;          }&#xD;&#xA;        }, function(error) {&#xD;&#xA;          // do nothing&#xD;&#xA;        });&#xD;&#xA;        sitemap = sm.createSitemap({&#xD;&#xA;          hostname: 'http://brianemilius.com',&#xD;&#xA;          cacheTime: 300000,&#xD;&#xA;          urls: entities&#xD;&#xA;        });&#xD;&#xA;        sitemap.toXML(function(err, xml) {&#xD;&#xA;          if (err) {&#xD;&#xA;            callback({&#xD;&#xA;              error: err&#xD;&#xA;            });&#xD;&#xA;          }&#xD;&#xA;          callback(xml);&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    };