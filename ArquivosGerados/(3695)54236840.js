    $("body").on('DOMSubtreeModified', function () {&#xD;&#xA;        var acc = document.getElementsByClassName("accordion");&#xD;&#xA;        var i;&#xD;&#xA;        for (i = 0; i < acc.length; i++) {&#xD;&#xA;            acc[i].addEventListener("click", function () {&#xD;&#xA;                this.classList.toggle("active");&#xD;&#xA;                var panel = this.nextElementSibling;&#xD;&#xA;                if (panel.style.maxHeight) {&#xD;&#xA;                    panel.style.maxHeight = null;&#xD;&#xA;                } else {&#xD;&#xA;                    panel.style.maxHeight = panel.scrollHeight + "px";&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;    });