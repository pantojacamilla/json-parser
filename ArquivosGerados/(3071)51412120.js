    $(document).ready(function() {&#xD;&#xA;      $('input.autocomplete').autocomplete({&#xD;&#xA;        data: {&#xD;&#xA;          "Apple": null,&#xD;&#xA;          "Microsoft": null,&#xD;&#xA;          "Google": 'https://placehold.it/250x250'&#xD;&#xA;        },&#xD;&#xA;        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.&#xD;&#xA;        onAutocomplete: function(val) {&#xD;&#xA;          // Callback function when value is autcompleted.&#xD;&#xA;        },&#xD;&#xA;        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.&#xD;&#xA;      });&#xD;&#xA;    });