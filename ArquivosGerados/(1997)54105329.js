    function foo() {&#xD;&#xA;      console.log("--- entering foo ---")&#xD;&#xA;      return new Promise(() => {&#xD;&#xA;        setTimeout(() => {&#xD;&#xA;          console.log("--- resolved ---")&#xD;&#xA;        }, 2000)&#xD;&#xA;      })&#xD;&#xA;    }&#xD;&#xA;    async function bar() {&#xD;&#xA;      await foo()&#xD;&#xA;      foo() // not called&#xD;&#xA;    }&#xD;&#xA;    bar()