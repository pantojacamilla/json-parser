    function myFunction(){&#xD;&#xA;      &#xD;&#xA;    var board=document.getElementById("tab");&#xD;&#xA;     &#xD;&#xA;            for(var i=0; i<lvl1.rows; i++ )&#xD;&#xA;            {&#xD;&#xA;                    var row=board.insertRow();&#xD;&#xA;                                   &#xD;&#xA;                    for(var j=0; j<lvl1.cols; j++)&#xD;&#xA;                    {&#xD;&#xA;                            var cell = row.insertCell();&#xD;&#xA;                             &#xD;&#xA;                    }       &#xD;&#xA;            }&#xD;&#xA;            board.onclick = function(e)&#xD;&#xA;            {&#xD;&#xA;                    var  cellIndex = e.target.cellIndex;&#xD;&#xA;                    var rowIndexx = e.target.parentNode.rowIndex;&#xD;&#xA;                    console.log(cellIndex+".."+rowIndexx);&#xD;&#xA;                    cell.style.backgroundColor="red";&#xD;&#xA;            }&#xD;&#xA;    }