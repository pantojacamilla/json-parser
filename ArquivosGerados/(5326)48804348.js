    <html>&#xD;&#xA;    <body>&#xD;&#xA;      <div id="buttonContainer">&#xD;&#xA;        <button&#xD;&#xA;      </div>&#xD;&#xA;      <div id="gridContainer" style = "left: 500px;">&#xD;&#xA;      </div>&#xD;&#xA;    </body>&#xD;&#xA;    <script>&#xD;&#xA;      const buttons = document.querySelector("#buttonContainer");&#xD;&#xA;      const btn1 = document.createElement("button");&#xD;&#xA;      btn1.classList.add("btn1");&#xD;&#xA;      buttonContainer.appendChild(btn1);&#xD;&#xA;      function divs(){&#xD;&#xA;        const gridContainer = document.querySelector("#gridContainer");&#xD;&#xA;        for(var i = 0; i < 17; i++){&#xD;&#xA;          var row = document.createElement("div");&#xD;&#xA;          row.className = "row";&#xD;&#xA;          for(var x = 1; x <= 17; x++){&#xD;&#xA;            var cell = document.createElement("div");&#xD;&#xA;            cell.className = "gridsquare";&#xD;&#xA;            cell.innerText = (i);&#xD;&#xA;            row.appendChild(cell);&#xD;&#xA;          }&#xD;&#xA;         gridContainer.appendChild(row);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      divs();&#xD;&#xA;    </script>&#xD;&#xA;    </html>