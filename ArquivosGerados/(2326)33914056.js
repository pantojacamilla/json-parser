    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;    	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>&#xD;&#xA;    	<script src="js/bootstrap.min.js"></script>&#xD;&#xA;    	&#xD;&#xA;    	<style type="text/css">&#xD;&#xA;    		#admin_div&#xD;&#xA;    		{&#xD;&#xA;    			position: absolute;&#xD;&#xA;    			width: 80%;&#xD;&#xA;    			height: 80%;&#xD;&#xA;    			border: 2px solid white;&#xD;&#xA;    			border-radius: 10px;&#xD;&#xA;    			background-color: #D9D9D9;&#xD;&#xA;    			z-index: 1;&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		h1 { margin-left: 15px; }&#xD;&#xA;    		&#xD;&#xA;    		#main&#xD;&#xA;    		{&#xD;&#xA;    			height: 100%;&#xD;&#xA;    			width: 100%;&#xD;&#xA;    			z-index: 0;&#xD;&#xA;    		}&#xD;&#xA;    	</style>&#xD;&#xA;    	<script>&#xD;&#xA;    	$(document).ready&#xD;&#xA;    	(&#xD;&#xA;    		function()&#xD;&#xA;    		{&#xD;&#xA;    			var color = 1;&#xD;&#xA;    			&#xD;&#xA;    			$('#main').click&#xD;&#xA;    			(&#xD;&#xA;    				function()&#xD;&#xA;    				{&#xD;&#xA;    					if (color == 1)&#xD;&#xA;    					{&#xD;&#xA;    						$(this).css("background-color", "green");&#xD;&#xA;    						color = 2;&#xD;&#xA;    					} &#xD;&#xA;    					else if (color == 2)&#xD;&#xA;    					{&#xD;&#xA;    						$(this).css("background-color", "black");&#xD;&#xA;    						color = 1;	&#xD;&#xA;    					}&#xD;&#xA;    				}&#xD;&#xA;    			);&#xD;&#xA;    		}&#xD;&#xA;    	);&#xD;&#xA;    	</script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;    	<div id="main">&#xD;&#xA;    		<div id="admin_div">		&#xD;&#xA;    			<h1>Admin Panel</h1>&#xD;&#xA;    		</div>&#xD;&#xA;    	</div>&#xD;&#xA;    </body>&#xD;&#xA;    </html>