    function Test() {}&#xD;&#xA;    let tmp = function() {&#xD;&#xA;        console.log(this)&#xD;&#xA;    }&#xD;&#xA;    tmp.call(Test)&#xD;&#xA;    setTimeout(() => {&#xD;&#xA;        (function() {&#xD;&#xA;            console.log(this)&#xD;&#xA;        }).call(Test)&#xD;&#xA;    }, 100);