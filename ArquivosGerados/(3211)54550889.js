    <!-- HTML portion -->    &#xD;&#xA;    <div>    &#xD;&#xA;       <Select id="mapselector" class="custom-select bg-warning">    &#xD;&#xA;         <option >Select Options</option>    &#xD;&#xA;         <option value="asia">Asia</option>     &#xD;&#xA;       </Select>&#xD;&#xA;    </div>&#xD;&#xA;    <div id="asia" class="colors" style="display:none">&#xD;&#xA;     <div id="pin-1" class="box">&#xD;&#xA;      <div id="pin-text1" class="text" value="Islam">&#xD;&#xA;        <p class="h6 pt-3 pr-5">Islamabad</p>&#xD;&#xA;      </div>&#xD;&#xA;     </div>&#xD;&#xA;    <div id="pin-2" class="box">&#xD;&#xA;      <div id="pin-text2" class="text">&#xD;&#xA;       <p class="h6  pt-3 pr-5">Afghan</p>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    <div id="pin-3" class="box">&#xD;&#xA;      <div id="pin-text3" class="text">&#xD;&#xA;        <p class="h6 pt-3 pr-5 ">Delhi</p>&#xD;&#xA;      </div>&#xD;&#xA;     </div> &#xD;&#xA;    </div>&#xD;&#xA;    <script type="text/javascript">    &#xD;&#xA;    $(document).ready(function(){    &#xD;&#xA;      $('.colors').hide();     &#xD;&#xA;      $(function() {&#xD;&#xA;      $('#mapselector').change(function(){&#xD;&#xA;        $('.colors').hide();&#xD;&#xA;        $('.text').hide();&#xD;&#xA;        $('#' + $(this).val()).show();&#xD;&#xA;        $('.box').mouseover(function(){&#xD;&#xA;          $('.text').show();}); &#xD;&#xA;        $('.box').mouseout(function(){&#xD;&#xA;          $('.text').hide();});          &#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    });    &#xD;&#xA;    </script>