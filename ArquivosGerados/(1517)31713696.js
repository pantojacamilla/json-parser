    $('#product-gallery-super').children().click(function(e) {&#xD;&#xA;      e.preventDefault();&#xD;&#xA;      var prodImg = $(this).attr('data-image');&#xD;&#xA;      var imgSrc = $(this).children().attr('src')&#xD;&#xA;      if (imgSrc != 'http://yi.yoga/images/cs.jpg') {&#xD;&#xA;        $(this).addClass("active-thumbnail").siblings().removeClass("active-thumbnail");&#xD;&#xA;        $('.main-image').attr('src', prodImg);&#xD;&#xA;      }&#xD;&#xA;      // to get img anchor index&#xD;&#xA;      var checkforindex = $(this).index() + 1;&#xD;&#xA;      // get image anchor length&#xD;&#xA;      var imglength = $('#product-gallery-super > a').length;&#xD;&#xA;      if (checkforindex > 1 && checkforindex < imglength) {&#xD;&#xA;        $('#prev, #next').removeClass('disabled');&#xD;&#xA;      } else if (checkforindex == 1) {&#xD;&#xA;        $('#next').removeClass('disabled');&#xD;&#xA;        $('#prev').addClass('disabled');&#xD;&#xA;      } else if (checkforindex == imglength) {&#xD;&#xA;        $('#prev').removeClass('disabled');&#xD;&#xA;        $('#next').addClass('disabled');&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    $("#prev").click(function() {&#xD;&#xA;      if ($("#product-gallery-super .active-thumbnail").prev().length != 0) {&#xD;&#xA;        $("#product-gallery-super .active-thumbnail").prev().addClass('active-thumbnail').next().removeClass('active-thumbnail');&#xD;&#xA;        $('.main-image').attr('src', $('#product-gallery-super').find('.active-thumbnail').data('image'));&#xD;&#xA;      }&#xD;&#xA;      // to get img anchor index&#xD;&#xA;      var checkforindex = $('.product-zoom-gallery.active-thumbnail').index() + 1;&#xD;&#xA;      // get image anchor length&#xD;&#xA;      var imglength = $('#product-gallery-super > a').length;&#xD;&#xA;      if (checkforindex == 1) {&#xD;&#xA;        $(this).addClass('disabled');&#xD;&#xA;      } else if (checkforindex < imglength) {&#xD;&#xA;        $("#next").removeClass('disabled');&#xD;&#xA;      }&#xD;&#xA;      return false;&#xD;&#xA;    });&#xD;&#xA;    $("#next").click(function() {&#xD;&#xA;      if ($("#product-gallery-super .active-thumbnail").next().length != 0) {&#xD;&#xA;        $("#product-gallery-super .active-thumbnail").next().addClass('active-thumbnail').prev().removeClass('active-thumbnail');&#xD;&#xA;        $('.main-image').attr('src', $('#product-gallery-super').find('.active-thumbnail').data('image'));&#xD;&#xA;      }&#xD;&#xA;      // to get img anchor index&#xD;&#xA;      var checkforindex = $('.product-zoom-gallery.active-thumbnail').index() + 1;&#xD;&#xA;      // get image anchor length&#xD;&#xA;      var imglength = $('#product-gallery-super > a').length;&#xD;&#xA;      if (checkforindex > 1) {&#xD;&#xA;        $("#prev").removeClass('disabled');&#xD;&#xA;      }&#xD;&#xA;      if (checkforindex == imglength) {&#xD;&#xA;        $(this).addClass('disabled');&#xD;&#xA;      }&#xD;&#xA;      return false;&#xD;&#xA;    });