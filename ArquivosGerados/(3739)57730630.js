    var btnEstablecer = document.getElementById("establishList1");&#xD;&#xA;    btnEstablecer.addEventListener("click", function() {&#xD;&#xA;          let minPric = parseInt(document.getElementById("input_price- &#xD;&#xA;                minList ").value);&#xD;&#xA;                let maxPric = parseInt(document.getElementById("input_price- &#xD;&#xA;                  maxList ").value);&#xD;&#xA;                  // Este arrow function trae los precios entre min y maximo&#xD;&#xA;                  obj.map(obj => obj.Precio_cop > minPric && obj.Precio_cop < maxPric ?&#xD;&#xA;                    elementosFilter.push(obj) : "");&#xD;&#xA;                });