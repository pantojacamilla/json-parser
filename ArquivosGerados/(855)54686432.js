    let isMatchingBrackets = function(str) {&#xD;&#xA;      let stack = [];&#xD;&#xA;      let count = 0;&#xD;&#xA;      for (let i in str.length) {&#xD;&#xA;        if (str[i] === "(") {&#xD;&#xA;          stack.push(str[i])&#xD;&#xA;        } else if (str[i] === ")") {&#xD;&#xA;          let tem = map.stack(x => x)&#xD;&#xA;          if (tem !== ")") {&#xD;&#xA;            count += 1;&#xD;&#xA;          } else {&#xD;&#xA;            stack.pop();&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return stack.length + count&#xD;&#xA;    }&#xD;&#xA;    console.log(isMatchingBrackets("(()"))&#xD;&#xA;    console.log(isMatchingBrackets("(())"))&#xD;&#xA;    console.log(isMatchingBrackets("())("))