    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.js"></script>&#xD;&#xA;    <div id="app">&#xD;&#xA;      <div class="form-group" v-for="item in formItems">&#xD;&#xA;          <input type="checkbox" <!-- Also need a workaround for dynamic type and v-model -->&#xD;&#xA;              :id="item.id"&#xD;&#xA;              :class="(item.class ? item.class : '')"&#xD;&#xA;              :title="(item.title ? item.title : '')"&#xD;&#xA;              :placeholder="(item.placeholder ? item.placeholder : '')"&#xD;&#xA;              :autocomplete="(item.autocomplete ? item.autocomplete : false)"&#xD;&#xA;              :disabled="(item.disabled ? item.disabled : false)"&#xD;&#xA;              :max="(item.max ? item.max : '')"&#xD;&#xA;              :min="(item.min ? item.min : '')"&#xD;&#xA;              :maxlength="(item.maxLength ? item.maxLength : '')"&#xD;&#xA;              :multiple="(item.multiple ? item.multiple : '')"&#xD;&#xA;              :name="(item.name ? item.name : '')"&#xD;&#xA;              :readonly="(item.readonly ? item.readonly : false)"&#xD;&#xA;              :required="(item.required ? item.required : false)"&#xD;&#xA;              v-on="{{ item.on }}:checkInputParams" <!-- Here I try the dynamic v-on -->&#xD;&#xA;              v-model="params[item.model]"/>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;Is it possible to set a dynamic v-on event like v-on="&lt;variable&gt;:&lt;function&gt;"?