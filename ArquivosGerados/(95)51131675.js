    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>&#xD;&#xA;        &#xD;&#xA;    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>&#xD;&#xA;        &#xD;&#xA;    <!-- Latest compiled and minified Bootstrap CSS -->&#xD;&#xA;    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />&#xD;&#xA;        &#xD;&#xA;    <!-- Latest compiled Bootstrap JavaScript -->&#xD;&#xA;    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>&#xD;&#xA;    <label class="checkbox">&#xD;&#xA;      @{&#xD;&#xA;        var imageSrc = Server.MapPath("~/Content/Images/1.jpg");&#xD;&#xA;       }&#xD;&#xA;      <a href="#" data-toogle="tooltip" title="<img src='@imageSrc'/>">&#xD;&#xA;        Style no. 1&#xD;&#xA;      </a>&#xD;&#xA;    </label>