    let random = function () {&#xD;&#xA;      let text = "";&#xD;&#xA;      const possible = "ABCDEF0123456789";&#xD;&#xA;      for (var i = 0; i < 6; i++)&#xD;&#xA;      text += possible.charAt(Math.floor(Math.random() *                               possible.length).toString(16));&#xD;&#xA;         &#xD;&#xA;      return '#' + text&#xD;&#xA;    }&#xD;&#xA;    const section = document.querySelector('section');&#xD;&#xA;    const title = document.querySelector('h1')&#xD;&#xA;    section.style.backgroundColor = random();&#xD;&#xA;    title.textContent = random();