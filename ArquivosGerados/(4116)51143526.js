    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;    <script>&#xD;&#xA;	var exampleData = {"Series 1": 10, "Series 2": 14, "Series 3": 2, "Series 4": 12};&#xD;&#xA;	&#xD;&#xA;	var BarChart = function(options){&#xD;&#xA;		this.options = options;&#xD;&#xA;		this.canvas = options.canvas;&#xD;&#xA;		this.ctx = this.canvas.getContext("2d");&#xD;&#xA;		this.colors = options.colors;&#xD;&#xA;		&#xD;&#xA;		this.plot = function(){&#xD;&#xA;			var maxValue = 0;&#xD;&#xA;			for (var categ in this.options.data){&#xD;&#xA;				maxValue = Math.max(maxValue,this.options.data[categ]);&#xD;&#xA;			}&#xD;&#xA;			&#xD;&#xA;			var noBars = Object.keys(this.options.data).length;&#xD;&#xA;			var barWidth = (this.canvas.height)/noBars;&#xD;&#xA;			var barIdx = 0;&#xD;&#xA;			&#xD;&#xA;			for (categ in this.options.data){&#xD;&#xA;				var barLength = Math.round(this.canvas.width * this.options.data[categ]/maxValue);&#xD;&#xA;				this.ctx.save();&#xD;&#xA;				alert("plotting series line " + categ);&#xD;&#xA;				this.ctx.fillStyle=this.colors[barIdx%this.colors.length];&#xD;&#xA;				this.ctx.rect(30, barIdx * barWidth, barLength, barWidth);&#xD;&#xA;				this.ctx.fill();&#xD;&#xA;				alert("plotting series value " + categ);&#xD;&#xA;				this.ctx.fillStyle = "#000000";&#xD;&#xA;				this.ctx.font = "24px Georgia";&#xD;&#xA;				this.ctx.textBaseline = "middle";&#xD;&#xA;				this.ctx.fillText(this.options.data[categ],25,barIdx*barWidth + barWidth/2);//will be covered in the loop's next iteration. Why?&#xD;&#xA;				this.ctx.restore();&#xD;&#xA;				barIdx++;&#xD;&#xA;			}&#xD;&#xA;		}&#xD;&#xA;	}&#xD;&#xA;	&#xD;&#xA;	function init()	{&#xD;&#xA;		var myCanvas = document.getElementById("myCanvas");&#xD;&#xA;		myCanvas.width = 800;&#xD;&#xA;		myCanvas.height = 300;&#xD;&#xA;		var ctx = myCanvas.getContext("2d");&#xD;&#xA;		var myBarChart = new BarChart({&#xD;&#xA;				canvas:myCanvas,&#xD;&#xA;				seriesName:"Example Series",&#xD;&#xA;				padding:40,&#xD;&#xA;				data:exampleData,&#xD;&#xA;				colors:["#D1E3F3","#D1E3F3","#D1E3F3","#D1E3F3"]});&#xD;&#xA;		myBarChart.plot();&#xD;&#xA;	}&#xD;&#xA;	document.addEventListener("DOMContentLoaded", init, false);&#xD;&#xA;    </script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>	&#xD;&#xA;	    <canvas id="myCanvas"></canvas>&#xD;&#xA;    </body>&#xD;&#xA;    </html>