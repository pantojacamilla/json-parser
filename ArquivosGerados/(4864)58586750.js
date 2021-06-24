    <script>&#xD;&#xA;      const addItems = document.querySelector('.add-items'); //grabs all form items&#xD;&#xA;      const itemsList = document.querySelector('.plates'); // grabs plates area&#xD;&#xA;      const checkboxes = document.querySelector('.check__all'); // grabs check all button&#xD;&#xA;      const uncheckboxes = document.querySelector('.uncheck__all'); // grabs uncheck all button&#xD;&#xA;      const clearBoxes = document.querySelector('.clear__all'); // grabs remove/clear all button&#xD;&#xA;      const items = JSON.parse(localStorage.getItem('items')) || []; // empty area for something to be passed in - we check first if there's an empty area&#xD;&#xA;    &#xD;&#xA;    function addItem(e){&#xD;&#xA;      e.preventDefault(); // prevents data to go to client server&#xD;&#xA;      const text = (this.querySelector('[name=item]')).value; // grabbing value from name=item form above&#xD;&#xA;      const item = { // object with name=item and set to false by default&#xD;&#xA;        text,&#xD;&#xA;        done: false&#xD;&#xA;      };&#xD;&#xA;    &#xD;&#xA;      items.push(item); // add item&#xD;&#xA;      populateList(items, itemsList); // populated the list&#xD;&#xA;      localStorage.setItem('items',JSON.stringify(items)); // put item in local storage so it loads with items&#xD;&#xA;      this.reset();&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function populateList(plates = [], platesList){&#xD;&#xA;      platesList.innerHTML = plates.map((plate,i)=>{ // take array of raw data and return data&#xD;&#xA;        return `&#xD;&#xA;          <li>&#xD;&#xA;          <input type = "checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''} />&#xD;&#xA;          <label for="item${i}">${plate.text}</label>&#xD;&#xA;          </li>&#xD;&#xA;        `;&#xD;&#xA;      }).join(''); // turn array in one huge string&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function toggleDone(e){&#xD;&#xA;      if(!e.target.matches('input')) return; // skip this unless input&#xD;&#xA;      const el = e.target;&#xD;&#xA;      const index = el.dataset.index;&#xD;&#xA;      items[index].done = !items[index].done;&#xD;&#xA;      localStorage.setItem('items',JSON.stringify(items));&#xD;&#xA;      populateList(items, itemsList);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    addItems.addEventListener('submit', addItem);&#xD;&#xA;    itemsList.addEventListener('click', toggleDone);&#xD;&#xA;    populateList(items, itemsList);&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    // Buttons to be created - clear all, check all or uncheck all&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    </script>&#xD;&#xA;    &#xD;&#xA;    </body>&#xD;&#xA;    </html>