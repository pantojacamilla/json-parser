    var preloader;&#xD;&#xA;    function preload(opacity) {&#xD;&#xA;        if(opacity <= 0) {&#xD;&#xA;            showContent();&#xD;&#xA;        }&#xD;&#xA;        else {&#xD;&#xA;            preloader.style.opacity = opacity;&#xD;&#xA;            window.setTimeout(function() { preload(opacity - 0.05) }, 100);&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function showContent() {&#xD;&#xA;        preloader.style.display = 'none';&#xD;&#xA;        document.getElementById('content').style.display = 'block';&#xD;&#xA;    }&#xD;&#xA;    document.addEventListener("DOMContentLoaded", function () {&#xD;&#xA;        preloader = document.getElementById('preloader');&#xD;&#xA;        preload(1);&#xD;&#xA;    });