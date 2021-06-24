    var app = app || {};&#xD;&#xA;    var Item = Backbone.Model.extend({&#xD;&#xA;        defaults: {&#xD;&#xA;            order: '',&#xD;&#xA;            title: '',&#xD;&#xA;            price: 0.01,&#xD;&#xA;            inCart: false&#xD;&#xA;                }&#xD;&#xA;    });&#xD;&#xA;    var item1 = new Item({order: 1, title: "shoes", price: 30.00});&#xD;&#xA;    var item2 = new Item({order: 2, title: "socks", price: 5.00});&#xD;&#xA;    var item3 = new Item({order: 3, title: "shirt", price: 20.00});&#xD;&#xA;    var ItemsCollection = Backbone.Collection.extend({model: Item});&#xD;&#xA;    var items = new ItemsCollection([item1, item2, item3]);&#xD;&#xA;    app.ItemView = Backbone.View.extend({&#xD;&#xA;        template: _.template($("#item-template").html()),&#xD;&#xA;        initialize: function() {&#xD;&#xA;            this.render()&#xD;&#xA;        },&#xD;&#xA;        render: function() {&#xD;&#xA;            $("#display").append(this.template(this.model.attributes));&#xD;&#xA;        },&#xD;&#xA;        el: "#container",&#xD;&#xA;        events: {&#xD;&#xA;            'click .title': 'moveToCart'&#xD;&#xA;        },&#xD;&#xA;        moveToCart: function(e) {&#xD;&#xA;            e.stopImmediatePropagation();&#xD;&#xA;            var title = this.model.get("title");&#xD;&#xA;            var price = this.model.get("price");&#xD;&#xA;            $("table").append("<tr><td>" + title + "</td><td>" + price + "</td></tr>");&#xD;&#xA;        }&#xD;&#xA;    });&#xD;&#xA;    var itemView1 = new app.ItemView({model: item1});&#xD;&#xA;    var itemView2 = new app.ItemView({model: item2});&#xD;&#xA;    var itemView3 = new app.ItemView({model: item3});