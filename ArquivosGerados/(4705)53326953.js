    async function funcA(){&#xD;&#xA;       console.log("executing funcA");&#xD;&#xA;       await new Promise(function(){console.log("inside new promise")});&#xD;&#xA;    }&#xD;&#xA;    function funcB(){&#xD;&#xA;       console.log("executing funcB");&#xD;&#xA;    }&#xD;&#xA;    funcA();&#xD;&#xA;    funcB();&#xD;&#xA;    //Outputs the following&#xD;&#xA;    "executing funcA"&#xD;&#xA;    "inside new promise"&#xD;&#xA;    "executing funcB"