    // function settings&#xD;&#xA;    function getRandom(lower, upper) {&#xD;&#xA;      lower = parseInt(lower);&#xD;&#xA;      upper = parseInt(upper);&#xD;&#xA;      return Math.floor(Math.random()*(upper-lower+1))+lower;&#xD;&#xA;    }&#xD;&#xA;    // ask users to give a rang of numbers&#xD;&#xA;    var lowerNum = prompt("lower number?");&#xD;&#xA;    var upperNum = prompt("upper number?");&#xD;&#xA;    document.write(getRandom(lowerNum, upperNum));