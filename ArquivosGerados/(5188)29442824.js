    var strObj = JSON.stringify({'name' : 'suman', 'age' : 29};);&#xD;&#xA;    var strObj2 = JSON.stringify({'name' : 'laxmi', 'age' : 29});&#xD;&#xA;    &#xD;&#xA;    var tpArr = new Uint8Array(2);&#xD;&#xA;    	tpArr[0]  = 42;&#xD;&#xA;    	tpArr[1]  = 52;&#xD;&#xA;    	&#xD;&#xA;    var	tpArr2 = new Uint8Array(2);&#xD;&#xA;    	tpArr[0]  = 32;&#xD;&#xA;    	tpArr[1]  = 52;&#xD;&#xA;    &#xD;&#xA;    var mainData = [{pt : 20, recObjs : strObj}, {pt : 30, recObjs : strObj2},&#xD;&#xA;    				{pt : 40, recObjs : tpArr}, {pt : 50, recObjs : tpArr2}];