    function js_sort(forms, type) {&#xD;&#xA;        var currentURL = window.location.href;&#xD;&#xA;        if (type == 1) {&#xD;&#xA;            var url = window.location.toString();&#xD;&#xA;            if (url.indexOf("&rows=") > 0) {&#xD;&#xA;                var clean_url = url.substring(0, url.indexOf("&rows="));&#xD;&#xA;                window.history.replaceState({}, document.title, clean_url);&#xD;&#xA;            }&#xD;&#xA;            location.href = clean_url + forms.value;&#xD;&#xA;        }&#xD;&#xA;        else if () {dont mind this, this is part of a diff drop down}&#xD;&#xA;    }