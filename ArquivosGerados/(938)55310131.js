    $.getJSON('/webresource/data/movies.json', function(data) {&#xD;&#xA;      console.log(data);&#xD;&#xA;      var output = '';&#xD;&#xA;      var ele = $('');&#xD;&#xA;      $.each(data, function(key, val) {&#xD;&#xA;        output += '<div class="video_box lazy-background" video-src="' +&#xD;&#xA;          val.video_src + '" video-poster-src="' +&#xD;&#xA;          val.video_poster_src + '">' +&#xD;&#xA;          '<h5>' + val.name + '</h5>' +&#xD;&#xA;          '</div> ';&#xD;&#xA;        var genres = val.genre;&#xD;&#xA;        var genresarray = genres.split(',');&#xD;&#xA;        for (i = 0; i < genresarray.length; i++) {&#xD;&#xA;          var genreelement = $('#' + genresarray[i]);&#xD;&#xA;          genreelement.html(output);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });