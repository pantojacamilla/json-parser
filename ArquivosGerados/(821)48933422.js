    function autocomplete_usuario_debounced(){&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    		  _.debounce(autocomplete_usuario,500);&#xD;&#xA;    &#xD;&#xA;    	} &#xD;&#xA;    &#xD;&#xA;    function autocomplete_usuario(ev) {&#xD;&#xA;        $("#modal-search").css("height","500px");&#xD;&#xA;        if (0 < document.getElementById("buscadora").value.length) {&#xD;&#xA;            document.getElementById("auto_usuario").style.visibility = "visible";&#xD;&#xA;            var a = {&#xD;&#xA;                busqueda: document.getElementById("buscadora").value&#xD;&#xA;            };&#xD;&#xA;            $.ajax({&#xD;&#xA;                type: "POST"&#xD;&#xA;                , url: base_url + "/*********/********/"&#xD;&#xA;                , cache: !1&#xD;&#xA;                , data: a&#xD;&#xA;                , success: function (response) { &#xD;&#xA;                	response = JSON.parse(response);&#xD;&#xA;                	if(response['success']){&#xD;&#xA;                		auto_usuario.innerHTML = response['mensaje'];&#xD;&#xA;                	}&#xD;&#xA;                	else{&#xD;&#xA;                    	Materialize.toast('I am a toast', 2000,'',function(){ window.location.replace("/login");})&#xD;&#xA;                	}&#xD;&#xA;                }&#xD;&#xA;            })&#xD;&#xA;        }&#xD;&#xA;        else{&#xD;&#xA;        	document.getElementById("auto_usuario").style.visibility = "hidden", auto_usuario.innerHTML = "";&#xD;&#xA;        	$("#modal-search").css("height","unset");&#xD;&#xA;        }&#xD;&#xA;    }