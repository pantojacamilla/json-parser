    $(document).ready(function() {&#xD;&#xA;      $.get(&#xD;&#xA;        "https://www.googleapis.com/youtube/v3/channels",{&#xD;&#xA;          part : 'contentDetails', &#xD;&#xA;          forUsername : 'CHANNEL_NAME',&#xD;&#xA;          key: 'MY_KEY'},&#xD;&#xA;          function(data) {&#xD;&#xA;            $.each( data.items, function( i, item ) {&#xD;&#xA;              console.log(item);&#xD;&#xA;            })&#xD;&#xA;          }&#xD;&#xA;      );&#xD;&#xA;    });