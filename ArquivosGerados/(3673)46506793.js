    <p id="contents">asdasdsa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis placeat asperiores veritatis excepturi sunt iste ipsum, aspernatur, nam facilis consectetur.</p>&#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;      $('.btnNext').click(function(e){&#xD;&#xA;        e.preventDefault();&#xD;&#xA;        $(this).closest('.wrap').hide(200).next().show(201);&#xD;&#xA;      });&#xD;&#xA;      $('.start').click(function(e){&#xD;&#xA;        e.preventDefault();&#xD;&#xA;        $('#container').hide();&#xD;&#xA;        $('#contents').fadeIn();&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    .hidden{&#xD;&#xA;      display:none;&#xD;&#xA;    }&#xD;&#xA;    #container{&#xD;&#xA;      border: solid 4px black;&#xD;&#xA;      position: fixed;&#xD;&#xA;      top:50%;&#xD;&#xA;      left:50%;&#xD;&#xA;      transform: translate(-50%,-50%);&#xD;&#xA;      }&#xD;&#xA;    #contents{&#xD;&#xA;      display:none;&#xD;&#xA;    }