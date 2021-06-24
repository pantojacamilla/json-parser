    <script>&#xD;&#xA;        var inputItem = document.getElementById("inputItem");&#xD;&#xA;        inputItem.focus();&#xD;&#xA;        // adds input Item to list&#xD;&#xA;        function addItem(list, input) {&#xD;&#xA;            var inputItem = this.inputItem;&#xD;&#xA;            var list = document.getElementById(list);&#xD;&#xA;            var listItem = document.createElement("li");&#xD;&#xA;            // Configure the delete button&#xD;&#xA;            var deleteButton = document.createElement("button");&#xD;&#xA;            deleteButton.innerText = "X";&#xD;&#xA;            deleteButton.addEventListener("click", function() {&#xD;&#xA;                this.parentElement.style.display = 'none';&#xD;&#xA;            });&#xD;&#xA;            // Configure the check box&#xD;&#xA;            var checkBox = document.createElement("input");&#xD;&#xA;            checkBox.id = "check";&#xD;&#xA;            checkBox.type = 'checkbox';&#xD;&#xA;            checkBox.addEventListener('change', function() {&#xD;&#xA;                labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';&#xD;&#xA;            });&#xD;&#xA;            // Configure the label&#xD;&#xA;            var label = document.createElement("label");&#xD;&#xA;            var labelText = document.createElement("span");&#xD;&#xA;            labelText.innerText = input.value;&#xD;&#xA;            // Put the checkbox and label text in to the label element&#xD;&#xA;            label.appendChild(checkBox);&#xD;&#xA;            label.appendChild(labelText);&#xD;&#xA;            // Put the label (with the checkbox inside) and the delete&#xD;&#xA;            // button into the list item.&#xD;&#xA;            listItem.appendChild(label);&#xD;&#xA;            listItem.appendChild(deleteButton);&#xD;&#xA;            list.appendChild(listItem);&#xD;&#xA;            inputItem.focus();&#xD;&#xA;            inputItem.select();&#xD;&#xA;            return false;&#xD;&#xA;        }&#xD;&#xA;        localStorage.setItem("list",list);&#xD;&#xA;        localStorage.getItem("list").forEach(function(list){&#xD;&#xA;            elem.textContent = list;&#xD;&#xA;        });&#xD;&#xA;    </script>