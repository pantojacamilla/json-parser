    function findSecondLargeNumber(arr) {&#xD;&#xA;      var firstLargeNum = 0,&#xD;&#xA;        secondLargeNum = 0;&#xD;&#xA;      for (var i = 0; i < arr.length; i++) {&#xD;&#xA;        if (firstLargeNum < arr[i]) {&#xD;&#xA;          secondLargeNum = firstLargeNum;&#xD;&#xA;          firstLargeNum = arr[i];&#xD;&#xA;        } else if (secondLargeNum < arr[i]) {&#xD;&#xA;          secondLargeNum = arr[i];&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return secondLargeNum;&#xD;&#xA;    }&#xD;&#xA;    console.log(findSecondLargeNumber([1, 4, 5, 6])) //returns 5&#xD;&#xA;    console.log(findSecondLargeNumber([-1, -2])) //returns 0 not -2