    //data&#xD;&#xA;    let data = [{ "noOfStudent": 40, "class": "Class 1" }, { "noOfStudent": 30, "class": "Class 2" }, { "noOfStudent": 20, "class": "Class 3" }];&#xD;&#xA;    // set the dimensions and margins of the graph&#xD;&#xA;    var margin = { top: 20, right: 20, bottom: 30, left: 40 },&#xD;&#xA;        width = 960 - margin.left - margin.right,&#xD;&#xA;        height = 500 - margin.top - margin.bottom;&#xD;&#xA;    // set the ranges&#xD;&#xA;    var x = d3.scalePoint().range([0, width]).padding(0.4);&#xD;&#xA;    var y = d3.scaleLinear().range([height, 0]);&#xD;&#xA;    var svg = d3.select("body").append("svg").attr("style", "outline: thin solid red;")&#xD;&#xA;        .attr("width", width + margin.left + margin.right)&#xD;&#xA;        .attr("height", height + margin.top + margin.bottom)&#xD;&#xA;        .append("g")&#xD;&#xA;        .attr("transform",&#xD;&#xA;        "translate(" + margin.left + "," + margin.top + ")");&#xD;&#xA;    // get and format the data&#xD;&#xA;    data.forEach(function (d) {&#xD;&#xA;        d.noOfStudent = +d.noOfStudent;&#xD;&#xA;    });&#xD;&#xA;    // Scale the range of the data in the domains&#xD;&#xA;    x.domain(data.map(function (d) { return d.class; }));&#xD;&#xA;    y.domain([0, d3.max(data, function (d) { return d.noOfStudent; }) * 1.2]);&#xD;&#xA;    // append the rectangles for the bar chart&#xD;&#xA;    svg.selectAll(".bar")&#xD;&#xA;        .data(data)&#xD;&#xA;        .enter().append("circle")&#xD;&#xA;        .attr("class", "bar")&#xD;&#xA;        .attr("cx", function (d) { return x(d.class); })&#xD;&#xA;        .attr("cy", function (d) { return y(d.noOfStudent); })&#xD;&#xA;        .attr("r", function (d) { return d.noOfStudent; })&#xD;&#xA;        .text(function (d) { return d.noOfStudent; })&#xD;&#xA;        .on("click", function (d) {&#xD;&#xA;            d3.select(this).attr('r', d.noOfStudent)&#xD;&#xA;                .style("fill", "lightcoral")&#xD;&#xA;        });&#xD;&#xA;    // add the x Axis&#xD;&#xA;    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));&#xD;&#xA;    // add the y Axis&#xD;&#xA;    svg.append("g").call(d3.axisLeft(y));&#xD;&#xA; 