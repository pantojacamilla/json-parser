    /**&#xD;&#xA;    *  Javascript Carousel&#xD;&#xA;    *  Author: Yasin Yaqoobi&#xD;&#xA;    *  Project Goal: Build a really simple slider using javascript timer and css transition. &#xD;&#xA;    *  Date: 07/09/16&#xD;&#xA;    **/&#xD;&#xA;    var Charts = (function(){&#xD;&#xA;    var ctx; &#xD;&#xA;    var canvas; &#xD;&#xA;    var legendsHeight = 50; &#xD;&#xA;    var yLabelsWidth = 100;&#xD;&#xA;    var scaleRatio; &#xD;&#xA;    function init(canvas, chart){&#xD;&#xA;    	setupCanvas(canvas); &#xD;&#xA;    	setScaleRatio(chart);&#xD;&#xA;    	if (chart.type.localeCompare('HorizontalBar') != -1){&#xD;&#xA;    		drawHorizontalChart(chart);&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    function drawHorizontalChart(chart){&#xD;&#xA;    	var canvasHeight = $(canvas).outerHeight();&#xD;&#xA;    	var canvaswidth = $(canvas).outerWidth(); &#xD;&#xA;    	var marginRatio = (canvasHeight - 2 * legendsHeight) / chart.data.labels.length * 0.2; &#xD;&#xA;    	var barHeight = ((canvasHeight - 2 * legendsHeight) / chart.data.labels.length) - marginRatio; &#xD;&#xA;    		&#xD;&#xA;    	ctx.beginPath();&#xD;&#xA;    	ctx.moveTo(yLabelsWidth, legendsHeight);   // (30, 15)&#xD;&#xA;    	ctx.lineTo(yLabelsWidth, canvasHeight - legendsHeight); // (30,385)&#xD;&#xA;    	ctx.lineTo(canvaswidth, canvasHeight - legendsHeight); // (1000,385)&#xD;&#xA;    	ctx.stroke();&#xD;&#xA;    	ctx.font = "16px serif";&#xD;&#xA;    	ctx.fillText(chart.data.datasets[0].label, (canvaswidth - yLabelsWidth)/2, legendsHeight / 2 );&#xD;&#xA;    	var position = {x:yLabelsWidth,y:legendsHeight};&#xD;&#xA;    	for (var i = chart.data.labels.length-1; i >= 0; i--){&#xD;&#xA;    		ctx.fillStyle = chart.data.datasets[0].backgroundColor[i]; &#xD;&#xA;    		for (var n = 20; n < scaleRatio * chart.data.datasets[0].data[i]; n+=1){&#xD;&#xA;    		(function (ratio){&#xD;&#xA;    			setTimeout(function(){&#xD;&#xA;    				console.log(ratio);&#xD;&#xA;    				ctx.fillRect(position.x,position.y, ratio, barHeight);&#xD;&#xA;    			}, 1000);&#xD;&#xA;    		})(n);&#xD;&#xA;    	}&#xD;&#xA;    		position.y += marginRatio + barHeight; &#xD;&#xA;    		console.log('this is positionY ' + position.y);&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    function setScaleRatio(chart){&#xD;&#xA;    	scaleRatio = chart.data.datasets[0].data.reduce(function(prev,curr){&#xD;&#xA;    		if (prev > curr){&#xD;&#xA;    			return prev; &#xD;&#xA;    		}&#xD;&#xA;    		return curr; &#xD;&#xA;    	});&#xD;&#xA;    	scaleRatio = $(canvas).outerWidth() / (scaleRatio + 10); &#xD;&#xA;    }&#xD;&#xA;    function setupCanvas(canv){&#xD;&#xA;    	canvas = canv;&#xD;&#xA;    	if (canvas.getContext){&#xD;&#xA;    		ctx = canvas.getContext('2d');&#xD;&#xA;    	}&#xD;&#xA;    	console.log(ctx);&#xD;&#xA;    }&#xD;&#xA;    var publicApi = {&#xD;&#xA;    	init: init&#xD;&#xA;    }; &#xD;&#xA;    return publicApi; &#xD;&#xA;    })();&#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;    	var canvas = document.getElementById("myChart");&#xD;&#xA;    	Charts.init(canvas, {&#xD;&#xA;    		type: 'HorizontalBar',&#xD;&#xA;    		data: {&#xD;&#xA;    			labels: ['USA', 'Russia', 'China'], &#xD;&#xA;    			datasets: [&#xD;&#xA;    				{&#xD;&#xA;    					label: 'Progress Chart',&#xD;&#xA;    					backgroundColor: [&#xD;&#xA;    						'rgba(255, 99, 132, 0.2)',&#xD;&#xA;    		                'rgba(54, 162, 235, 0.2)',&#xD;&#xA;    		                'rgba(255, 206, 86, 0.2)'&#xD;&#xA;    	                ], &#xD;&#xA;    	                 borderColor: [&#xD;&#xA;    		                'rgba(255,99,132,1)',&#xD;&#xA;    		                'rgba(54, 162, 235, 1)',&#xD;&#xA;    		                'rgba(255, 206, 86, 1)'&#xD;&#xA;    	                ], &#xD;&#xA;    	                borderWidth: 1,&#xD;&#xA;    	                data: [60, 30, 80]&#xD;&#xA;    	            }&#xD;&#xA;    			]&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;    });