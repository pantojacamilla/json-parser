    function sort(arr) {&#xD;&#xA;    	if (arr.length === 2) {&#xD;&#xA;      	const v1 = arr[0];&#xD;&#xA;        const v2 = arr[1];&#xD;&#xA;        const isGreater = (&#xD;&#xA;        	(isString(v1) && isString(v2) && v1.toString().toLocaleCompare(v2) > 0) ||&#xD;&#xA;          (isNumber(v1) && isNumber(v2) && v1 > v2)&#xD;&#xA;        );&#xD;&#xA;      	return isGreater ? [ v2, v1 ] : [ v1, v2 ];&#xD;&#xA;      } else {&#xD;&#xA;      	const last = arr.pop();&#xD;&#xA;        const ret = sort(arr);&#xD;&#xA;        const newLast = ret.peekLast();&#xD;&#xA;        &#xD;&#xA;        if (newLast < last) {&#xD;&#xA;          return [ ...ret, last ];&#xD;&#xA;        } else {&#xD;&#xA;        	return sort( [ last, ...ret ] );&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function isString(value) { return typeof value === 'string'; }&#xD;&#xA;    function isNumber(value) { return Number.isFinite(value); }&#xD;&#xA;    Array.prototype.peekLast = function () { return this.slice().pop(); }&#xD;&#xA;    //console.log(sort([1,2,3,4,5]))&#xD;&#xA;    console.log(sort([5,4,3,2,1]))