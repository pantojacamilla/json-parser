    var didScroll;&#xD;&#xA;    var lastScrollTop = 0;&#xD;&#xA;    var delta = 5;&#xD;&#xA;    var footerHeight = $('blog-footer').outerHeight();&#xD;&#xA;    &#xD;&#xA;    $(window).scroll(function(event){&#xD;&#xA;      didScroll = true;&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    setInterval(function() {&#xD;&#xA;      if (didScroll) {&#xD;&#xA;        hasScrolled();&#xD;&#xA;        didScroll = false;&#xD;&#xA;      }&#xD;&#xA;    }, 250);&#xD;&#xA;    &#xD;&#xA;    function hasScrolled() {&#xD;&#xA;      var st = $(this).scrollTop();&#xD;&#xA;    &#xD;&#xA;      if(Math.abs(lastScrollTop - st) <= delta) {&#xD;&#xA;        return;&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      if (st > lastScrollTop && st > footerHeight){&#xD;&#xA;    &#xD;&#xA;        $('blog-footer').removeClass('footer-down').addClass('footer-up');&#xD;&#xA;      } else {&#xD;&#xA;    &#xD;&#xA;        if(st + $(window).height() < $(document).height()) {&#xD;&#xA;          $('blog-footer').removeClass('footer-up').addClass('footer-down');&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      lastScrollTop = st;&#xD;&#xA;    }&#xD;&#xA;    <div class="blog-footer footer-down">&#xD;&#xA;      <p>Content</p>&#xD;&#xA;    </div>&#xD;&#xA;    .blog-footer {&#xD;&#xA;      position: fixed;&#xD;&#xA;      width: 100%;&#xD;&#xA;      background: red;&#xD;&#xA;      bottom: 0;&#xD;&#xA;      height: 100px;&#xD;&#xA;    }