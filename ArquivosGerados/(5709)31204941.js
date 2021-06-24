    function LoadCountryField(countryFieldName, stateFieldName) {&#xD;&#xA;        var $countryField = $('#' + countryFieldName);&#xD;&#xA;        if ($countryField.length < 1) return;&#xD;&#xA;        $countryField.hide();&#xD;&#xA;        var selectedCountry = $countryField.val();&#xD;&#xA;        var countryRequirementLevel = Xrm.Page.getAttribute(countryFieldName).getRequiredLevel();&#xD;&#xA;        countryRequirementLevel = countryRequirementLevel == "required" ? 2 : countryRequirementLevel == "recommended" ? 1 : 0;&#xD;&#xA;        var $countryDropdown = generateSelectBox('ddl_' + countryFieldName, countryRequirementLevel, Countries, selectedCountry);&#xD;&#xA;        $('#' + countryFieldName + '_d').append($countryDropdown);&#xD;&#xA;        $countryDropdown.change({ 'countryFieldName': countryFieldName, 'stateFieldName': stateFieldName }, handleCountryChanged);&#xD;&#xA;        document.getElementById('ddl_' + countryFieldName).tabIndex = document.getElementById(countryFieldName).tabIndex;&#xD;&#xA;        LoadStateField(stateFieldName, selectedCountry);&#xD;&#xA;    }&#xD;&#xA;    // Configures the stateOrProvince field to be a dropdown dependent on the value of the country dropdown. Values are pulled from the Countries object.&#xD;&#xA;    function LoadStateField(stateFieldName, selectedCountry) {&#xD;&#xA;        var stateAttr = Xrm.Page.getAttribute(stateFieldName);&#xD;&#xA;        var selectedState = stateAttr == null ? "" : stateAttr.getValue();&#xD;&#xA;        var states = getStatesForCountry(selectedCountry);&#xD;&#xA;        var $stateField = $('#' + stateFieldName);&#xD;&#xA;        if (states == null || !$.isArray(states) || states.length < 1) {&#xD;&#xA;            $('#ddl_' + stateFieldName).remove();&#xD;&#xA;            $stateField.show();&#xD;&#xA;            return;&#xD;&#xA;        }&#xD;&#xA;        $stateField.hide();&#xD;&#xA;        var stateRequirementLevel = Xrm.Page.getAttribute(stateFieldName).getRequiredLevel();&#xD;&#xA;        stateRequirementLevel = stateRequirementLevel == "required" ? 2 : stateRequirementLevel == "recommended" ? 1 : 0;&#xD;&#xA;        var $stateDropdown = generateSelectBox('ddl_' + stateFieldName, stateRequirementLevel, states, selectedState);&#xD;&#xA;        var $existingDropdown = $('#ddl_' + stateFieldName);&#xD;&#xA;        if ($existingDropdown.length < 1)&#xD;&#xA;            $('#' + stateFieldName + '_d').append($stateDropdown);&#xD;&#xA;        else&#xD;&#xA;            $existingDropdown.replaceWith($stateDropdown);&#xD;&#xA;        $stateDropdown.change({ 'stateFieldName': stateFieldName }, handleStateChanged);&#xD;&#xA;        $stateDropdown.change();&#xD;&#xA;        document.getElementById('ddl_' + stateFieldName).tabIndex = document.getElementById(stateFieldName).tabIndex;&#xD;&#xA;    }&#xD;&#xA;    // Finds the states that go with selectedCountry, using the Countries object.&#xD;&#xA;    function getStatesForCountry(selectedCountry) {&#xD;&#xA;        for (i in Countries) {&#xD;&#xA;            var country = Countries[i];&#xD;&#xA;            if (selectedCountry == country.name)&#xD;&#xA;                return country.states;&#xD;&#xA;        }&#xD;&#xA;        return [];&#xD;&#xA;    }&#xD;&#xA;    // Sets the value of the country field to the newly selected value and reconfigures the dependent state dropdown.&#xD;&#xA;    function handleCountryChanged(eventData) {&#xD;&#xA;        var stateFieldName = eventData.data.stateFieldName;&#xD;&#xA;        var selectedCountry = setFieldFromDropdown(eventData.data.countryFieldName);&#xD;&#xA;        LoadStateField(stateFieldName, selectedCountry);&#xD;&#xA;    }&#xD;&#xA;    // Sets the value of the stateOrProvince field to the newly selected value&#xD;&#xA;    function handleStateChanged(eventData) {&#xD;&#xA;        setFieldFromDropdown(eventData.data.stateFieldName);&#xD;&#xA;    }&#xD;&#xA;    // Sets a field's value based on a related dropdown's value&#xD;&#xA;    function setFieldFromDropdown(fieldName) {&#xD;&#xA;        var $dropdown = $('#ddl_' + fieldName);&#xD;&#xA;        if ($dropdown.length != 1) return null;&#xD;&#xA;        var selectedValue = $dropdown.find('option:selected:first').val();&#xD;&#xA;        var attr = Xrm.Page.getAttribute(fieldName);&#xD;&#xA;        if (attr != null) attr.setValue(selectedValue);&#xD;&#xA;        return selectedValue;&#xD;&#xA;    }&#xD;&#xA;    // Generates a new select box with appropriate attributes for MS CRM 2011.&#xD;&#xA;    function generateSelectBox(id, requirementLevel, options, selectedValue) {&#xD;&#xA;        var $ddl = $('<select id="' + id + '" class="ms-crm-SelectBox" req="' + requirementLevel + '" height="4" style="IME-MODE: auto; width: 100%"></select>');&#xD;&#xA;        $ddl.append(jQuery('<option></option').val('').html(''));&#xD;&#xA;        $.each(options, function (i, item) {&#xD;&#xA;            $ddl.append(jQuery('<option></option').val(item.name).html(item.name));&#xD;&#xA;            if (selectedValue == item.name)&#xD;&#xA;                $ddl.find('option:last').attr('selected', 'selected');&#xD;&#xA;        });&#xD;&#xA;        return $ddl;&#xD;&#xA;    }