    <Doctype html>&#xD;&#xA;      <html>&#xD;&#xA;      <head>&#xD;&#xA;        <meta charset="utf-8" />&#xD;&#xA;        <title>Add product</title>&#xD;&#xA;      </head>&#xD;&#xA;      <body>&#xD;&#xA;        <div id="fact">&#xD;&#xA;          <p>&#xD;&#xA;            <input type="text" v-model="input.id" placeholder="id of product" />&#xD;&#xA;          </p>&#xD;&#xA;          <p>&#xD;&#xA;            <input type="text" v-model="input.qty" placeholder="quantity of product" />&#xD;&#xA;          </p>&#xD;&#xA;          <button @click="addItem">Add</button>&#xD;&#xA;          <ul v-if="items.length > 0">&#xD;&#xA;            <li v-for="item in items">{{ item.qty + ' ' + item.id }}</li>&#xD;&#xA;          </ul>&#xD;&#xA;          &#xD;&#xA;        </div>&#xD;&#xA;        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js"></script>&#xD;&#xA;      </body>&#xD;&#xA;      </html>