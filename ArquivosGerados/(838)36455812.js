    //include http, fs and url module&#xD;&#xA;    var http = require('http'),&#xD;&#xA;        fs = require('fs'),&#xD;&#xA;        path = require('path'),&#xD;&#xA;        url = require('url');&#xD;&#xA;        imageDir = 'C:/Users/Ionut/maguay/node/';&#xD;&#xA;     &#xD;&#xA;    //create http server listening on port 3333&#xD;&#xA;    http.createServer(function (req, res) {&#xD;&#xA;        //use the url to parse the requested url and get the image name&#xD;&#xA;        var query = url.parse(req.url,true).query;&#xD;&#xA;            pic = query.image;&#xD;&#xA;    		console.log(pic);&#xD;&#xA;     &#xD;&#xA;        if (typeof pic === 'undefined') {&#xD;&#xA;            getImages(imageDir, function (err, files) {&#xD;&#xA;                var imageLists = '<ul style="padding: 0; margin: 0;">';&#xD;&#xA;                for (var i=0; i<files.length; i++) {&#xD;&#xA;                    imageLists += '<li style="list-style-type: none;"><a href="/?image=' + files[i] + '"><img src="http://localhost:3333/' + files[i] + '"></li>';&#xD;&#xA;                }&#xD;&#xA;                imageLists += '</ul>';&#xD;&#xA;                res.writeHead(200, {'Content-type':'text/html'});&#xD;&#xA;                res.end(imageLists);&#xD;&#xA;            });&#xD;&#xA;        } else {&#xD;&#xA;            //read the image using fs and send the image content back in the response&#xD;&#xA;            fs.readFile(imageDir + pic, function (err, content) {&#xD;&#xA;                if (err) {&#xD;&#xA;                    res.writeHead(400, {'Content-type':'text/html'})&#xD;&#xA;                    console.log(err);&#xD;&#xA;                    res.end("No such image");    &#xD;&#xA;                } else {&#xD;&#xA;                    //specify the content type in the response will be an image&#xD;&#xA;                    //res.writeHead(200,{'Content-type':'image/png'});&#xD;&#xA;    				 res.writeHead(200, {'Content-type':'text/html'})&#xD;&#xA;    				 //res.writeHead(200, {'Content-type':'text/html'})&#xD;&#xA;    				 //res.write("<link rel='stylesheet' href='style.css?v=123132'>")&#xD;&#xA;    				&#xD;&#xA;    				 var pic_cuv = pic.replace('.png','.txt');&#xD;&#xA;    				fs.readFile(imageDir + pic_cuv, function (errc, cuvcontent) {&#xD;&#xA;    					if (!err) {&#xD;&#xA;    					    res.write("<style>body{margin: 0; padding: 0;} #main-container{ margin: 0 auto; width: 1520px; height: 1000px; display: table-cell; vertical-align: middle;} @media print{* {-webkit-print-color-adjust:exact;}} #words{padding:0; margin: 0; display: inline-block;} #words li{ list-style-type: none;  display: inline-block; width: 33.33%;} #words li img{ width: 100%; }</style>");&#xD;&#xA;    					    var threeWords = cuvcontent.toString();&#xD;&#xA;    						threeWords = threeWords.split('&h=250&w=1000&zc=0&q=100');&#xD;&#xA;    						&#xD;&#xA;    						//res.write(threeWords);&#xD;&#xA;    						res.write("<div id='main-container' style='background: transparent url(data:image/png;base64,"+ new Buffer(content).toString('base64') +") no-repeat center;'>");&#xD;&#xA;    							res.write('<img src="/images/top-band.png"/>');&#xD;&#xA;    							&#xD;&#xA;    							res.write('<img src="data:image/jpeg;base64,/images/top-band.png')&#xD;&#xA;    							res.write(new Buffer(content).toString('base64'));&#xD;&#xA;    							res.write('"/>');&#xD;&#xA;    							&#xD;&#xA;    							res.write('<ul id="words">');&#xD;&#xA;    								for(var i=0; i<threeWords.length; i++){&#xD;&#xA;    									//console.log(threeWords[i]);&#xD;&#xA;    									if(threeWords[i]){&#xD;&#xA;    										res.write('<li>');&#xD;&#xA;    											res.write('<img src="' + threeWords[i] + '&h=250&w=1000&zc=0&q=100"/>');&#xD;&#xA;    										res.write('</li>');&#xD;&#xA;    									}&#xD;&#xA;    								}&#xD;&#xA;    							res.write('</ul>');&#xD;&#xA;    						res.write("</div>");&#xD;&#xA;    					&#xD;&#xA;    							&#xD;&#xA;    						/*res.write('<img src="data:image/jpeg;base64,')&#xD;&#xA;    							res.write(new Buffer(content).toString('base64'));&#xD;&#xA;    							 res.write('"/>');*/&#xD;&#xA;    					}&#xD;&#xA;    					&#xD;&#xA;    					 res.end();&#xD;&#xA;    				});&#xD;&#xA;                   &#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;     &#xD;&#xA;    }).listen(3333);&#xD;&#xA;    console.log("Server running at http://localhost:3333/");&#xD;&#xA;     &#xD;&#xA;    //get the list of png files in the image dir&#xD;&#xA;    function getImages(imageDir, callback) {&#xD;&#xA;        var fileType = '.png',&#xD;&#xA;            files = [], i;&#xD;&#xA;        fs.readdir(imageDir, function (err, list) {&#xD;&#xA;    	&#xD;&#xA;            for(i=0; i<list.length; i++) {&#xD;&#xA;                if(path.extname(list[i]) === fileType) {&#xD;&#xA;                    files.push(list[i]); //store the file name into the array files&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            callback(err, files);&#xD;&#xA;        });&#xD;&#xA;    }