    jQuery(document).ready(function($) {&#xD;&#xA;      jQuery('#footer_widgets_layout').change(function() {&#xD;&#xA;        $(".slider").hide();&#xD;&#xA;        var columns = jQuery(this).val();&#xD;&#xA;        widget_slider(columns);&#xD;&#xA;        $(".slider_" + columns).show();&#xD;&#xA;      }).change();&#xD;&#xA;      function widget_slider(columns) {&#xD;&#xA;        slider_values = [10, 30, 50, 70];&#xD;&#xA;        if (columns == '5') {&#xD;&#xA;          slider_values = [10, 30, 50, 70, 90];&#xD;&#xA;        }&#xD;&#xA;        if (columns == '4') {&#xD;&#xA;          slider_values = [10, 50, 70, 90];&#xD;&#xA;        }&#xD;&#xA;        if (columns == '3') {&#xD;&#xA;          slider_values = [10, 50, 70];&#xD;&#xA;        }&#xD;&#xA;        if (columns == '2') {&#xD;&#xA;          slider_values = [10, 50];&#xD;&#xA;        }&#xD;&#xA;        if (columns == '1') {&#xD;&#xA;          slider_values = [10];&#xD;&#xA;        }&#xD;&#xA;        jQuery("#slider").slider({&#xD;&#xA;          min: 0,&#xD;&#xA;          max: 100,&#xD;&#xA;          step: 1,&#xD;&#xA;          values: slider_values,&#xD;&#xA;          slide: function(event, ui) {&#xD;&#xA;            for (var i = 0; i < ui.values.length; ++i) {&#xD;&#xA;              $(".slider_" + columns + " .sliderValue[data-index=" + i + "]").val(ui.values[i]);&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;        jQuery('.slider_' + columns + ' .sliderValue').change(function() {&#xD;&#xA;          var $this = $(this);&#xD;&#xA;          $("#slider").slider("values", $this.data("index"), $this.val());&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    });