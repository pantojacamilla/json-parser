    var people = [{&#xD;&#xA;        name: "Contact 1",&#xD;&#xA;        address: "1, a street, a town, a city, AB12 3CD",&#xD;&#xA;        tel: "0123456789",&#xD;&#xA;        email: "anemail@me.com",&#xD;&#xA;        type: "family"&#xD;&#xA;    }, {&#xD;&#xA;        name: "Contact 2",&#xD;&#xA;        address: "1, a street, a town, a city, AB12 3CD",&#xD;&#xA;        tel: "0123456789",&#xD;&#xA;        email: "anemail@me.com",&#xD;&#xA;        type: "friend"&#xD;&#xA;    }, {&#xD;&#xA;        name: "Contact 3",&#xD;&#xA;        address: "1, a street, a town, a city, AB12 3CD",&#xD;&#xA;        tel: "0123456789",&#xD;&#xA;        email: "anemail@me.com",&#xD;&#xA;        type: "friend"&#xD;&#xA;    }];&#xD;&#xA;    function ContactsViewModel(people) {&#xD;&#xA;        var self = this;&#xD;&#xA;        self.contacts = ko.observableArray(people);&#xD;&#xA;    }&#xD;&#xA;    ko.applyBindings(new ContactsViewModel(people));