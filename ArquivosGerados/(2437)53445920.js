    function people(name) {&#xD;&#xA;        return {&#xD;&#xA;            name: ko.observable(name),&#xD;&#xA;            remove: function () {&#xD;&#xA;                viewModal.peoples.remove(this);&#xD;&#xA;            }&#xD;&#xA;        };&#xD;&#xA;    }&#xD;&#xA;    var viewModal = {&#xD;&#xA;        self: this,&#xD;&#xA;        firstName: ko.observable(),&#xD;&#xA;        peoples: ko.observableArray([&#xD;&#xA;            { name: 'Franklin' },&#xD;&#xA;            { name: 'Mario' },&#xD;&#xA;        ]),&#xD;&#xA;        addMore: function () {&#xD;&#xA;            this.peoples.push(new people(this.firstName()));&#xD;&#xA;        }&#xD;&#xA;    };&#xD;&#xA;    ko.applyBindings(viewModal);