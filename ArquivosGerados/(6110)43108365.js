    // JavaScript&#xD;&#xA;    'use strict';&#xD;&#xA;    var category = ["Fruits", "Vegetables"];&#xD;&#xA;    var fruits = ["Apple", "Banana", "Orange"];&#xD;&#xA;    var fruitsLen = fruits.length; &#xD;&#xA;    var vegetables = ["Cauliflower", "Brinjal", "Potato"];&#xD;&#xA;    var vegLen = vegetables.length; &#xD;&#xA;    var i;&#xD;&#xA;    var listToDisplay = ""; &#xD;&#xA;    //function to display contents accroding to the category selected&#xD;&#xA;    function displayContents(v){&#xD;&#xA;      switch(v){&#xD;&#xA;        case "fruits":&#xD;&#xA;          for(i=0; i<fruitsLen; i++){&#xD;&#xA;            listToDisplay += "<br>" + fruits[i];&#xD;&#xA;          }&#xD;&#xA;          document.getElementById('displayDiv').innerHTML = listToDisplay;&#xD;&#xA;          break;&#xD;&#xA;        case "vegetables":&#xD;&#xA;          for(i=0; i<vegLen; i++){&#xD;&#xA;            listToDisplay += "<br>" + vegetables[i];&#xD;&#xA;          }&#xD;&#xA;          document.getElementById('displayDiv').innerHTML = listToDisplay;&#xD;&#xA;          break;&#xD;&#xA;        default:&#xD;&#xA;          document.getElementById('displayDiv').innerHTML = "Invalid Selection.";&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    //function to go to particular page&#xD;&#xA;    function goToPage(){&#xD;&#xA;    	&#xD;&#xA;    }