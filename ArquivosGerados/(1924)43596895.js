    var numbers = document.querySelectorAll(".clicked");&#xD;&#xA;    var letters = document.querySelectorAll(".border");&#xD;&#xA;    numbers.forEach(function(box, index) {&#xD;&#xA;    box.addEventListener("click", function() {&#xD;&#xA;    letters.forEach(function(box) {&#xD;&#xA;      box.classList.remove("showBorder");&#xD;&#xA;    });&#xD;&#xA;    if($( window ).width() > 768){&#xD;&#xA;    var info = document.getElementsByClassName('box-tip')[0];&#xD;&#xA;    if (index > 2) {&#xD;&#xA;      info.style.left = 11 + ((index - 3) * 45) + 'px';&#xD;&#xA;    }&#xD;&#xA;    else {&#xD;&#xA;    info.style.left = 0 + 'px';&#xD;&#xA;    }&#xD;&#xA;    info.style.visibility = 'visible';&#xD;&#xA;    letters[index].classList.add("showBorder");&#xD;&#xA;    }&#xD;&#xA;    else {&#xD;&#xA;    &#xD;&#xA;    info.style.left = 0 + 'px';&#xD;&#xA;    &#xD;&#xA;    info.style.visibility = 'visible';&#xD;&#xA;    letters[index].classList.add("showBorder");&#xD;&#xA;    }&#xD;&#xA;   &#xD;&#xA;    });&#xD;&#xA;  &#xD;&#xA;      $(document).on("click", '.clicked', function(){&#xD;&#xA;        $('.clicked').removeClass('selected');&#xD;&#xA;        $(this).addClass('selected');&#xD;&#xA;    });&#xD;&#xA;    });