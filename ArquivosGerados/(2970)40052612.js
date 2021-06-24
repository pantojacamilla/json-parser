    function displayInfo(nKey) {&#xD;&#xA;    ....var i, xdata, xfilm, xprop;&#xD;&#xA;    ....if(!nKey) return false;&#xD;&#xA;    ....var objFilm;&#xD;&#xA;    ....var imgRef;&#xD;&#xA;    ....//iterate through all object properties; display their attributes&#xD;&#xA;    ....var jqxhr = $.getJSON('dbMovies.json', function(data) {&#xD;&#xA;    ........$.each(data.disc, function(i, xdata) {&#xD;&#xA;    ............if(xdata.key == nKey) {&#xD;&#xA;    ................objFilm = xdata.film;&#xD;&#xA;    ................imgRef = xdata.img;&#xD;&#xA;    ................if(xdata.doc) bkDoc = true;&#xD;&#xA;    ................return false;&#xD;&#xA;    ............}&#xD;&#xA;    ........});....// $.each&#xD;&#xA;    ....})&#xD;&#xA;    .....done(function() {&#xD;&#xA;    ........// objFilm has either a single film object or else an array of film objects&#xD;&#xA;    ........var arInfo = [];&#xD;&#xA;    ........if(!$.isArray(objFilm)) {&#xD;&#xA;    ............var arProps = Object.keys(objFilm);....//absolutely&#xD;&#xA;    ............arProps.forEach(function(item) {&#xD;&#xA;    ................if(item != "ref") {&#xD;&#xA;    ....................arInfo.push(item + ": " + objFilm[item] + "<br>");&#xD;&#xA;    ................} else {&#xD;&#xA;    ....................arInfo.push(item + ": <a href=" + objFilm[item] + " target=_blank>Wikipedia</a>");&#xD;&#xA;    ................}&#xD;&#xA;    ............});&#xD;&#xA;    .......&#xD;&#xA;    ....var w = window.open('', '', 'width = 650, height = 500, resizable');&#xD;&#xA;    ....$(w.document.body).html(arInfo.join(""));&#xD;&#xA;    ....})  // .done&#xD;&#xA;    .......