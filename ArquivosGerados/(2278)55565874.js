    function populateImages() {&#xD;&#xA;      var newDiv = document.createElement('div');&#xD;&#xA;      newDiv.setAttribute('class', 'frame');&#xD;&#xA;      newDiv.setAttribute('src', personArray.url);&#xD;&#xA;      newDiv.setAttribute('onclick', 'promptForName(this)');&#xD;&#xA;      newDiv.setAttribute('onmouseover', 'styleIt(this)');&#xD;&#xA;      newDiv.setAttribute('onmouseout', 'unStyleIt(this)');&#xD;&#xA;      newDiv.setAttribute('id', '1');&#xD;&#xA;      document.getElementById('pic-grid').appendChild(newDiv);&#xD;&#xA;    }