    var a = ["hello", ""];&#xD;&#xA;    var randomValue = a[Math.floor(a.length * Math.random())];&#xD;&#xA;    function toresult(param){&#xD;&#xA;      let counter= 1;&#xD;&#xA;      if(param.length >=3 && counter <= 5){&#xD;&#xA;          console.log("Yes, inside!!")&#xD;&#xA;          counter +=1&#xD;&#xA;          //If I place the function here I would run into the infinite loop:  toresult(randomValue)&#xD;&#xA;      } else{&#xD;&#xA;          console.log("empty string PRINTED")&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    toresult(randomValue)