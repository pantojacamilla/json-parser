    var svg = d3.select("svg");&#xD;&#xA;    d3.select("button").on("click", update);&#xD;&#xA;    let color = d3.scaleOrdinal().range(d3.schemeAccent);&#xD;&#xA;    let data;&#xD;&#xA;    update();&#xD;&#xA;    function update() {&#xD;&#xA;      updateData();&#xD;&#xA;      updateNodes();&#xD;&#xA;    }&#xD;&#xA;    function updateData() {&#xD;&#xA;      let numNodes = ~~(Math.random() * 4 + 10);&#xD;&#xA;      data = d3.range(numNodes).map(function(d) {&#xD;&#xA;        return {&#xD;&#xA;          size: ~~(Math.random() * 20 + 3),&#xD;&#xA;          x: ~~(Math.random() * 600),&#xD;&#xA;          y: ~~(Math.random() * 200)&#xD;&#xA;        };&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    function updateNodes() {&#xD;&#xA;      var node = svg.selectAll(".node").data(data);&#xD;&#xA;      node.exit().remove();&#xD;&#xA;      node&#xD;&#xA;        .enter()&#xD;&#xA;        .append("g")&#xD;&#xA;        .classed("node", true)&#xD;&#xA;        .append("circle")&#xD;&#xA;        .classed("outer", true)&#xD;&#xA;        .attr("fill", d => color(d.size))&#xD;&#xA;        .attr("opacity", 0.5)&#xD;&#xA;        .attr("r", d => d.size * 2)&#xD;&#xA;        .attr("cx", d => d.x)&#xD;&#xA;        .attr("cy", d => d.y)&#xD;&#xA;        .select(function() { return this.parentNode; }) //needs an old style function for this reason:  https://stackoverflow.com/questions/28371982/what-does-this-refer-to-in-arrow-functions-in-es6 .select(()=> this.parentNode) won't work&#xD;&#xA;        .append("circle")&#xD;&#xA;        .classed("inner", true)&#xD;&#xA;        .attr("fill", d => color(d.size))&#xD;&#xA;        .attr("r", d => d.size)&#xD;&#xA;        .attr("cx", d => d.x)&#xD;&#xA;        .attr("cy", d => d.y)&#xD;&#xA;        .select(function() { return this.parentNode; })&#xD;&#xA;        .append("text")&#xD;&#xA;        .attr("x", d => d.x)&#xD;&#xA;        .attr("y", d => d.y)&#xD;&#xA;        .attr("text-anchor", "middle")&#xD;&#xA;        .text(d => d.size);&#xD;&#xA;      node&#xD;&#xA;        .select("circle.inner")&#xD;&#xA;        .transition()&#xD;&#xA;        .duration(1000)&#xD;&#xA;        .attr("fill", d => color(d.size))&#xD;&#xA;        .attr("r", d => d.size)&#xD;&#xA;        .attr("cx", d => d.x)&#xD;&#xA;        .attr("cy", d => d.y);&#xD;&#xA;      node&#xD;&#xA;        .select("circle.outer")&#xD;&#xA;        .transition()&#xD;&#xA;        .duration(1000)&#xD;&#xA;        .attr("fill", d => color(d.size))&#xD;&#xA;        .attr("opacity", 0.5)&#xD;&#xA;        .attr("r", d => d.size * 2)&#xD;&#xA;        .attr("cx", d => d.x)&#xD;&#xA;        .attr("cy", d => d.y);&#xD;&#xA;      node&#xD;&#xA;        .select("text")&#xD;&#xA;        .transition()&#xD;&#xA;        .duration(1000)&#xD;&#xA;        .attr("x", d => d.x)&#xD;&#xA;        .attr("y", d => d.y)&#xD;&#xA;        .attr("text-anchor", "middle")&#xD;&#xA;        .text(d => d.size);&#xD;&#xA;    }