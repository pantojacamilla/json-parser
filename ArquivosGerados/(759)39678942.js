    (function() {&#xD;&#xA;      var Emp = function(_name, _salary) {&#xD;&#xA;        var name = _name;&#xD;&#xA;        var salary = _salary&#xD;&#xA;        return {&#xD;&#xA;          name: name,&#xD;&#xA;          salary: salary&#xD;&#xA;        };&#xD;&#xA;      }&#xD;&#xA;      Emp.prototype.work = function(){&#xD;&#xA;        console.log('this is work',this);	&#xD;&#xA;      }&#xD;&#xA;      var Car = function(_name, _model) {&#xD;&#xA;        this.name = _name;&#xD;&#xA;        this.model = _model;&#xD;&#xA;      }&#xD;&#xA;      Car.prototype.drive = function() {&#xD;&#xA;        console.log('this is drive ', this);&#xD;&#xA;      }&#xD;&#xA;      var car = new Car('bmw', '2015');&#xD;&#xA;      car.drive(); // Works&#xD;&#xA;      var emp = new Emp('peter', '1234');&#xD;&#xA;      emp.work(); // TypeError&#xD;&#xA;    })();