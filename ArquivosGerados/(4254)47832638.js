    &#xD;&#xA;    function myOuterFunction() {&#xD;&#xA;        myInnerFunction();&#xD;&#xA;        var myObject = {say: myInnerFunction.myProperty1,&#xD;&#xA;                      say2: myInnerFunction.myProperty2&#xD;&#xA;                    };&#xD;&#xA;        function myInnerFunction(){&#xD;&#xA;          return {myProperty1: "hello",&#xD;&#xA;                  myProperty2: "world"&#xD;&#xA;                 };&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;    console.log(myObject);&#xD;&#xA;    }&#xD;&#xA;    myOuterFunction();