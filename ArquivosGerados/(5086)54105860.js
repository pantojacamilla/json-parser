    $(document).ready(function() {&#xD;&#xA;      $("#add").click(function() {&#xD;&#xA;        var loopsData = [&#xD;&#xA;          @foreach($attributes as $attribute) {&#xD;&#xA;            value: '{{ $attribute->id }}',&#xD;&#xA;            text: '{{ $attribute->title }}'&#xD;&#xA;          }&#xD;&#xA;          @unless($loop - > last),&#xD;&#xA;          @endunless&#xD;&#xA;          @endforeach&#xD;&#xA;        ];&#xD;&#xA;        console.log(loopsData);&#xD;&#xA;        var lastField = $("#buildyourform div:last");&#xD;&#xA;        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;&#xD;&#xA;        var fieldWrapper = $("<div class=\"col-md-12 mt-20\" id=\"field" + intId + "\"/>");&#xD;&#xA;        fieldWrapper.data("idx", intId);&#xD;&#xA;        var fName = $("<label for=\"title\">Title</label><input type=\"text\" name=\"title[]\" class=\"form-control\" />");&#xD;&#xA;        var fType = $("<label for=\"attribute_id\">Parent</label><select name=\"attribute_id\" id=\"attribute_id\" class=\"form-control\"><option value=\"\">Select</option><option value=" + loopsData['value'] + ">" + loopsData['text'] + "</option></select>");&#xD;&#xA;        var removeButton = $("<input type=\"button\" class=\"btn btn-xs btn-danger\" value=\"-\" />");&#xD;&#xA;        removeButton.click(function() {&#xD;&#xA;          $(this).parent().remove();&#xD;&#xA;        });&#xD;&#xA;        fieldWrapper.append(fName);&#xD;&#xA;        fieldWrapper.append(fType);&#xD;&#xA;        fieldWrapper.append(removeButton);&#xD;&#xA;        $("#buildyourform").append(fieldWrapper);&#xD;&#xA;      });&#xD;&#xA;    });