    HTML&#xD;&#xA;    <div class="groupcontainer">&#xD;&#xA;      <div class="form-group" style="width:30%;    display: inline-block;">&#xD;&#xA;        <label for="">SCHOOL</label>&#xD;&#xA;        <span class="form-subtext">PARAGRAPH</span>&#xD;&#xA;        <select class="select-box" id="cmbSchool" multiple="multiple" data-placeholder="Okul Seçiniz." style="margin-bottom: 200px;position: fixed"></select>&#xD;&#xA;      </div>&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <a href="#" class="x" value="Add">&#xD;&#xA;          <div class="inner">&#xD;&#xA;            <i class="icon icon-plus"></i>&#xD;&#xA;            <span class="text">Add</span>&#xD;&#xA;          </div>&#xD;&#xA;        </a>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    <div class="button-box" style="vertical-align:bottom;">&#xD;&#xA;      <div class="row">&#xD;&#xA;        <div class="col-sm-6 right" style="margin: 0;">&#xD;&#xA;          <button href="#" class="btn btn-midi" type="submit">Save</button>&#xD;&#xA;        </div>&#xD;&#xA;        &#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    JS&#xD;&#xA;    &#xD;&#xA;    $('.x').click(function() {&#xD;&#xA;      $('.button-box').animate({&#xD;&#xA;        'marginTop': "+=50px"&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $(".x").click(function() {&#xD;&#xA;        var target = $(this).closest(".groupcontainer");&#xD;&#xA;        target.clone(true, true).appendTo(target.parent());&#xD;&#xA;      });&#xD;&#xA;    });