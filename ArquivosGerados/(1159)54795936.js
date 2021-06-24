    var todos = [&#xD;&#xA;      {&#xD;&#xA;        name: "dexter",&#xD;&#xA;        color: "orange"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        name: "jaime",&#xD;&#xA;        color: "green"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        name: "stack",&#xD;&#xA;        color: "yellow"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        name: "overflow",&#xD;&#xA;        color: "black"&#xD;&#xA;      }&#xD;&#xA;    ]&#xD;&#xA;    var i = 0;&#xD;&#xA;    var sixthTable = new Vue({&#xD;&#xA;      el: '#sevenTable',&#xD;&#xA;      data: {&#xD;&#xA;        currentPage: 1,&#xD;&#xA;        elementsPerPage: 3,&#xD;&#xA;        ascending: false,&#xD;&#xA;        sortColumn: '',&#xD;&#xA;        rows: [&#xD;&#xA;          {&#xD;&#xA;            name: todos[0].name,&#xD;&#xA;            color: todos[0].color&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            name: todos[1].name,&#xD;&#xA;            color: todos[1].color&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            name: todos[2].name,&#xD;&#xA;            color: todos[2].color&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            name: todos[3].name,&#xD;&#xA;            color: todos[3].color&#xD;&#xA;          }&#xD;&#xA;        ]&#xD;&#xA;      },&#xD;&#xA;      methods: {&#xD;&#xA;        "sortTable": function sortTable(col) {&#xD;&#xA;          if (this.sortColumn === col) {&#xD;&#xA;            this.ascending = !this.ascending;&#xD;&#xA;          } else {&#xD;&#xA;            this.ascending = true;&#xD;&#xA;            this.sortColumn = col;&#xD;&#xA;          }&#xD;&#xA;          var ascending = this.ascending;&#xD;&#xA;          this.rows.sort(function(a, b) {&#xD;&#xA;            if (a[col] > b[col]) {&#xD;&#xA;              return ascending ? 1 : -1&#xD;&#xA;            } else if (a[col] < b[col]) {&#xD;&#xA;              return ascending ? -1 : 1&#xD;&#xA;            }&#xD;&#xA;            return 0;&#xD;&#xA;          })&#xD;&#xA;        },&#xD;&#xA;        "num_pages": function num_pages() {&#xD;&#xA;          return Math.ceil(this.rows.length / this.elementsPerPage);&#xD;&#xA;        },&#xD;&#xA;        "get_rows": function get_rows() {&#xD;&#xA;          var start = (this.currentPage - 1) * this.elementsPerPage;&#xD;&#xA;          var end = start + this.elementsPerPage;&#xD;&#xA;          return this.rows.slice(start, end);&#xD;&#xA;        },&#xD;&#xA;        "change_page": function change_page(page) {&#xD;&#xA;          this.currentPage = page;&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      computed: {&#xD;&#xA;        "columns": function columns() {&#xD;&#xA;          if (this.rows.length == 0) {&#xD;&#xA;            return [];&#xD;&#xA;          }&#xD;&#xA;          return Object.keys(this.rows[0])&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    });