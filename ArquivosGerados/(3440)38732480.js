    var length = 10000000; //  ten millions;&#xD;&#xA;    var arr = [];&#xD;&#xA;    for (let i = length; i > 0; i--) {&#xD;&#xA;      // random array&#xD;&#xA;      arr.push(parseInt(Math.random() * 100000000));&#xD;&#xA;    }&#xD;&#xA;    console.time('measure');&#xD;&#xA;    arr.sort(function compareNumbers(a, b) {&#xD;&#xA;      return a - b;&#xD;&#xA;    });&#xD;&#xA;    console.timeEnd('measure');&#xD;&#xA;    console.log(arr[0], arr[1]);