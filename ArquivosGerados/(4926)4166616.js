    var test = {val: 1, func: function(){ return this.val; }};&#xD;&#xA;    var testA = Object.create(test);&#xD;&#xA;    testA.val = 2;&#xD;&#xA;    console.log(test.func()); // 1&#xD;&#xA;    console.log(testA.func()); // 2&#xD;&#xA;    console.log('other test');&#xD;&#xA;    var otherTest = function(){&#xD;&#xA;        this.val = 1;&#xD;&#xA;        this.func = function(){&#xD;&#xA;            return this.val;&#xD;&#xA;        };&#xD;&#xA;    };&#xD;&#xA;    var otherTestA = new otherTest();&#xD;&#xA;    var otherTestB = new otherTest();&#xD;&#xA;    otherTestB .val = 2;&#xD;&#xA;    console.log(otherTestA.val); // 1 &#xD;&#xA;    console.log(otherTestB.val); // 2&#xD;&#xA;    console.log(otherTestA.func()); // 1&#xD;&#xA;    console.log(otherTestB.func()); // 2