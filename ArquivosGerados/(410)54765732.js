    myFunction(&#xD;&#xA;        ['IntersectionObserver', 'IntersectionObserverEntry', 'Object.assign']&#xD;&#xA;        ,'https://cdn.jsdelivr.net/npm/quicklink@1.0.0/dist/quicklink.umd.js' &#xD;&#xA;        ,'quicklink()' &#xD;&#xA;    )&#xD;&#xA;    function myFunction(tocheck, scriptToPolyfill, functionToRunonLoad) {&#xD;&#xA;        if(typeof Promise !== "undefined"){&#xD;&#xA;            var checkPromises = [];&#xD;&#xA;            if(Array.isArray(tocheck)) {&#xD;&#xA;                tocheck.forEach(&#xD;&#xA;                    function(tocheck){&#xD;&#xA;                        checkPromises.push(checking(tocheck))&#xD;&#xA;                    }&#xD;&#xA;                )&#xD;&#xA;            }&#xD;&#xA;        } &#xD;&#xA;        //other stuff happens here if Promises aren't supported, but the above is the only bit that matters!&#xD;&#xA;    }&#xD;&#xA;    function checking(check){&#xD;&#xA;        var splitChars = '.';&#xD;&#xA;        if ((check in window) != true || (check in this) != true) {&#xD;&#xA;            if (check.indexOf(splitChars) >= 1) { //error thrown here!&#xD;&#xA;                var split = check.split('.');&#xD;&#xA;                var firstWord = window[split[0]];&#xD;&#xA;                var lastWord = new Object(split[split.length - 1]);&#xD;&#xA;                if (lastWord in firstWord != true && lastWord in firstWord.prototype != true) {&#xD;&#xA;                    return check;&#xD;&#xA;                }&#xD;&#xA;            } else {&#xD;&#xA;                return check;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }