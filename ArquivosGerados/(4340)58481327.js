    var n = 100;&#xD;&#xA;    var prime1 = new Array();&#xD;&#xA;    //producing prime number upto 97&#xD;&#xA;    function primeNumber() {&#xD;&#xA;      for (j = 1; j <= n; j++) {&#xD;&#xA;        if (countRemainder(j) == 2) {&#xD;&#xA;          prime1.push(j);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    primeNumber();&#xD;&#xA;    console.log(prime1);&#xD;&#xA;    function countRemainder(n) {&#xD;&#xA;      var count = 0;&#xD;&#xA;      for (j = 1; j <= n; j++) {&#xD;&#xA;        if (n % j == 0) {&#xD;&#xA;          count++;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return count;&#xD;&#xA;    }