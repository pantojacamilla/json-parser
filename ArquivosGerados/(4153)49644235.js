    $(document).ready(&#xD;&#xA;      function() {&#xD;&#xA;        setInterval(function() {&#xD;&#xA;             var randomnumber = Math.floor();&#xD;&#xA;             $('#output').text(&#xD;&#xA;                 gettxt()+ randomnumber);&#xD;&#xA;             }, 1000);&#xD;&#xA;        });&#xD;&#xA;                function gettxt(){&#xD;&#xA;                    &#xD;&#xA;                    fetch('https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD')&#xD;&#xA;                     .then((res)=>res.text())&#xD;&#xA;                     .then((data)=>{&#xD;&#xA;                         document.getElementById('output').innerHTML=data;&#xD;&#xA;                         &#xD;&#xA;                     })&#xD;&#xA;                    &#xD;&#xA;                }