    var musicCards = [];&#xD;&#xA;    jQuery(document).ready(function() {&#xD;&#xA;       &#xD;&#xA;       jQuery("#searchButton").on("click", function() {&#xD;&#xA;             &#xD;&#xA;            var query = jQuery("#queryInput").val();&#xD;&#xA;         &#xD;&#xA;            if (query != "") {&#xD;&#xA;               loadYoutubeService(query);&#xD;&#xA;                           console.log(query + "");&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    });&#xD;&#xA;    function loadYoutubeService(query) {&#xD;&#xA;        gapi.client.load('youtube', 'v3', function() {&#xD;&#xA;            gapi.client.setApiKey('ADADADADADA');&#xD;&#xA;            search(query);&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    function search(query) {&#xD;&#xA;       &#xD;&#xA;        var request = gapi.client.youtube.search.list({&#xD;&#xA;            part: 'snippet',&#xD;&#xA;            q: query,&#xD;&#xA;             type: 'channel',&#xD;&#xA;            maxResults: 15&#xD;&#xA;        });&#xD;&#xA;        request.execute(function(response) {&#xD;&#xA;           &#xD;&#xA;            jQuery.each(response.items, function(i, item) {&#xD;&#xA;      &#xD;&#xA;                 if (!item['']) {&#xD;&#xA;                    var musicCard = {};&#xD;&#xA;                    musicCard._id = item['snippet']['customUrl'];&#xD;&#xA;                    musicCard.title = item['snippet']['title'];&#xD;&#xA;                  musicCard.linkprofilo = item['snippet']['channelId'];&#xD;&#xA;                    musicCard.url = "https://www.youtube.com/channel/";&#xD;&#xA;                    musicCard.description = item['snippet']['description'];&#xD;&#xA;                    musicCard.immagine = item['snippet']['thumbnails']['high']['url'];&#xD;&#xA;                    musicCards.push(musicCard);&#xD;&#xA;                }&#xD;&#xA;                &#xD;&#xA;                 &#xD;&#xA;            });&#xD;&#xA;     &#xD;&#xA;            renderView();&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    function renderView() {&#xD;&#xA;        var htmlString = "";&#xD;&#xA;        musicCards.forEach(function(musicCard, i) {&#xD;&#xA;            var card = createCard(musicCard._id, musicCard.title, musicCard.description, musicCard.url,musicCard.immagine, musicCard.linkprofilo);&#xD;&#xA;            htmlString += card;&#xD;&#xA;        });&#xD;&#xA;       &#xD;&#xA;       jQuery('#youtube-utente').html(htmlString);&#xD;&#xA;    }&#xD;&#xA;    function createCard(_id, title, description, url, immagine, linkprofilo) {&#xD;&#xA;           var card = &#xD;&#xA;              &#xD;&#xA;            '<div class="card">' +&#xD;&#xA;            '<div class="info">' +&#xD;&#xA;            '<img src="' + immagine + '" alt="' + description + '">' +&#xD;&#xA;            '</div>' +&#xD;&#xA;            '<div class="content">Clicca per selezionare:' +&#xD;&#xA;            '<h3>' + title + '</h3>' +&#xD;&#xA;            '<a class="seleziona" href="' + url +linkprofilo+'">'+ url +linkprofilo+'</a>' +&#xD;&#xA;            '<p>' + description + '</p>' +&#xD;&#xA;            '</div>' +&#xD;&#xA;            '</div>';&#xD;&#xA;        return card;&#xD;&#xA;      &#xD;&#xA;    }