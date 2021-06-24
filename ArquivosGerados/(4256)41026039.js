    $(document).ready(function() {&#xD;&#xA;      //this is added just to pre-populate some rows&#xD;&#xA;      addRow2('dataTable');&#xD;&#xA;      addRow2('dataTable');&#xD;&#xA;      addRow2('dataTable');&#xD;&#xA;      addRow2('dataTable');&#xD;&#xA;      $(".chkall").click(function() {&#xD;&#xA;        if ($(".chkall").is(':checked')) {&#xD;&#xA;          $("#dataTable input[type=checkbox]").each(function() {&#xD;&#xA;            $(this).prop("checked", true);&#xD;&#xA;          });&#xD;&#xA;        } else {&#xD;&#xA;          $("#dataTable input[type=checkbox]").each(function() {&#xD;&#xA;            $(this).prop("checked", false);&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      $('.get_total, .g_total').click(function(e) {&#xD;&#xA;        g_total = 0;&#xD;&#xA;        $('input.total').each(function() {&#xD;&#xA;          g_total += eval($(this).val());&#xD;&#xA;        });&#xD;&#xA;        console.log(g_total);&#xD;&#xA;        $('.g_total').html(g_total);&#xD;&#xA;      })&#xD;&#xA;      $('input.total').on('change', function() {&#xD;&#xA;        g_total = 0;&#xD;&#xA;        $('input.total').each(function() {&#xD;&#xA;          g_total += eval($(this).val());&#xD;&#xA;          $('.g_total').html(g_total);&#xD;&#xA;        })&#xD;&#xA;      })&#xD;&#xA;    })&#xD;&#xA;    function grandTotal() {&#xD;&#xA;      g_total = 0;&#xD;&#xA;      $('input.total').each(function() {&#xD;&#xA;        g_total += eval($(this).val());&#xD;&#xA;        $('.g_total').html(g_total);&#xD;&#xA;      })&#xD;&#xA;    }&#xD;&#xA;    function addRow2(tableid) {&#xD;&#xA;      $('input.codigo').autocomplete({&#xD;&#xA;        source: 'buscarcompra.php',&#xD;&#xA;        minLength: 1&#xD;&#xA;      });&#xD;&#xA;      $('input.codigo').focusout(function() {&#xD;&#xA;        $.ajax({&#xD;&#xA;          url: 'producto.php',&#xD;&#xA;          type: 'POST',&#xD;&#xA;          dataType: 'json',&#xD;&#xA;          data: {&#xD;&#xA;            codigo: $('input.codigo').val()&#xD;&#xA;          }&#xD;&#xA;        }).done(function(respuesta) {&#xD;&#xA;          $('input.descripcion').val(respuesta.descripcion);&#xD;&#xA;          $('input.cantidad').val(respuesta.cantidad);&#xD;&#xA;          $('input.precio').val(respuesta.precio);&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;      var table = $('#' + tableid);&#xD;&#xA;      rowCount = table.children().length;&#xD;&#xA;      //console.log(table.children().length);&#xD;&#xA;      newrow = '<tr class="dataRow"><td><input type="checkbox" name="chkbox[]" class="remove"></td><td><input class="codigo" type="text" name="codigo[]"></td><td><input type="text" class="descripcion" name="descripcion[]"></td><td><input type="text" step="any" class="cantidad" min="1" onchange="calc2($(this))" name="cantidad[]"></td><td><input type="text" step="any" min="0" value="0" class="precio" name="precio[]" onchange="calc2($(this));"></td><td><input type="text"  value="0" class="total" name="total[]"></td></tr>';&#xD;&#xA;      table.append(newrow);&#xD;&#xA;    }&#xD;&#xA;    function calc2(_row) {&#xD;&#xA;      row = _row.closest('.dataRow');&#xD;&#xA;      //console.log();&#xD;&#xA;      //&#xD;&#xA;      qty = row.find('.cantidad').val();&#xD;&#xA;      price = row.find('.precio').val();&#xD;&#xA;      total = parseFloat(qty) * parseFloat(price);&#xD;&#xA;      console.log('qty:' + qty + ' * price:' + price + ' = ' + total);&#xD;&#xA;      row.closest('.dataRow').find('.total').val(total);&#xD;&#xA;      grandTotal();&#xD;&#xA;    }&#xD;&#xA;    function deleteRow(tableID) {&#xD;&#xA;      try {&#xD;&#xA;        var table = document.getElementById(tableID);&#xD;&#xA;        var rowCount = table.rows.length;&#xD;&#xA;        for (var i = 0; i < rowCount; i++) {&#xD;&#xA;          var row = table.rows[i];&#xD;&#xA;          var chkbox = row.cells[0].childNodes[0];&#xD;&#xA;          if (null != chkbox && true == chkbox.checked) {&#xD;&#xA;            table.deleteRow(i);&#xD;&#xA;            rowCount--;&#xD;&#xA;            i--;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      } catch (e) {&#xD;&#xA;        alert(e);&#xD;&#xA;      }&#xD;&#xA;    }