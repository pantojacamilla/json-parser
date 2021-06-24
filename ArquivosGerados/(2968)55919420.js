    function format(number, decimals = 2, locale = 'en-in') {&#xD;&#xA;      const fixed = parseInt(number).toFixed(decimals);&#xD;&#xA;      const [int, dec] = fixed.split('.')&#xD;&#xA;      const intFormatted = (+int).toLocaleString(locale)&#xD;&#xA;      return intFormatted + (dec ? '.' + dec : '');&#xD;&#xA;    }&#xD;&#xA;    var data = [{&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Bakery FG",&#xD;&#xA;        "itemname": "Khara Boondhi-L",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 980&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Bakery FG",&#xD;&#xA;        "itemname": "Samosa-L",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 130&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Bakery FG",&#xD;&#xA;        "itemname": "Corn Flakes Masala-L",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 500&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Plum Cake 250gm",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 110&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Butterscotch Cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 720&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Chocolate chips cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 40000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Mango Delight Cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 14000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Almond Honey Chocolate Cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 500&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Peach Cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 5500&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Pastry & Cake FG",&#xD;&#xA;        "itemname": "Black Forest Cake",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 1000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Chocolate Crazy Boom",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2360&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Hot Chocolate Fudge",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2340&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Chocolate Sugar Free Ice-Cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 1000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Kesar Badam Falooda",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 4430&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Strawberry Ice-cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 1231&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "TOP- Chocochips",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2200&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Cheese Cake Ice-Cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 500&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Sundae Large",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2350&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Mango Ice-cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 8000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "TOP- Shooting Star",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2360&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Ice Blue Sundae",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2340&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Creamy Litchi Boom",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2200&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Cookies Ice-cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 7000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "TOP- Wafer",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 88000&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Litchi cherry Sundae",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2440&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Peach Malaba",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2230&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "Ice Cream FG",&#xD;&#xA;        "itemname": "Cherry Mania Ice-Cream",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 2700&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "North Indian FG",&#xD;&#xA;        "itemname": "Fruit Mixture",&#xD;&#xA;        "transactionType": "TransferIn",&#xD;&#xA;        "netamount": 324&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "JAYANAGAR",&#xD;&#xA;        "brandname": "NA",&#xD;&#xA;        "itemname": "NA",&#xD;&#xA;        "transactionType": "Sales",&#xD;&#xA;        "netamount": 476426&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "KOLAR",&#xD;&#xA;        "brandname": "NA",&#xD;&#xA;        "itemname": "NA",&#xD;&#xA;        "transactionType": "Sales",&#xD;&#xA;        "netamount": 115313&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "outlet": "MALLESHWARAM",&#xD;&#xA;        "brandname": "NA",&#xD;&#xA;        "itemname": "NA",&#xD;&#xA;        "transactionType": "Sales",&#xD;&#xA;        "netamount": 92141&#xD;&#xA;      }&#xD;&#xA;    ]&#xD;&#xA;    let formatData = function(data) {&#xD;&#xA;      let brandnames = [];&#xD;&#xA;      let itemnames = [];&#xD;&#xA;      let outlets = [];&#xD;&#xA;      let maxUniqueForOutlets = {};&#xD;&#xA;      data.forEach(element => {&#xD;&#xA;        if (!maxUniqueForOutlets[element["brandname"]]) {&#xD;&#xA;          maxUniqueForOutlets[element["brandname"]] = [];&#xD;&#xA;          console.log(maxUniqueForOutlets[element["brandname"]]) //key value pair of brandname and itemname&#xD;&#xA;        }&#xD;&#xA;        if (maxUniqueForOutlets[element["brandname"]].indexOf(element["itemname"]) == -1) {&#xD;&#xA;          maxUniqueForOutlets[element["brandname"]].push(element["itemname"]);&#xD;&#xA;        }&#xD;&#xA;        if (brandnames.indexOf(element.brandname) == -1 && (element.brandname) !== "NA") { //taking brandname which do not have bradname===NA&#xD;&#xA;          brandnames.push(element.brandname);&#xD;&#xA;        }&#xD;&#xA;        if (itemnames.indexOf(element.itemname) == -1 && (element.itemname) !== "NA") { //taking itemname which do not have bradname===NA&#xD;&#xA;          itemnames.push(element.itemname);&#xD;&#xA;        }&#xD;&#xA;        if (outlets.indexOf(element.outlet) == -1) {&#xD;&#xA;          outlets.push(element.outlet);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      return {&#xD;&#xA;        data: data,&#xD;&#xA;        brandnames: brandnames,&#xD;&#xA;        itemnames: itemnames,&#xD;&#xA;        outlets: outlets,&#xD;&#xA;        maxUniqueForOutlets: maxUniqueForOutlets&#xD;&#xA;      };&#xD;&#xA;    };&#xD;&#xA;    var totalSalesPercentage = '';&#xD;&#xA;    var olWiseSalesPercentage = '';&#xD;&#xA;    let renderTable = function(data) {&#xD;&#xA;      let brandnames = data.brandnames;&#xD;&#xA;      let itemnames = data.itemnames;&#xD;&#xA;      let outlets = data.outlets;&#xD;&#xA;      let maxUniqueForOutlets = data.maxUniqueForOutlets;&#xD;&#xA;      data = data.data;&#xD;&#xA;      let tbl = document.getElementById("ConsumptionTable");&#xD;&#xA;      let table = document.createElement("table");&#xD;&#xA;      let thead = document.createElement("thead");&#xD;&#xA;      let headerRow = document.createElement("tr");&#xD;&#xA;      let th = document.createElement("th");&#xD;&#xA;      th = document.createElement("th");&#xD;&#xA;      th.innerHTML = "Brand Name";&#xD;&#xA;      th.classList.add("text-center");&#xD;&#xA;      headerRow.appendChild(th);&#xD;&#xA;      let grandTotal = 0;&#xD;&#xA;      let grandNetAmount = 0;&#xD;&#xA;      let outletWiseTotal = {};&#xD;&#xA;      let outletWiseNetamount = {};&#xD;&#xA;      th = document.createElement("th");&#xD;&#xA;      th.colSpan = 2;&#xD;&#xA;      th.innerHTML = "Total";&#xD;&#xA;      th.classList.add("text-center");&#xD;&#xA;      headerRow.appendChild(th);&#xD;&#xA;      outlets.forEach(element => {&#xD;&#xA;        th = document.createElement("th");&#xD;&#xA;        th.colSpan = 2;&#xD;&#xA;        th.innerHTML = element; // populating outlet &#xD;&#xA;        th.classList.add("text-center");&#xD;&#xA;        headerRow.appendChild(th);&#xD;&#xA;        outletWiseTotal[element] = 0;&#xD;&#xA;        data.forEach(el => {&#xD;&#xA;          if (el.outlet == element && el.brandname !== "NA") { //taking brandname which do not have bradname===NA&#xD;&#xA;            outletWiseTotal[element] += parseInt(el.netamount); //here i am calculating the outletWiseTotal where transcationType==TransferIn&#xD;&#xA;          }&#xD;&#xA;          if (el.outlet == element && el.brandname == "NA" && el.transactionType == "Sales") { //taking brandname which do not have bradname===NA&#xD;&#xA;            outletWiseNetamount[element] = parseInt(el.netamount) || 0&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;        grandTotal += outletWiseTotal[element]; //then calculating grand total to populate it into  Total column at grn entery&#xD;&#xA;        grandNetAmount += outletWiseNetamount[element] || 0&#xD;&#xA;      });&#xD;&#xA;      thead.appendChild(headerRow);&#xD;&#xA;      headerRow = document.createElement("tr");&#xD;&#xA;      th = document.createElement("th");&#xD;&#xA;      th.innerHTML = "";&#xD;&#xA;      headerRow.appendChild(th);&#xD;&#xA;      for (let i = 0; i < outlets.length + 1; i++) {&#xD;&#xA;        th = document.createElement("th");&#xD;&#xA;        th.innerHTML = "Sales";&#xD;&#xA;        th.classList.add("text-center");&#xD;&#xA;        headerRow.appendChild(th);&#xD;&#xA;        th = document.createElement("th");&#xD;&#xA;        th.innerHTML = "Grn Entery";&#xD;&#xA;        th.classList.add("text-center");&#xD;&#xA;        headerRow.appendChild(th);&#xD;&#xA;      }&#xD;&#xA;      headerRow.insertBefore(th, headerRow.children[1]);&#xD;&#xA;      thead.appendChild(headerRow);&#xD;&#xA;      table.appendChild(thead);&#xD;&#xA;      headerRow = document.createElement("tr");&#xD;&#xA;      let td = document.createElement("th");&#xD;&#xA;      td.innerHTML = "Total";&#xD;&#xA;      td.classList.add("text-center");&#xD;&#xA;      headerRow.appendChild(td);&#xD;&#xA;      let el1 = 0;&#xD;&#xA;      outlets.forEach(element => {&#xD;&#xA;        td = document.createElement("th");&#xD;&#xA;        td.innerHTML = outletWiseTotal[element].toLocaleString('en-IN');&#xD;&#xA;        td.classList.add("text-right");&#xD;&#xA;        headerRow.appendChild(td);&#xD;&#xA;        if (element.outlet == element) {&#xD;&#xA;          el1 = element.netAmount;&#xD;&#xA;        }&#xD;&#xA;        td = document.createElement("th");&#xD;&#xA;        td.innerHTML = outletWiseNetamount[element].toLocaleString('en-IN') || 0;&#xD;&#xA;        td.classList.add("text-right");&#xD;&#xA;        headerRow.appendChild(td);&#xD;&#xA;      });&#xD;&#xA;      td = document.createElement("th");&#xD;&#xA;      td.innerHTML = grandNetAmount.toLocaleString('en-IN');&#xD;&#xA;      td.classList.add("text-right");&#xD;&#xA;      headerRow.insertBefore(td, headerRow.children[1]);&#xD;&#xA;      td = document.createElement("th");&#xD;&#xA;      td.innerHTML = grandTotal.toLocaleString('en-IN');&#xD;&#xA;      td.classList.add("text-right");&#xD;&#xA;      headerRow.insertBefore(td, headerRow.children[1]);&#xD;&#xA;      thead.appendChild(headerRow);&#xD;&#xA;      table.appendChild(thead);&#xD;&#xA;      let tbody = document.createElement("tbody");&#xD;&#xA;      Object.keys(maxUniqueForOutlets).forEach(function(element) { // rendering brand name&#xD;&#xA;        let row = document.createElement("tr");&#xD;&#xA;        row.classList.add('header');&#xD;&#xA;        td = document.createElement("td");&#xD;&#xA;        td.innerHTML = '<span><i class="fas fa-plus" id="test"></i>&nbsp</span>' + element; //creating plus font icon to make click happen&#xD;&#xA;        row.appendChild(td);&#xD;&#xA;        let total = 0;&#xD;&#xA;        let totalBCount = 0;&#xD;&#xA;        outlets.forEach(outlet => {&#xD;&#xA;          let el = 0;&#xD;&#xA;          let bc = 0;&#xD;&#xA;          data.forEach(d => {&#xD;&#xA;            if (d.brandname == element && d.outlet == outlet) {&#xD;&#xA;              total += parseInt(d.netamount);&#xD;&#xA;              el = d.netamount; //calculating outlet wise net amount&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;          olWiseSalesPercentage = (el / outletWiseTotal[outlet]) * 100 || 0&#xD;&#xA;          td = document.createElement("td");&#xD;&#xA;          td.innerHTML = el.toLocaleString('en-IN'); // by this one i am populating outlet wise values for bramd but it is displaying wrong values&#xD;&#xA;          td.classList.add("text-right");&#xD;&#xA;          row.appendChild(td);&#xD;&#xA;          td = document.createElement("td");&#xD;&#xA;          td.innerHTML = olWiseSalesPercentage.toFixed(2) + "%";&#xD;&#xA;          td.classList.add("text-right");&#xD;&#xA;          row.appendChild(td);&#xD;&#xA;        });&#xD;&#xA;        totalSalesPercentage = (total / grandTotal) * 100 //here doing some calculations&#xD;&#xA;        const totalSalesPercentageFix = totalSalesPercentage.toFixed(2) + "%"&#xD;&#xA;        td = document.createElement("td");&#xD;&#xA;        td.innerHTML = totalSalesPercentageFix;&#xD;&#xA;        td.classList.add("text-right");&#xD;&#xA;        row.insertBefore(td, row.children[1]);&#xD;&#xA;        td = document.createElement("td");&#xD;&#xA;        td.innerHTML = total.toLocaleString('en-IN');&#xD;&#xA;        td.classList.add("text-right");&#xD;&#xA;        row.insertBefore(td, row.children[1]);&#xD;&#xA;        tbody.appendChild(row);&#xD;&#xA;        maxUniqueForOutlets[element].forEach(function(k) { //this one is populating itemwise values but it starts with Total column Total column will populate Total &#xD;&#xA;          let rowChildren = document.createElement("tr");&#xD;&#xA;          const filteredData = data.filter(a => a.itemname === k);&#xD;&#xA;          if (filteredData.length > 0) {&#xD;&#xA;            var tdNew = document.createElement("td");&#xD;&#xA;            tdNew.innerHTML = filteredData[0].netamount;&#xD;&#xA;            tdNew.classList.add("text-right");&#xD;&#xA;            var tdName = document.createElement("td");&#xD;&#xA;            tdName.innerHTML = filteredData[0].itemname;&#xD;&#xA;            tdName.classList.add("text-left");&#xD;&#xA;            rowChildren.appendChild(tdName);&#xD;&#xA;            rowChildren.appendChild(tdNew);&#xD;&#xA;            outlets.forEach(outlet => {&#xD;&#xA;              const emptyCell = document.createElement('td'); //this i am creating staticly how can i create this statically as here i have 3 outlets so i am creating &#xD;&#xA;              emptyCell.innerHTML = "12";&#xD;&#xA;              emptyCell.classList.add("text-right");&#xD;&#xA;              rowChildren.appendChild(emptyCell);&#xD;&#xA;              const emptyCell1 = document.createElement('td');&#xD;&#xA;              emptyCell1.innerHTML = "13";&#xD;&#xA;              emptyCell1.classList.add("text-right");&#xD;&#xA;              rowChildren.appendChild(emptyCell1);&#xD;&#xA;              tbody.appendChild(rowChildren);&#xD;&#xA;            });&#xD;&#xA;          }&#xD;&#xA;        })&#xD;&#xA;      });&#xD;&#xA;      table.appendChild(tbody);&#xD;&#xA;      tbl.innerHTML = "";&#xD;&#xA;      tbl.appendChild(table);&#xD;&#xA;      table.classList.add("table");&#xD;&#xA;      table.classList.add("table-striped");&#xD;&#xA;      table.classList.add("table-bordered");&#xD;&#xA;      table.classList.add("table-hover");&#xD;&#xA;    }&#xD;&#xA;    let formatedData = formatData(data);&#xD;&#xA;    renderTable(formatedData);&#xD;&#xA;    var ua = navigator.userAgent,&#xD;&#xA;      event = (ua.match(/iPad/i)) ? "touchstart" : "click";&#xD;&#xA;    $('.table .header .fa-plus').on(event, function() {&#xD;&#xA;      $(this).closest('.header').toggleClass("active", "").nextUntil('.header').css('display', function(i, v) {&#xD;&#xA;        return this.style.display === 'table-row' ? 'none' : 'table-row';&#xD;&#xA;      });&#xD;&#xA;    });