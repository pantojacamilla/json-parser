    <script src="loadingoverlay.js"></script>&#xD;&#xA;    <script src="loadingoverlay.min.js"></script>&#xD;&#xA;    <script src="jquery-1.9.1.min.js"></script>&#xD;&#xA;    <script>&#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;        $("#firstdata").click(function(){&#xD;&#xA;            $("#div1").load("data2.html");&#xD;&#xA;        });&#xD;&#xA;    	 $("#driver").click(function(){&#xD;&#xA;            $("#div1").load("demo_test.txt");&#xD;&#xA;        });&#xD;&#xA;    });&#xD;&#xA;    	// Show full page Loading Overlay&#xD;&#xA;    	&#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;    	$("#firstdata").click(function()&#xD;&#xA;    	{&#xD;&#xA;    	$.LoadingOverlay("show");&#xD;&#xA;    	// Hide it after 3 seconds&#xD;&#xA;    	setTimeout(function(){$.LoadingOverlay("hide");}, 3000);&#xD;&#xA;    });	&#xD;&#xA;    });&#xD;&#xA;    // Show element Loading Overlay&#xD;&#xA;    	&#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;    	$("#driver").click(function()&#xD;&#xA;    	{&#xD;&#xA;    	$("#element").LoadingOverlay("show");&#xD;&#xA;    	// Hide it after 3 seconds&#xD;&#xA;    	setTimeout(function(){$.LoadingOverlay("hide");}, 3000);&#xD;&#xA;    });	&#xD;&#xA;    });&#xD;&#xA;    	&#xD;&#xA;    </script>