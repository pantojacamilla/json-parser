    <script src="https://unpkg.com/vue@2.5.11"></script>&#xD;&#xA;    <script src="https://unpkg.com/vue-select@2.3.1"></script>&#xD;&#xA;    <div id="app">&#xD;&#xA;      <h1>Please, select item</h1>&#xD;&#xA;      <v-select v-model="selected" :options="options"></v-select><br>&#xD;&#xA;      <p>Quantity needed:</p>&#xD;&#xA;      <input type="number" name="trade-in" v-model.number="qnt" />&#xD;&#xA;      <p>{{ priceId }}</p>&#xD;&#xA;      <h1>selectedId: {{ selectedId }}</h1>&#xD;&#xA;      <p>{{ qnt }}</p>&#xD;&#xA;      <p>Final price: ${{ result }}</p>&#xD;&#xA;      <p>Final price: {{ final }}</p>&#xD;&#xA;    </div>