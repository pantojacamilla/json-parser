    var myApp = angular.module('myApp',[]);&#xD;&#xA;    myApp.controller('MyCtrl', [ '$scope', function($scope){&#xD;&#xA;      var data = {&#xD;&#xA;        "dropdowns": {&#xD;&#xA;          "RI": "Rhode Island",&#xD;&#xA;          "HI": "Hawaii",&#xD;&#xA;          "NY": "New York",&#xD;&#xA;          "GA": "Georgia",&#xD;&#xA;          "NV": "Nevada",&#xD;&#xA;          "TN": "Tennessee",&#xD;&#xA;          "CA": "California",&#xD;&#xA;          "OK": "Oklahoma",&#xD;&#xA;          "ME": "Maine",&#xD;&#xA;          "VA": "Virginia",&#xD;&#xA;          "MI": "Michigan",&#xD;&#xA;          "OH": "Ohio",&#xD;&#xA;          "DE": "Delaware",&#xD;&#xA;          "ID": "Idaho",&#xD;&#xA;          "FL": "Florida",&#xD;&#xA;          "IA": "Iowa",&#xD;&#xA;          "MD": "Maryland",&#xD;&#xA;          "MA": "Massachusetts",&#xD;&#xA;          "SC": "South Carolina",&#xD;&#xA;          "AR": "Arkansas",&#xD;&#xA;          "UT": "Utah",&#xD;&#xA;          "IL": "Illinois",&#xD;&#xA;          "IN": "Indiana",&#xD;&#xA;          "CT": "Connecticut",&#xD;&#xA;          "DC": "District of Columbia",&#xD;&#xA;          "MN": "Minnesota",&#xD;&#xA;          "KY": "Kentucky",&#xD;&#xA;          "WI": "Wisconsin",&#xD;&#xA;          "AZ": "Arizona",&#xD;&#xA;          "MO": "Missouri",&#xD;&#xA;          "KS": "Kansas",&#xD;&#xA;          "OR": "Oregon",&#xD;&#xA;          "MS": "Mississippi",&#xD;&#xA;          "LA": "Louisiana",&#xD;&#xA;          "NH": "New Hampshire",&#xD;&#xA;          "WA": "Washington",&#xD;&#xA;          "NJ": "New Jersey",&#xD;&#xA;          "NM": "New Mexico",&#xD;&#xA;          "AK": "Alaska",&#xD;&#xA;          "TX": "Texas",&#xD;&#xA;          "AL": "Alabama",&#xD;&#xA;          "CO": "Colorado",&#xD;&#xA;          "PA": "Pennsylvania",&#xD;&#xA;          "NC": "North Carolina",&#xD;&#xA;          "NE": "Nebraska"&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;      $scope.retailStates = data.dropdowns;&#xD;&#xA;    }]);