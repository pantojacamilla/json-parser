    angular.module('myApp', [])&#xD;&#xA;        .controller('Ctrl1', function(MyService) {&#xD;&#xA;            var $ctrl = this;&#xD;&#xA;            $ctrl.getData = MyService.getData;&#xD;&#xA;        })&#xD;&#xA;        .service('MyService', function () {&#xD;&#xA;            var data = [&#xD;&#xA;                {&#xD;&#xA;                	name: 'Adam',&#xD;&#xA;                    age: 12&#xD;&#xA;                }, {&#xD;&#xA;                	name: 'Bob',&#xD;&#xA;                    age: 14&#xD;&#xA;                }, {&#xD;&#xA;                	name: 'Caesar',&#xD;&#xA;                    age: 15&#xD;&#xA;                }];&#xD;&#xA;                &#xD;&#xA;            this.getData = function () {&#xD;&#xA;                return angular.copy(data);&#xD;&#xA;            };&#xD;&#xA;        });