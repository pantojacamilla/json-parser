    $('.item').click(function(e) {&#xD;&#xA;      var _this = this;&#xD;&#xA;      var topx = _this.offset().top;&#xD;&#xA;      var leftx = _this.offset().left;&#xD;&#xA;      var moveArea = $('#replace').offset().top;&#xD;&#xA;      var moveLeft = $('#replace').offset().left;&#xD;&#xA;      var moveUp = topx - moveArea - 50;&#xD;&#xA;      _this.css('position', 'absolute').css('top', moveUp).css('zIndex', 50).css('left', leftx);&#xD;&#xA;      _this.animate({&#xD;&#xA;        top: -50,&#xD;&#xA;        left: moveLeft&#xD;&#xA;      }, 300)&#xD;&#xA;    });