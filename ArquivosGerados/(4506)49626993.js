    function autoSlides() {&#xD;&#xA;      slideIndex++;&#xD;&#xA;      showSlides(slideIndex);&#xD;&#xA;      setTimeout(autoSlides, 10000);&#xD;&#xA;    }&#xD;&#xA;    function plusSlides(n) {&#xD;&#xA;      showSlides(slideIndex += n);&#xD;&#xA;    }&#xD;&#xA;    function currentSlide(n) {&#xD;&#xA;      n--;&#xD;&#xA;      showSlides(slideIndex = n);&#xD;&#xA;    }&#xD;&#xA;    function showSlides(n) {&#xD;&#xA;      var i;&#xD;&#xA;      for (i = 0; i < slides.length; i++) {&#xD;&#xA;        if (slides[i].style.transform == "translateX(100%)") {&#xD;&#xA;          slides[i].style.display = "none";&#xD;&#xA;        } else if (slides[i].style.transform == "translateX(-100%)") {&#xD;&#xA;          slides[i].style.display = "inline-block";&#xD;&#xA;        }&#xD;&#xA;        slides[i].style.transform = "translateX(-100%)";&#xD;&#xA;      }&#xD;&#xA;      if (slideIndex >= slides.length) {&#xD;&#xA;        slideIndex = 0;&#xD;&#xA;      } else if (slideIndex < 0) {&#xD;&#xA;        slideIndex = slides.length;&#xD;&#xA;      }&#xD;&#xA;      slides[slidePrev].style.transform = "translateX(100%)";&#xD;&#xA;      slides[slideIndex].style.transform = "translateX(0)";&#xD;&#xA;      slidePrev = slideIndex;&#xD;&#xA;    }