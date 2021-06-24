    console.clear()&#xD;&#xA;    function validateSelect(e) {&#xD;&#xA;      var origin = e.target.querySelector("[name=origin]").value;&#xD;&#xA;      var destination = e.target.querySelector("[name=destination]").value;&#xD;&#xA;      if (origin == destination) {&#xD;&#xA;        e.stopPropagation()&#xD;&#xA;        e.preventDefault()&#xD;&#xA;        alert("Origin and Destination can't be the same");&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    var distanceArray = [10000,20000,30000];&#xD;&#xA;    //manila to qc 10000 meter&#xD;&#xA;    //qc to makati 20000 meter&#xD;&#xA;    //makati to marikina 30000 meter&#xD;&#xA;    document.getElementById('findEta').addEventListener('submit', validateSelect);//for form find eta&#xD;&#xA;    function getEta(){&#xD;&#xA;        var selectedOrigin = document.getElementById("origin").selectedIndex;&#xD;&#xA;        var selectedDestination = document.getElementById("destination").selectedIndex;&#xD;&#xA;        var estimatedTimeOfArrival = document.getElementById("estimatedTimeOfArrival");&#xD;&#xA;      if((selectedOrigin ==  0)&& (selectedDestination == 1)){&#xD;&#xA;            //manila to qc&#xD;&#xA;            distance = 10000;&#xD;&#xA;            var speed = 5.56; //converted speed from 20km/h&#xD;&#xA;            time = distance/speed; &#xD;&#xA;            eta = Math.floor(time).toString();&#xD;&#xA;            if((eta >=60)){&#xD;&#xA;                var newEta = eta /60; //minutes&#xD;&#xA;                var mod = eta%60; //seconds&#xD;&#xA;                newEta = Math.floor(newEta);&#xD;&#xA;                estimatedTimeOfArrival.value = newEta + "m "+mod+"s" ;&#xD;&#xA;            }else{&#xD;&#xA;                eta.toString();&#xD;&#xA;                estimatedTimeOfArrival.value = eta + " s";&#xD;&#xA;            }&#xD;&#xA;        }else if((selectedOrigin ==  0)&& (selectedDestination == 2)){&#xD;&#xA;            distance = 20000;&#xD;&#xA;            var speed = 5.56;&#xD;&#xA;            time = distance/speed; &#xD;&#xA;            eta = Math.floor(time).toString();&#xD;&#xA;            if((eta >=60)){&#xD;&#xA;                var newEta = eta /60; //minutes&#xD;&#xA;                var mod = eta%60; //seconds&#xD;&#xA;                newEta = Math.floor(newEta);&#xD;&#xA;                estimatedTimeOfArrival.value = newEta + "m "+mod+"s" ;&#xD;&#xA;            }else{&#xD;&#xA;                eta.toString();&#xD;&#xA;                estimatedTimeOfArrival.value = eta + " s";&#xD;&#xA;            }&#xD;&#xA;        }else if((selectedOrigin ==  0)&& (selectedDestination == 2)){&#xD;&#xA;            distance = 30000;&#xD;&#xA;            var speed = 5.56;&#xD;&#xA;            time = distance/speed; &#xD;&#xA;            eta = Math.floor(time).toString();&#xD;&#xA;            if((eta >=60)){&#xD;&#xA;                var newEta = eta /60; //minutes&#xD;&#xA;                var mod = eta%60; //seconds&#xD;&#xA;                newEta = Math.floor(newEta);&#xD;&#xA;                estimatedTimeOfArrival.value = newEta + "m "+mod+"s" ;&#xD;&#xA;            }else{&#xD;&#xA;                eta.toString();&#xD;&#xA;                estimatedTimeOfArrival.value = eta + " s";&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function alertFunction(){&#xD;&#xA;        var selectedOrigin = document.getElementById("origin").value;&#xD;&#xA;        var selectedDestination = document.getElementById("destination").value;&#xD;&#xA;        var estimatedTimeOfArrival = document.getElementById("estimatedTimeOfArrival");&#xD;&#xA;    if((selectedOrigin == "")&&(selectedDestination =="")){&#xD;&#xA;        alert("Please select an option first.");&#xD;&#xA;    }else if(selectedOrigin == selectedDestination){&#xD;&#xA;        validateSelect(e);&#xD;&#xA;    }&#xD;&#xA;    else{&#xD;&#xA;        getEta();&#xD;&#xA;        alert("\nYour Origin is: "+selectedOrigin+"\nYour Destination is: "+selectedDestination+"\nYour ETA is: "+estimatedTimeOfArrival.value);&#xD;&#xA;    }&#xD;&#xA;        &#xD;&#xA;    }