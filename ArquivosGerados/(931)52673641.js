    new Vue({&#xD;&#xA;      el: '#app',&#xD;&#xA;      data: {&#xD;&#xA;        dataReceived: '',&#xD;&#xA;      },&#xD;&#xA;      methods: {&#xD;&#xA;        getData() {&#xD;&#xA;          axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')&#xD;&#xA;            .then(function(response) {&#xD;&#xA;              this.dataReceived = this.response;&#xD;&#xA;              console.log(this.dataReceived);&#xD;&#xA;              return this.dataReceived;&#xD;&#xA;            })&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    })