    $('.toggle').click(function(e) {&#xD;&#xA;            e.preventDefault();&#xD;&#xA;            var $this = $(this);&#xD;&#xA;            if ($this.next().hasClass('show')) {&#xD;&#xA;                $this.next().removeClass('show');&#xD;&#xA;                $this.next().slideUp(350);&#xD;&#xA;            } else {&#xD;&#xA;                $this.parent().parent().find('li .inner').removeClass('show');&#xD;&#xA;                $this.parent().parent().find('li .inner').slideUp(350);&#xD;&#xA;                $this.next().toggleClass('show');&#xD;&#xA;                $this.next().slideToggle(350);&#xD;&#xA;            }&#xD;&#xA;        });