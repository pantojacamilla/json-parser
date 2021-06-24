    $(document).ready(function(){&#xD;&#xA;      var data = JSON.parse(localStorage.getItem("todoData"));&#xD;&#xA;      for (var i = 0; i < localStorage.length; i++){&#xD;&#xA;        $('#thingsTodo').append('<div class="section">'+&#xD;&#xA;                            '<li id="listItem" class="blue-text text-darken-2 tooltip">' + data + '<span class="tooltiptext">Click to edit</span></li>'+&#xD;&#xA;                            '<i class="small material-icons deleteThisItem">delete</i>'+&#xD;&#xA;                            '<div class="divider"></div>');&#xD;&#xA;     }&#xD;&#xA;     $('#addItem').on('click', addItemToList);&#xD;&#xA;     $('#thingsTodo').on('click', '.deleteThisItem', deleteItem);&#xD;&#xA;     $('#thingsTodo').on('click', '#listItem', editItem);&#xD;&#xA;    function addItemToList (){&#xD;&#xA;          var newItem = {value: $('#inputField').val()};&#xD;&#xA;          if(newItem.value !== ''){&#xD;&#xA;            localStorage.setItem("todoData", JSON.stringify(newItem.value));&#xD;&#xA;            $('#thingsTodo').append('<div class="section">'+&#xD;&#xA;                                '<li id="listItem" class="blue-text text-darken-2 tooltip">' + newItem.value + '<span class="tooltiptext">Click to edit</span></li>'+&#xD;&#xA;                                '<i class="small material-icons deleteThisItem">delete</i>'+&#xD;&#xA;                                '<div class="divider"></div>');&#xD;&#xA;            $('#inputField').val("");&#xD;&#xA;            }else{&#xD;&#xA;              alert("Please make sure you enter something before clicking the button");&#xD;&#xA;         }&#xD;&#xA;       }&#xD;&#xA;    function deleteItem(){&#xD;&#xA;        $(this).closest('.section').remove();&#xD;&#xA;        $(this).closest('.divider').remove();&#xD;&#xA;      }&#xD;&#xA;    function editItem(){&#xD;&#xA;        var newTodoInput = {newValue: prompt("Please edit your todo item")};&#xD;&#xA;         if(typeof newTodoInput.newValue !== 'object'){&#xD;&#xA;           if(newTodoInput.newValue !== ""){&#xD;&#xA;             $(this).replaceWith('<li id="listItem" class="blue-text text-darken-2 tooltip">' + newTodoInput.newValue + '<span class="tooltiptext">Click to edit</span></li>');&#xD;&#xA;           }&#xD;&#xA;         }else{&#xD;&#xA;           alert("Please make sure you enter something before clicking the button");&#xD;&#xA;         }&#xD;&#xA;      }&#xD;&#xA;    });