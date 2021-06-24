    function displayGraph(id, data, width, height, interpolation, animate, updateDelay, transitionDelay) {&#xD;&#xA;      var margin = {&#xD;&#xA;          top: 30,&#xD;&#xA;          right: 20,&#xD;&#xA;          bottom: 30,&#xD;&#xA;          left: 30&#xD;&#xA;        },&#xD;&#xA;        width = width - margin.left - margin.right,&#xD;&#xA;        height = height - margin.top - margin.bottom;&#xD;&#xA;      var graph = d3.select(id)&#xD;&#xA;        .append("svg:svg")&#xD;&#xA;        .attr("width", width + margin.left + margin.right)&#xD;&#xA;        .attr("height", height + margin.top + margin.bottom)&#xD;&#xA;        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");&#xD;&#xA;      var x = d3.scale.linear().domain([0, data.length]).range([-data.length, width]);&#xD;&#xA;      var y = d3.scale.linear().domain([0, d3.max(data, function(d) {&#xD;&#xA;        return d.lr&#xD;&#xA;      })]).range([height, 0]);&#xD;&#xA;      var y2 = d3.scale.linear().domain([0, d3.max(data, function(d) {&#xD;&#xA;        return d.loss&#xD;&#xA;      })]).range([height, 0]);&#xD;&#xA;      var xAxis = d3.svg.axis().scale(x)&#xD;&#xA;        .orient("bottom").ticks(10);&#xD;&#xA;      var yAxis = d3.svg.axis().scale(y)&#xD;&#xA;        .orient("left").ticks(10);&#xD;&#xA;      var line = d3.svg.line()&#xD;&#xA;        .x(function(d, i) {&#xD;&#xA;          return x(i);&#xD;&#xA;        })&#xD;&#xA;        .y(function(d) {&#xD;&#xA;          return y(d.lr);&#xD;&#xA;        })&#xD;&#xA;        .interpolate(interpolation)&#xD;&#xA;      graph.append("svg:path").attr("d", line(data)).attr('stroke', function(d) {&#xD;&#xA;        return "blue"&#xD;&#xA;      });&#xD;&#xA;      graph.append("g") // Add the X Axis&#xD;&#xA;        .attr('stroke', function(d) {&#xD;&#xA;          return "steelblue"&#xD;&#xA;        })&#xD;&#xA;        .attr("class", "x axis")&#xD;&#xA;        .attr("transform", "translate(0," + height + ")")&#xD;&#xA;        .call(xAxis);&#xD;&#xA;      graph.append("g") // Add the Y Axis&#xD;&#xA;        .attr('stroke', function(d) {&#xD;&#xA;          return "steelblue"&#xD;&#xA;        })&#xD;&#xA;        .attr("class", "y axis")&#xD;&#xA;        .call(yAxis);&#xD;&#xA;      function redrawWithAnimation() {&#xD;&#xA;        graph.selectAll("path")&#xD;&#xA;          .data([data])&#xD;&#xA;          .attr("transform", "translate(" + x(1) + ")")&#xD;&#xA;          .attr("d", line)&#xD;&#xA;          .transition()&#xD;&#xA;          .ease("linear")&#xD;&#xA;          .duration(transitionDelay)&#xD;&#xA;          .attr("transform", "translate(" + x(0) + ")");&#xD;&#xA;      }&#xD;&#xA;      function redrawWithoutAnimation() {&#xD;&#xA;        graph.selectAll("path")&#xD;&#xA;          .data([data])&#xD;&#xA;          .attr("d", line);&#xD;&#xA;      }&#xD;&#xA;      setInterval(function() {&#xD;&#xA;        if (animate) {&#xD;&#xA;          redrawWithAnimation();&#xD;&#xA;        } else {&#xD;&#xA;          redrawWithoutAnimation();&#xD;&#xA;        }&#xD;&#xA;      }, updateDelay);&#xD;&#xA;    } //displayGraph&#xD;&#xA;    var data = [];&#xD;&#xA;    var dataIn = [{&#xD;&#xA;        "progress": 42.3,&#xD;&#xA;        "words": 2116,&#xD;&#xA;        "lr": 0.288598,&#xD;&#xA;        "loss": 4.07032,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 44,&#xD;&#xA;        "words": 2197,&#xD;&#xA;        "lr": 0.279892,&#xD;&#xA;        "loss": 4.06091,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 45.7,&#xD;&#xA;        "words": 2279,&#xD;&#xA;        "lr": 0.27161,&#xD;&#xA;        "loss": 4.053332,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 46.6,&#xD;&#xA;        "words": 2364,&#xD;&#xA;        "lr": 0.267103,&#xD;&#xA;        "loss": 4.052618,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 49.1,&#xD;&#xA;        "words": 2449,&#xD;&#xA;        "lr": 0.254353,&#xD;&#xA;        "loss": 4.055149,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 50.9,&#xD;&#xA;        "words": 2532,&#xD;&#xA;        "lr": 0.245493,&#xD;&#xA;        "loss": 4.057263,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 52.7,&#xD;&#xA;        "words": 2617,&#xD;&#xA;        "lr": 0.236479,&#xD;&#xA;        "loss": 4.059458,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 57,&#xD;&#xA;        "words": 2833,&#xD;&#xA;        "lr": 0.215139,&#xD;&#xA;        "loss": 4.056543,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 58.8,&#xD;&#xA;        "words": 2920,&#xD;&#xA;        "lr": 0.205817,&#xD;&#xA;        "loss": 4.03259,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 61.5,&#xD;&#xA;        "words": 3046,&#xD;&#xA;        "lr": 0.192411,&#xD;&#xA;        "loss": 3.980249,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 64.2,&#xD;&#xA;        "words": 3175,&#xD;&#xA;        "lr": 0.178891,&#xD;&#xA;        "loss": 3.914494,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 66,&#xD;&#xA;        "words": 3262,&#xD;&#xA;        "lr": 0.170031,&#xD;&#xA;        "loss": 3.905593,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 67.8,&#xD;&#xA;        "words": 3345,&#xD;&#xA;        "lr": 0.161171,&#xD;&#xA;        "loss": 3.912257,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "progress": 69.4,&#xD;&#xA;        "words": 3425,&#xD;&#xA;        "lr": 0.152928,&#xD;&#xA;        "loss": 3.917797,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "progress": 71,&#xD;&#xA;        "words": 3499,&#xD;&#xA;        "lr": 0.145031,&#xD;&#xA;        "loss": 3.922638,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 72.8,&#xD;&#xA;        "words": 3587,&#xD;&#xA;        "lr": 0.136055,&#xD;&#xA;        "loss": 3.927278,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "progress": 75.4,&#xD;&#xA;        "words": 3714,&#xD;&#xA;        "lr": 0.123112,&#xD;&#xA;        "loss": 3.932528,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 77.1,&#xD;&#xA;        "words": 3799,&#xD;&#xA;        "lr": 0.114638,&#xD;&#xA;        "loss": 3.919754,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }, {&#xD;&#xA;        "progress": 78.9,&#xD;&#xA;        "words": 3885,&#xD;&#xA;        "lr": 0.105701,&#xD;&#xA;        "loss": 3.877759,&#xD;&#xA;        "eta": "0h0m"&#xD;&#xA;      }&#xD;&#xA;    ]&#xD;&#xA;    // display&#xD;&#xA;    displayGraph("#graph1", dataIn, 600, 200, "basis", true, 750, 1500); //linear&#xD;&#xA;    // update data&#xD;&#xA;    setInterval(function() {&#xD;&#xA;      var v = dataIn.shift();&#xD;&#xA;      if (v) dataIn.push(v);&#xD;&#xA;    }, 1000);