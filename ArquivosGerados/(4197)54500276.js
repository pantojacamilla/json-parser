    $(document).ready(function(){&#xD;&#xA;    &#xD;&#xA;    var slideIndex = 1;&#xD;&#xA;    showSlides(slideIndex);&#xD;&#xA;    &#xD;&#xA;    // Next/previous controls&#xD;&#xA;    function plusSlides(n) {&#xD;&#xA;      showSlides(slideIndex += n);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    // Thumbnail image controls&#xD;&#xA;    function currentSlide(n) {&#xD;&#xA;      showSlides(slideIndex = n);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function showSlides(n) {&#xD;&#xA;      var i;&#xD;&#xA;      var slides = document.getElementsByClassName("mySlides");&#xD;&#xA;      var dots = document.getElementsByClassName("dot");&#xD;&#xA;      if (n > slides.length) {slideIndex = 1} &#xD;&#xA;      if (n < 1) {slideIndex = slides.length}&#xD;&#xA;      for (i = 0; i < slides.length; i++) {&#xD;&#xA;          slides[i].style.display = "none"; &#xD;&#xA;      }&#xD;&#xA;      for (i = 0; i < dots.length; i++) {&#xD;&#xA;          dots[i].className = dots[i].className.replace(" active", "");&#xD;&#xA;      }&#xD;&#xA;      slides[slideIndex-1].style.display = "block"; &#xD;&#xA;      dots[slideIndex-1].className += " active";&#xD;&#xA;    }&#xD;&#xA;        &#xD;&#xA;    });