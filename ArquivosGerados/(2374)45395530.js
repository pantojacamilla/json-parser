    // 1531 6389 68819 688889 6388819&#xD;&#xA;    // 68883889 688838831 1000000009&#xD;&#xA;    // 561 is a Carmichael number; a Fermat pseudoprime with the property a^n-1 = 1 mod n, for any "a" coprime to 561.&#xD;&#xA;    input = 5491763;&#xD;&#xA;    numTrials = 2000;&#xD;&#xA;    document.getElementById("input").innerHTML = input;&#xD;&#xA;    function TrialDiv(n) {&#xD;&#xA;      if (n === 1) {&#xD;&#xA;        return false;&#xD;&#xA;      } else if (n === 2) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        for (var x = 2; x < n; x++) {&#xD;&#xA;          if (n % x === 0) {&#xD;&#xA;            return false;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return true;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    if ((TrialDiv(input)) === true) {&#xD;&#xA;      a = "Prime"&#xD;&#xA;    } else if ((TrialDiv(input)) === false) {&#xD;&#xA;      a = "Composite"&#xD;&#xA;    }&#xD;&#xA;    //---------------------------------------------------------------------------&#xD;&#xA;    function gcd(x, y) {&#xD;&#xA;      while (y !== 0) {&#xD;&#xA;        var z = x % y;&#xD;&#xA;        x = y;&#xD;&#xA;        y = z;&#xD;&#xA;      }&#xD;&#xA;      return x;&#xD;&#xA;    }&#xD;&#xA;    function getRndInteger(max) {&#xD;&#xA;      return Math.floor(Math.random() * (max - 2)) + 2;&#xD;&#xA;    }&#xD;&#xA;    //--------------------------------------------------------------------------&#xD;&#xA;    function Fermat(n) {&#xD;&#xA;      for (var t = 0; t = numTrials; t++) {&#xD;&#xA;        m = getRndInteger(input);&#xD;&#xA;        if (gcd(m, n) !== 1) {&#xD;&#xA;          return false;&#xD;&#xA;        }&#xD;&#xA;        return (Math.pow(m, n - 1) % n !== 1);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    if ((Fermat(input)) === true) {&#xD;&#xA;      b = "Prime";&#xD;&#xA;    } else if ((Fermat(input)) === false) {&#xD;&#xA;      b = "Composite";&#xD;&#xA;    }&#xD;&#xA;    //---------------------------------------------------------------------------&#xD;&#xA;    function genD(n) { // Generates "d" such that "n-1 = 2^s * d"&#xD;&#xA;      p = n - 1;&#xD;&#xA;      d = p / 2;&#xD;&#xA;      while (d % 2 === 0) {&#xD;&#xA;        d = d / 2;&#xD;&#xA;      }&#xD;&#xA;      return d;&#xD;&#xA;    }&#xD;&#xA;    function genS() { // Generates "s" such that "n-1 = 2^s * d"&#xD;&#xA;      s = Math.log2(p / d);&#xD;&#xA;      return s;&#xD;&#xA;    }&#xD;&#xA;    //---------------------------------------------------------------------------&#xD;&#xA;    function MillerRabin(n) {&#xD;&#xA;      for (var t = 0; t < numTrials; t++) {&#xD;&#xA;        m = getRndInteger(input);&#xD;&#xA;        if (gcd(m, n) !== 1) {&#xD;&#xA;          return false;&#xD;&#xA;        } else {&#xD;&#xA;          for (var r = 0; r < genS(); r++) {&#xD;&#xA;            power = (Math.pow(2, r) * genD(input));&#xD;&#xA;            if (Math.pow(m, genD(input)) % n === 1 || Math.pow(m, power) % n === -1) {&#xD;&#xA;              return true;&#xD;&#xA;            } else {&#xD;&#xA;              return false;&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;        return true;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    if ((MillerRabin(input)) === true) {&#xD;&#xA;      c = "Prime";&#xD;&#xA;    } else if ((MillerRabin(input)) === false) {&#xD;&#xA;      c = "Composite";&#xD;&#xA;    }