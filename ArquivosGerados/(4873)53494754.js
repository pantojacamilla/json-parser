    <!DOCTYPE html>&#xD;&#xA;    <html lang="en">&#xD;&#xA;    <head>&#xD;&#xA;        <meta charset="utf-8">&#xD;&#xA;        <script src="https://d3js.org/d3.v4.min.js"></script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;    <div style="width: 600px">&#xD;&#xA;    <form>&#xD;&#xA;        <input type="radio" name="radionbutton" value="1" id="button1"/>Add points</input>&#xD;&#xA;        <input type="radio" name="radionbutton" value="2" id="button2"/>Remove points</input>&#xD;&#xA;    </form>     &#xD;&#xA;    <h3 id="correlation">Two points are needed to calculate r.</h3>&#xD;&#xA;    <script type="text/javascript">&#xD;&#xA;            // Width and height of svg&#xD;&#xA;            var w = 600;&#xD;&#xA;            var h = 400;&#xD;&#xA;            var padding = 15;&#xD;&#xA;          var xmin = -50;&#xD;&#xA;          var xmax = 50;&#xD;&#xA;          var ymin = -30;&#xD;&#xA;          var ymax = 30;&#xD;&#xA;          var button1 = document.getElementById("button1");&#xD;&#xA;          var button2 = document.getElementById("button2");&#xD;&#xA;          var dataset = [];&#xD;&#xA;            var xScale = d3.scaleLinear()&#xD;&#xA;                .domain([xmin, xmax])&#xD;&#xA;                .range([padding, w-padding]);&#xD;&#xA;            var yScale = d3.scaleLinear()&#xD;&#xA;                .domain([ymax, ymin])&#xD;&#xA;                .range([padding, h-padding]);&#xD;&#xA;            var svg = d3.select("body").append("svg")&#xD;&#xA;                .attr("width", w)&#xD;&#xA;                .attr("height", h) &#xD;&#xA;            svg.append("g")&#xD;&#xA;                .attr("transform", "translate(0," + h/2 + ")")&#xD;&#xA;                .call(d3.axisBottom()&#xD;&#xA;                    .scale(xScale)&#xD;&#xA;                    .tickValues([-40,-20,20,40]));&#xD;&#xA;            svg.append("g")&#xD;&#xA;                .attr("transform", "translate(" + w/2 + ",0)")&#xD;&#xA;                .call(d3.axisLeft()&#xD;&#xA;                    .scale(yScale)&#xD;&#xA;                    .tickValues([30,20,10,-10,-20,-30]));&#xD;&#xA;            svg.on("click", function() {&#xD;&#xA;                if (button1.checked) {&#xD;&#xA;                    var coords = d3.mouse(this);&#xD;&#xA;                    console.log(coords)&#xD;&#xA;                    dataset.push({x: coords[0], y: coords[1]})&#xD;&#xA;                    svg.append("circle")&#xD;&#xA;                        .attr("cx", coords[0])  &#xD;&#xA;                        .attr("cy", coords[1])&#xD;&#xA;                        .attr("r", 4)&#xD;&#xA;                        .attr("fill", 'red');&#xD;&#xA;                    d3.select("#correlation")&#xD;&#xA;                        .text(correlation(dataset));&#xD;&#xA;                }&#xD;&#xA;                else if (button2.checked) &#xD;&#xA;                {&#xD;&#xA;                    var coords = d3.mouse(this);&#xD;&#xA;                    console.log(coords)&#xD;&#xA;                    var index = dataset.indexOf(coords);&#xD;&#xA;                    if (index > -1) {&#xD;&#xA;                      dataset.splice(index, 1);&#xD;&#xA;                    }&#xD;&#xA;                    d3.select("#correlation")&#xD;&#xA;                      .text(correlation(dataset));&#xD;&#xA;                }&#xD;&#xA;            })&#xD;&#xA;            function correlation(dataset) {&#xD;&#xA;                if (dataset.length < 2) {&#xD;&#xA;                    return "We need at least two points."&#xD;&#xA;                }&#xD;&#xA;                else {&#xD;&#xA;                    var top = 0&#xD;&#xA;                    var bottom1 = 0&#xD;&#xA;                    var bottom2 = 0&#xD;&#xA;                    var meanx = d3.mean(dataset, function(d) { return xScale.invert(d.x);})&#xD;&#xA;                    var meany = d3.mean(dataset, function(d) { return yScale.invert(d.y);})&#xD;&#xA;                    for (i = 0; i < dataset.length; i++) {&#xD;&#xA;                        var x = xScale.invert(dataset[i].x)&#xD;&#xA;                        var y = yScale.invert(dataset[i].y)&#xD;&#xA;                        top += (x-meanx)*(y-meany)&#xD;&#xA;                        bottom1 += Math.pow(x-meanx,2)&#xD;&#xA;                        bottom2 += Math.pow(y-meany,2)&#xD;&#xA;                    }&#xD;&#xA;                    return "r: " + (top/(Math.sqrt(bottom1)*Math.sqrt(bottom2))).toFixed(2)&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        </script>&#xD;&#xA;    </body>