    var firstComponent = Vue.component('spans-show', {&#xD;&#xA;      template: `&#xD;&#xA;    <h1>&#xD;&#xA;    	<span class="unset">Make</span>&#xD;&#xA;    	<br>&#xD;&#xA;    	<span class="unset">Something</span>&#xD;&#xA;        <br>&#xD;&#xA;    	<span v-for="(span, index) of spans" :class="{ 'is-active': span.isActive, 'red': span.isRed, 'first': span.isFirst }" :key="index">{{ index }}: {{ span.name }}</span>&#xD;&#xA;    </h1>&#xD;&#xA;    `,&#xD;&#xA;      data() {&#xD;&#xA;        return {&#xD;&#xA;          spans: [&#xD;&#xA;            {&#xD;&#xA;              name: 'Magical.',&#xD;&#xA;              isActive: true,&#xD;&#xA;              isRed: true,&#xD;&#xA;              isFirst: true&#xD;&#xA;            },&#xD;&#xA;            {&#xD;&#xA;              name: 'Inspiring.',&#xD;&#xA;              isActive: false,&#xD;&#xA;              isRed: true,&#xD;&#xA;              isFirst: true&#xD;&#xA;            },&#xD;&#xA;            {&#xD;&#xA;              name: 'Awesome.',&#xD;&#xA;              isActive: false,&#xD;&#xA;              isRed: true,&#xD;&#xA;              isFirst: true&#xD;&#xA;            }&#xD;&#xA;          ]&#xD;&#xA;        };&#xD;&#xA;      },&#xD;&#xA;      methods: {&#xD;&#xA;        showMe: function() {&#xD;&#xA;          setInterval(() => {&#xD;&#xA;            // forEach&#xD;&#xA;            this.spans.forEach(el => {&#xD;&#xA;              if (el.isActive) {&#xD;&#xA;                el.isActive = false;&#xD;&#xA;              } else {&#xD;&#xA;                el.isActive = true;&#xD;&#xA;              }&#xD;&#xA;            });&#xD;&#xA;          }, 3000);&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      created() {&#xD;&#xA;        window.addEventListener('load', this.showMe);&#xD;&#xA;      },&#xD;&#xA;      destroyed() {&#xD;&#xA;        window.removeEventListener('load', this.showMe);&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    var secondComponent = Vue.component('span-show', {&#xD;&#xA;      template: `&#xD;&#xA;    <span v-show="isActive"><slot></slot></span>&#xD;&#xA;    `,&#xD;&#xA;      props: {&#xD;&#xA;        name: {&#xD;&#xA;          required: true&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      data() {&#xD;&#xA;        return {&#xD;&#xA;          isActive: false&#xD;&#xA;        };&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    new Vue({&#xD;&#xA;      el: "#app",&#xD;&#xA;      components: {&#xD;&#xA;        "first-component": firstComponent,&#xD;&#xA;        "second-component": secondComponent&#xD;&#xA;      }&#xD;&#xA;    });