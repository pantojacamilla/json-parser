    $(document).ready(function(){&#xD;&#xA;    	&#xD;&#xA;        $('#submit-file').on("click",function(e){&#xD;&#xA;    		if ($('#files').val()== "")&#xD;&#xA;    		{&#xD;&#xA;    			alert("Anda Harus Memasukkan File Terlebih Dahulu");&#xD;&#xA;    		}&#xD;&#xA;    		else{&#xD;&#xA;    		e.preventDefault();&#xD;&#xA;    		$('#files').parse({&#xD;&#xA;    			config: {&#xD;&#xA;    				delimiter: "",&#xD;&#xA;    				skipEmptyLines: false,&#xD;&#xA;    				complete: displayHTMLTable,&#xD;&#xA;    			},&#xD;&#xA;    			before: function(file, inputElem)&#xD;&#xA;    			{&#xD;&#xA;    				//console.log("Parsing file...", file);&#xD;&#xA;    			},&#xD;&#xA;    			error: function(err, file)&#xD;&#xA;    			{&#xD;&#xA;    				//console.log("ERROR:", err, file);&#xD;&#xA;    			},&#xD;&#xA;    			complete: function()&#xD;&#xA;    			{&#xD;&#xA;    				//console.log("Done with all files");&#xD;&#xA;    			}&#xD;&#xA;    		});&#xD;&#xA;    		}&#xD;&#xA;        });&#xD;&#xA;    	&#xD;&#xA;    	function displayHTMLTable(results) {&#xD;&#xA;        var table = "<table class='table table-bordered' width='90%'>";&#xD;&#xA;        var data = results.data;&#xD;&#xA;        var size = -1;&#xD;&#xA;    	var check = 7;&#xD;&#xA;        var header = "<thead><tr>";&#xD;&#xA;        header+= "<th width='120'>Kode Material</th>";&#xD;&#xA;        header+= "<th width='140'>Storage Location</th>";&#xD;&#xA;        header+= "<th width='130'>Movement Type</th>";&#xD;&#xA;        header+= "<th width='130'>Id Indentifier</th>";&#xD;&#xA;        header+= "<th width='120'>Date Input</th>";&#xD;&#xA;        header+= "<th width='80'>Netto</th>";&#xD;&#xA;        header+= "<th width='50'>Unit</th>"; &#xD;&#xA;    	header+= "<th width='80'>Payroll</th>"; &#xD;&#xA;        header+= "<th><input type='checkbox' id='mycheckbox1' name='mycheckbox1' ></th>";&#xD;&#xA;        header+= "</tr></thead>";&#xD;&#xA;        table += header;&#xD;&#xA;        table+="<tbody>";&#xD;&#xA;        for (i = 1; i < data.length; i++) {&#xD;&#xA;            table += "<tr>";&#xD;&#xA;            var row = data[i];&#xD;&#xA;            var cells = row.join(",").split(",");&#xD;&#xA;            if (cells.length < size) continue;&#xD;&#xA;            else if (cells.length > size) size = cells.length;&#xD;&#xA;    		if (cells.length > check){&#xD;&#xA;    			alert('Data Yang Anda Masukkan Salah');&#xD;&#xA;    		}&#xD;&#xA;    		else{&#xD;&#xA;            for (j = 0; j < cells.length; j++) {&#xD;&#xA;    		var a = 1.000;&#xD;&#xA;          	var b = 10.000;&#xD;&#xA;          	var c = 20.000;&#xD;&#xA;          	var d = 45.000;&#xD;&#xA;          	var callback1 = '10.000';&#xD;&#xA;          	var callback2 = '20.000';&#xD;&#xA;          	var callback3 = '37.500';&#xD;&#xA;          	var callback4 = '45.000';&#xD;&#xA;          	table += "<td>";&#xD;&#xA;            table += cells[j];&#xD;&#xA;            table += "</td>";&#xD;&#xA;    		}&#xD;&#xA;    		if (cells[5]> a && cells[5] <b){&#xD;&#xA;    			table += "<td>"+ callback1 +"</td>"&#xD;&#xA;    		}&#xD;&#xA;    		else if (cells[5]> b && cells[5] <c){&#xD;&#xA;    			table += "<td>"+ callback2 +"</td>"&#xD;&#xA;    		}&#xD;&#xA;    		else if (cells[5]> c && cells[5] <d){&#xD;&#xA;    			table += "<td>"+ callback3 +"</td>"&#xD;&#xA;    		}&#xD;&#xA;    		table += "<td><input type='checkbox' id='mycheckbox' name='mycheckbox'></td>"&#xD;&#xA;            table += "</tr>";  &#xD;&#xA;    		}&#xD;&#xA;        }&#xD;&#xA;        table+="</tbody>";&#xD;&#xA;        table += "</table>";&#xD;&#xA;        $("#parsed_csv_list").html(table);&#xD;&#xA;    	&#xD;&#xA;    }   &#xD;&#xA;    });