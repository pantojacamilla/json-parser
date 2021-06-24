    import Ember from 'ember';&#xD;&#xA;    var inject = Ember.inject;&#xD;&#xA;    // maybe rewrite nav link one of these options?&#xD;&#xA;    // http://discuss.emberjs.com/t/best-practice-for-a-dynamic-menu-bar/9094&#xD;&#xA;    export default Ember.Component.extend({&#xD;&#xA;        currentUser: inject.service('current-user'),&#xD;&#xA;        actions: {&#xD;&#xA;            logout: function () {&#xD;&#xA;                console.log('header logout');&#xD;&#xA;                this.get('currentUser').logout();&#xD;&#xA;            }&#xD;&#xA;        },&#xD;&#xA;        didInsertElement: function() {&#xD;&#xA;            // get current router path to implement if statements on header navigation&#xD;&#xA;            if(path==='search-results'){&#xD;&#xA;              jQuery('.showSearchButton').show();&#xD;&#xA;            } else {&#xD;&#xA;              jQuery('.showSearchButton').hide();  &#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    });