    $(document).ready(function() {&#xD;&#xA;        var contPrincipalLastTwitter = '<div class="principalSeeTwitter">' +&#xD;&#xA;            '<h1>Welcome!</h1>' +&#xD;&#xA;            '<div class="seeTweets"><select>';&#xD;&#xA;        var count = 0;&#xD;&#xA;        $.get({           &#xD;&#xA;            url:'scriptPHP.php',&#xD;&#xA;            type: 'GET',&#xD;&#xA;            data: { usUsers: 'usuarios'},&#xD;&#xA;            succes:&#xD;&#xA;                function (response) {&#xD;&#xA;                    contPrincipalLastTwitter += '<option value =' + objt + '>' + response + '</option>';&#xD;&#xA;                    count++;&#xD;&#xA;                },&#xD;&#xA;            error:&#xD;&#xA;                function (e) {&#xD;&#xA;                    console.log(e.responseType);&#xD;&#xA;                   );&#xD;&#xA;                }&#xD;&#xA;        });&#xD;&#xA;        console.log(count);&#xD;&#xA;        contPrincipalLastTwitter += '</select></div></div>';&#xD;&#xA;        $(document.body).append(contPrincipalLastTwitter);&#xD;&#xA;    });