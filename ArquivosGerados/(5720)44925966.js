    4/7/2017 21.45.06node: lolo&#xD;&#xA;    msg : error&#xD;&#xA;    "ReferenceError: $ is not defined"&#xD;&#xA; - **This is the desired output:** *"ppp[lolo:m2]"* **I remove the line with $ in js file, because it does not recognize jquey. I use this instead**&#xD;&#xA; &#xD;&#xA;    msg.payload = msg.payload +"[" + nodeName+":"+ node.axis +"]";&#xD;&#xA;   &#xD;&#xA;  **but in output the option value is undefined instead of value of one of the options from select dropdown:**&#xD;&#xA;    5/7/2017 11.34.22node: 5aa4aa59.f9fa04&#xD;&#xA;    msg.payload : string[19]&#xD;&#xA;    "ppp[lolo:undefined]"&#xD;&#xA; - **This is the html file for the node:**