    <script type="text/javascript">&#xD;&#xA;    function update_message_body() {&#xD;&#xA;      var file = document.input_form.file.value;&#xD;&#xA;      var awb = document.input_form.awb.value;&#xD;&#xA;      var dtsnr = document.input_form.dtsnr.value;&#xD;&#xA;      var incoterms = document.input_form.incoterms.value;&#xD;&#xA;      var TypeOfGoods = document.input_form.ToG.value;&#xD;&#xA;      var DescriptionOfGoods = document.input_form.DoG.value;&#xD;&#xA;      var quantity = document.input_form.quantity.value;&#xD;&#xA;      var UnitMeasure = document.input_form.um.value;&#xD;&#xA;      var ValueOfGoods = document.input_form.VoG.value;&#xD;&#xA;      var TotalWeight = document.input_form.tw.value;&#xD;&#xA;      var ClearingAgent = document.input_form.ca.value;&#xD;&#xA;      var DEtoCA = document.input_form.DEtoCA.value;&#xD;&#xA;      var CDUNHRD = document.input_form.CDUNHRD.value;&#xD;&#xA;      document.proxy_form.Information.value =&#xD;&#xA;        "\n" + "\n" + "This email is to inform you of the details acquired from new record :" + "\n" + "\t Uploaded Attachment :" + file + "\n" + "\t AWB :" + awb + "\n" + "\t Date and time shipping notification recieved :" + dtsnr + "\n" + "\t Incoterms :" + incoterms + "\n" + "\t Types of Goods :" + TypeOfGoods + "\n" + "\t Description of Goods :" + DescriptionOfGoods + "\n" + "\t Quantity :" + quantity + "\n" + "\t Unit Measure :" + UnitMeasure + "\n" + "\t Value of Goods :" + ValueOfGoods + "\n" + "\t Total Weight :" + TotalWeight + "\n" + "\t Clearing Agent :" + ClearingAgent + "\n" + "\t DE set to Clearing Agent :" + DEtoCA + "\n" + "\t When cargo is delivered to UNHRD :" + CDUNHRD + "\n" + "\n" + "\n" + "\n" + "Sincerely,\n";&#xD;&#xA;    } < /script>