    (async () => {&#xD;&#xA;         const p = async () => {&#xD;&#xA;              return new Proxy({}, {&#xD;&#xA;                   get: (target, property) => {&#xD;&#xA;                        console.log(property);&#xD;&#xA;                   }&#xD;&#xA;              })&#xD;&#xA;         };&#xD;&#xA;         const r = await p();// await calls .then on the result of p()&#xD;&#xA;    })();