    let html = [];&#xD;&#xA;    // Fetch data from API - copied link, changed the section and added my API key in &#xD;&#xA;    fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=')&#xD;&#xA;      .then((resp) => resp.json())&#xD;&#xA;      .then(function(data) {&#xD;&#xA;        // Use slice to get just the amount of data you want&#xD;&#xA;        data.results.slice(0, 4).forEach(res => {&#xD;&#xA;          html.push(`<h1>${res.title}</h1>`)&#xD;&#xA;          html.push(`<p>${res.url}</p>`)&#xD;&#xA;          html.push(`<p>${res.abstract}</p>`)&#xD;&#xA;          html.push(`<p>${res.published_date}</p>`)&#xD;&#xA;          html.push(`<image>${res.multimedia[4]}</image>`)&#xD;&#xA;        })&#xD;&#xA;        document.getElementById("res").innerHTML = html.join("")&#xD;&#xA;      })