    let myObj = [{&#xD;&#xA;        id: 1,&#xD;&#xA;        children: [{&#xD;&#xA;            id: 1.1,&#xD;&#xA;            children: []&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            id: 1.2,&#xD;&#xA;            children: []&#xD;&#xA;          }&#xD;&#xA;        ]&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        id: 2,&#xD;&#xA;        children: [{&#xD;&#xA;            id: 2.1,&#xD;&#xA;            children: []&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            id: 2.2,&#xD;&#xA;            children: []&#xD;&#xA;          }&#xD;&#xA;        ]&#xD;&#xA;      }&#xD;&#xA;    ]&#xD;&#xA;    function addToObj(itemToAdd, parentId, obj) {&#xD;&#xA;      for (let i = 0; i < obj.length; i++) {&#xD;&#xA;        const item = search(obj[i], parentId);&#xD;&#xA;        console.log(item); // undefined&#xD;&#xA;        if (item) {&#xD;&#xA;          item.children = item.children.concat(itemToAdd);&#xD;&#xA;          break;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      function search(obj, id) {&#xD;&#xA;        if (obj.id === id) {&#xD;&#xA;          console.log(obj); // defined (obj with id of 2.1), but returns undefined?&#xD;&#xA;          return obj;&#xD;&#xA;        }&#xD;&#xA;        for (let i = 0; i < obj.children.length; i++) {&#xD;&#xA;          search(obj.children[i], id);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return obj;&#xD;&#xA;    };&#xD;&#xA;    const itemToAdd = {&#xD;&#xA;      id: 100,&#xD;&#xA;    }&#xD;&#xA;    addToObj(itemToAdd, 2.1, myObj);