    (function(global, $){&#xD;&#xA;      $('.gallery-items').imagelistexpander({&#xD;&#xA;        prefix: "gallery-"&#xD;&#xA;      });&#xD;&#xA;    })(this, jQuery)&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $('.slidewrap').carousel({&#xD;&#xA;        slider: '.slider',&#xD;&#xA;        slide: '.slide',&#xD;&#xA;        slideHed: '.slidehed',&#xD;&#xA;        nextSlide : '.next',&#xD;&#xA;        prevSlide : '.prev',&#xD;&#xA;        addPagination: false,&#xD;&#xA;        addNav : false,&#xD;&#xA;        speed: 1000 // ms.&#xD;&#xA;      });&#xD;&#xA;    });