    var rangeValue;&#xD;&#xA;    localStorage.getItem('chanceoflive');&#xD;&#xA;    var chanceoflive = parseInt(localStorage.getItem("chanceoflive"));&#xD;&#xA;    var inputElement = document.querySelector('.range-input');&#xD;&#xA;    var submitElement = document.querySelector('.submit');&#xD;&#xA;    var x = 2;&#xD;&#xA;    submitElement.addEventListener('click', function() {&#xD;&#xA;      document.getElementById('paragraph').innerHTML = chanceoflive;&#xD;&#xA;      localStorage.setItem("chanceoflive", chanceoflive);&#xD;&#xA;    });&#xD;&#xA;    inputElement.addEventListener('change', function() {&#xD;&#xA;      var rangeValue = parseInt(this.value);&#xD;&#xA;      chanceoflive = chanceoflive || 0;&#xD;&#xA;        if (rangeValue < 51 && rangeValue >= 0) {&#xD;&#xA;          chanceoflive += 4;&#xD;&#xA;        }&#xD;&#xA;            else if (rangeValue < 100 && rangeValue > 50) {&#xD;&#xA;                chanceoflive += 2;&#xD;&#xA;              }&#xD;&#xA;      }&#xD;&#xA;    );&#xD;&#xA;    function handleClick(){&#xD;&#xA;        alert(chanceoflive);&#xD;&#xA;    }