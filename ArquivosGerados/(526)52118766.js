    //after clicking button sends data&#xD;&#xA;    //input fields are defined already.&#xD;&#xA;    const sendData = (event) => {&#xD;&#xA;      event.preventDefault();&#xD;&#xA;      const filterUrl = input2.value.indexOf('&') != -1 ? input2.value.slice(0, input2.value.indexOf('&')) : input2.value;&#xD;&#xA;      const url = new URL(filterUrl).searchParams.get("v");&#xD;&#xA;      fetch('/', {&#xD;&#xA;          method: 'post',&#xD;&#xA;          headers: {&#xD;&#xA;            'Content-Type': 'application/json'&#xD;&#xA;          },&#xD;&#xA;          body: JSON.stringify({&#xD;&#xA;            urlname: url.toString()&#xD;&#xA;          })&#xD;&#xA;        })&#xD;&#xA;        .then(function(res) {&#xD;&#xA;          console.log(res)&#xD;&#xA;        })&#xD;&#xA;        .catch(function(error) {&#xD;&#xA;          console.log(error)&#xD;&#xA;        });&#xD;&#xA;    }