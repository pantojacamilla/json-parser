    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">&#xD;&#xA;    <link rel="stylesheet" type="text/css" href="https://select2.github.io/css/s2-docs.css">&#xD;&#xA;    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.full.min.js"></script>&#xD;&#xA;        &#xD;&#xA;    <div class="good">This one works great (select tag with ajax):</div>&#xD;&#xA;    <select class="select2-ajax">&#xD;&#xA;      <option value="3620194" selected="selected">select2/select2</option>&#xD;&#xA;    </select>&#xD;&#xA;    <br /><br />&#xD;&#xA;    <div class="good">This one works great (regular input):</div>&#xD;&#xA;    <input class="select2-no-ajax" />&#xD;&#xA;    <br /><br />&#xD;&#xA;    <div class="bad">This on is problematic (input with ajax) - ajax request never called:</div>&#xD;&#xA;    <input class="select2-ajax" />