    var myDob = prompt('Enter the year of birth')&#xD;&#xA;    function calcualteMyAge(myDob) {&#xD;&#xA;      var d = new Date();&#xD;&#xA;      var age = (d.getFullYear) - myDob;&#xD;&#xA;      function calculateRange(age) {&#xD;&#xA;        switch (age) {&#xD;&#xA;          case (age >= 1 && age <= 12):&#xD;&#xA;            var range = 'Kid';&#xD;&#xA;            return range;&#xD;&#xA;            break;&#xD;&#xA;          case (age >= 13 && age <= 19):&#xD;&#xA;            var range = 'Teenage';&#xD;&#xA;            return range;&#xD;&#xA;            break;&#xD;&#xA;          case (age >= 20 && age <= 40):&#xD;&#xA;            var range = 'Young Adult';&#xD;&#xA;            return range;&#xD;&#xA;            break;&#xD;&#xA;          case (age >= 41 && age <= 59):&#xD;&#xA;            var range = 'Adult';&#xD;&#xA;            return range;&#xD;&#xA;            break;&#xD;&#xA;          case (age >= 60 && age <= 100):&#xD;&#xA;            var range = 'Seniour Adult';&#xD;&#xA;            return range;&#xD;&#xA;            break;&#xD;&#xA;          default:&#xD;&#xA;            var range = '!!?';&#xD;&#xA;            return Range&#xD;&#xA;            break;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      /* Return an array            */&#xD;&#xA;      var ageAndRange = [age, Rang];&#xD;&#xA;      return ageAndRange&#xD;&#xA;    }