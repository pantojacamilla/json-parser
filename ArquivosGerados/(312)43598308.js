    new Vue({&#xD;&#xA;      el: "#app",&#xD;&#xA;      data: {&#xD;&#xA;        myNumbers: [1, 2, 3, 4],&#xD;&#xA;        highestNumberInMyNumbers: 4&#xD;&#xA;      },&#xD;&#xA;      methods: {&#xD;&#xA;        addNumber() {&#xD;&#xA;          this.highestNumberInMyNumbers++;&#xD;&#xA;          this.myNumbers.splice(Math.floor(Math.random() * this.myNumbers.length), 0, this.highestNumberInMyNumbers);&#xD;&#xA;        },&#xD;&#xA;        removeNumber(element) {&#xD;&#xA;          this.myNumbers.splice(element, 1)&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    })