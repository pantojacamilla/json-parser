      function testing(){&#xD;&#xA;          var c = document.body.childNodes;&#xD;&#xA;          for(i=0;i<c.length;i++){&#xD;&#xA;            if(c[i].nodeName == "#text")&#xD;&#xA;            {&#xD;&#xA;              var rest = c[i].textContent;&#xD;&#xA;              if(rest.length == 0){&#xD;&#xA;                //I want to remove the empty nodes&#xD;&#xA;                document.body.removeChild(document.body.childNodes[i]);&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;          &#xD;&#xA;          //this give a number contains the empty nodes&#xD;&#xA;          var d =document.body.childNodes.length;&#xD;&#xA;          alert(d);&#xD;&#xA;        }