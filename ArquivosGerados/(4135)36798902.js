    function createGraph(){&#xD;&#xA;      this.canvas = document.getElementById("graph");&#xD;&#xA;      this.ctx = this.canvas.getContext("2d");&#xD;&#xA;      this.options={};&#xD;&#xA;      this.datasets=[];&#xD;&#xA;      this.options.fontSize=11;&#xD;&#xA;      this.ctx.font=this.options.fontSize+"px Arial";&#xD;&#xA;      this.ctx.textAlign="left";&#xD;&#xA;      this.ctx.textBaseline="middle";&#xD;&#xA;      this.datasetLength=500;&#xD;&#xA;      this.dataset=function(options){&#xD;&#xA;        /*this.strokeColor=options.strokeColor;&#xD;&#xA;            this.signalName=options.signalName;&#xD;&#xA;            this.signalMin=options.signalMin;&#xD;&#xA;            this.signalMax=options.signalMax;&#xD;&#xA;            this.signalUnit=options.signalUnit;*/&#xD;&#xA;        this.data=[];&#xD;&#xA;        this.min;&#xD;&#xA;        this.max;&#xD;&#xA;      };&#xD;&#xA;      this.buildYLabels = function(scaleMin, scaleMax){&#xD;&#xA;        var labels = [];&#xD;&#xA;        var maxLabelWidth=0;&#xD;&#xA;        console.log("--->width "+this.ctx.measureText("-100").width);&#xD;&#xA;        for(i=10;i>=0;i--){&#xD;&#xA;          labels.push((scaleMin+((scaleMax-scaleMin)/10)*i).toString());&#xD;&#xA;          console.log((scaleMin+((scaleMax-scaleMin)/10)*i).toString());&#xD;&#xA;          console.log("->width "+this.ctx.measureText(labels[i]).width);&#xD;&#xA;          if(maxLabelWidth<this.ctx.measureText(labels[i]).width){&#xD;&#xA;            maxLabelWidth=this.ctx.measureText(labels[i]).width;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return {labels: labels,&#xD;&#xA;                maxLabelWidth: maxLabelWidth};&#xD;&#xA;      };&#xD;&#xA;      this.buildXLabels = function(x){&#xD;&#xA;      };&#xD;&#xA;      this.draw = function (){&#xD;&#xA;        var _this=this;&#xD;&#xA;        each(this.datasets,function(dataset, index){&#xD;&#xA;          //plot data&#xD;&#xA;          if(index>0)return;&#xD;&#xA;          //draw scale&#xD;&#xA;          var canvasHeight = _this.canvas.height;&#xD;&#xA;          console.log("canvas height="+canvasHeight);&#xD;&#xA;          var yLabels = _this.buildYLabels(-100, 500);&#xD;&#xA;          var currX = _this.options.fontSize/2;&#xD;&#xA;          var scaleHeight = canvasHeight-_this.options.fontSize*1.5;&#xD;&#xA;          var maxLabelWidth=yLabels.maxLabelWidth;&#xD;&#xA;          console.log(yLabels.maxLabelWidth);&#xD;&#xA;          each(yLabels.labels,function(label, index){&#xD;&#xA;            _this.ctx.fillText(label,0,currX);&#xD;&#xA;            console.log(label);&#xD;&#xA;            currX+=(scaleHeight/10);&#xD;&#xA;          });&#xD;&#xA;          _this.ctx.beginPath();&#xD;&#xA;          _this.ctx.moveTo(maxLabelWidth,0);&#xD;&#xA;          _this.ctx.lineTo(maxLabelWidth,canvasHeight);&#xD;&#xA;          _this.ctx.stroke();&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;      this.addSignal = function(){&#xD;&#xA;        var dataset = new this.dataset({});&#xD;&#xA;        this.datasets.push(dataset);&#xD;&#xA;      };&#xD;&#xA;      this.pushData = function(data){&#xD;&#xA;        var _this=this;&#xD;&#xA;        if(data.length!=this.datasets.length){&#xD;&#xA;          console.error("the number of pushed data is diffrent to the number of datasets!");&#xD;&#xA;          return;&#xD;&#xA;        }&#xD;&#xA;        each(data,function(data, index){&#xD;&#xA;          _this.datasets[index].data.push(data);&#xD;&#xA;          if(_this.datasets[index].data.length>_this.datasetLength){&#xD;&#xA;            _this.datasets[index].data.shift();&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;      this.calculateScaling = function(dataset){&#xD;&#xA;        var range = dataset.max - dataset.min;&#xD;&#xA;        var decStep = Math.pow(10,Math.floor(Math.log10(range)));&#xD;&#xA;        var scaleMin = roundTo(dataset.min/*+(decStep*10)/2*/, decStep);&#xD;&#xA;        var scaleMax = roundTo(dataset.max/*+(decStep*10)/2*/, decStep);&#xD;&#xA;        var scaleStep = (scaleMax - scaleMin)/10;&#xD;&#xA;      };&#xD;&#xA;      var minx=-34, maxx=424;&#xD;&#xA;      var range = maxx - minx;&#xD;&#xA;      var decStep = Math.pow(10, Math.floor(Math.log10(range)));&#xD;&#xA;      var scaleMin = roundTo(minx-(decStep/2), decStep);&#xD;&#xA;      var scaleMax = roundTo(maxx+(decStep/2), decStep);&#xD;&#xA;      var scaleStep = (scaleMax - scaleMin)/10;&#xD;&#xA;      console.log(this.buildYLabels(scaleMin,scaleMax));&#xD;&#xA;      console.log("range="+range);&#xD;&#xA;      console.log("log="+Math.floor(Math.log10(range)));&#xD;&#xA;      console.log("scaleStep="+scaleStep);&#xD;&#xA;      console.log("decStep="+decStep);&#xD;&#xA;      console.log("scaleMin="+scaleMin);&#xD;&#xA;      console.log("scaleMax="+scaleMax);&#xD;&#xA;    }&#xD;&#xA;    graph = new createGraph();&#xD;&#xA;    graph.addSignal();&#xD;&#xA;    graph.addSignal();&#xD;&#xA;    graph.addSignal();&#xD;&#xA;    graph.pushData([1,2,3]);&#xD;&#xA;    graph.pushData([1,2,3]);&#xD;&#xA;    graph.draw();&#xD;&#xA;    function each(array, callback){&#xD;&#xA;      console.log(callback);&#xD;&#xA;      for(i in array){&#xD;&#xA;        callback(array[i], i);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function roundTo(num, to){&#xD;&#xA;      return Math.round(num/to)*to;&#xD;&#xA;    }