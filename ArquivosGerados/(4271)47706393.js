    var wrapper1 = document.getElementById('wrapper1');&#xD;&#xA;    var wrapper2 = document.getElementById('wrapper2');&#xD;&#xA;    var header1 = document.getElementById('header1');&#xD;&#xA;    var header2 = document.getElementById('header2');&#xD;&#xA;    var wrapper1CmputedHeight = wrapper1.scrollHeight;&#xD;&#xA;    var wrapper2CmputedHeight = wrapper2.scrollHeight;&#xD;&#xA;    &#xD;&#xA;    header1.addEventListener('click', function () {&#xD;&#xA;    	if(wrapper1.style.height === '60px') {&#xD;&#xA;      	wrapper1.style.height = wrapper1CmputedHeight + 'px';&#xD;&#xA;      } else {&#xD;&#xA;      	wrapper1.style.height = '60px';&#xD;&#xA;      }&#xD;&#xA;    })&#xD;&#xA;    &#xD;&#xA;    header2.addEventListener('click', function () {&#xD;&#xA;    	if(wrapper2.style.height === '60px') {&#xD;&#xA;      	wrapper2.style.height = wrapper2CmputedHeight + 'px';&#xD;&#xA;      } else {&#xD;&#xA;      	wrapper2.style.height = '60px';&#xD;&#xA;      }&#xD;&#xA;    })