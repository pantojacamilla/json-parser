    $(document).ready(function (){&#xD;&#xA;        //Add Block Functionality&#xD;&#xA;        $('#add-block .button').click(function(){&#xD;&#xA;        //determin widht of last div&#xD;&#xA;        var lastwidth = $('.pyramid li:last-child .item').width();&#xD;&#xA;        //calculation of next div&#xD;&#xA;        if(lastwidth == null){&#xD;&#xA;        var plus = 90;&#xD;&#xA;        } else {&#xD;&#xA;        var plus = lastwidth + 190;/*not sure why 190 but with this value they &#xD;&#xA;        line up smoothly. Was expecting 0 and 100 for the values.*/&#xD;&#xA;        }&#xD;&#xA;        //create radom number&#xD;&#xA;        var number = Math.floor(Math.random()*9) +1;&#xD;&#xA;        //create radom letter&#xD;&#xA;        function randLetter() {&#xD;&#xA;        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", &#xD;&#xA;        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", &#xD;&#xA;        "z"];&#xD;&#xA;        var letter = letters[Math.floor(Math.random() * letters.length)];&#xD;&#xA;        return letter&#xD;&#xA;        }&#xD;&#xA;        //make letter available globally&#xD;&#xA;        var resultLetter = randLetter();&#xD;&#xA;        //create radom color&#xD;&#xA;        function randColor() {&#xD;&#xA;        var colors = ["green", "yellowgreen", "Chocolate", "goldenrod", &#xD;&#xA;        "cadetblue", "firebrick", "magenta", "LightSeaGreen", "Peru", "Sienna", &#xD;&#xA;        "SlateBlue", "Snow", "Tan", "Skyblue" ];&#xD;&#xA;        var color = colors[Math.floor(Math.random() * colors.length)];&#xD;&#xA;        return color&#xD;&#xA;        }&#xD;&#xA;        //make color available gloabally&#xD;&#xA;        var resultColor = randColor();&#xD;&#xA;        var $block = $('<li><div class="item" style="width:' + plus + 'px; border-bottom: 60px solid ' + resultColor + ' ;"><input id="values" type="text" placeholder=" ' + number + resultLetter + ' " maxlength="2"> </div></li>');&#xD;&#xA;        $('.pyramid').append($block);&#xD;&#xA;        //save values&#xD;&#xA;        let values = [''];&#xD;&#xA;        values.push(number + resultLetter);&#xD;&#xA;        console.log(values);&#xD;&#xA;        });&#xD;&#xA;        //Remove Block Functionality&#xD;&#xA;        $('#remove-block .button').click(function(){&#xD;&#xA;          $('.pyramid li').last().remove();&#xD;&#xA;        }&#xD;&#xA;        )});