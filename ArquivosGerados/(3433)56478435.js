    function mapDisplay(){&#xD;&#xA;            let ddData = new Map([&#xD;&#xA;              ["this", 11],&#xD;&#xA;              ["doesnt", 21],&#xD;&#xA;              ["work", 31]&#xD;&#xA;            ])&#xD;&#xA;        &#xD;&#xA;            console.log('show ddData');&#xD;&#xA;            console.log(ddData);&#xD;&#xA;        &#xD;&#xA;            console.log('show key');&#xD;&#xA;            // Loop over our Map using keys function&#xD;&#xA;            for (let key of ddData.keys()) {&#xD;&#xA;              console.log(key);&#xD;&#xA;            }&#xD;&#xA;        &#xD;&#xA;            console.log('show values')&#xD;&#xA;            // Loop over our Map using values function&#xD;&#xA;            for (let val of ddData.values()) {&#xD;&#xA;              console.log(val);&#xD;&#xA;            }&#xD;&#xA;            console.log('show entries')&#xD;&#xA;            // Loop over our Map using entries function&#xD;&#xA;            for (let entry of ddData.entries()) {&#xD;&#xA;              console.log(entry[0], entry[1]);&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        &#xD;&#xA;          mapDisplay();