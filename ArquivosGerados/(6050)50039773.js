    <div class="raidio_box_specifications">&#xD;&#xA;        <div>&#xD;&#xA;            <table>&#xD;&#xA;                <td><p>Besonderheit:  </p></td>&#xD;&#xA;                <td  class="custom-control custom-radio custom-control-inline size_art_inner last_radio">&#xD;&#xA;                    <input type="radio" id="radio_specification_new" name="specification" class="custom-control-input" onclick="specification_new(this)">&#xD;&#xA;                    <label class="custom-control-label" for="radio_specification_new">neue erstellen</label>&#xD;&#xA;                </td>&#xD;&#xA;                <td class="custom-control custom-radio custom-control-inline size_art_inner">&#xD;&#xA;                    <input type="radio" id="radio_specification_existing" name="specification" class="custom-control-input" onclick="specification_existing(this)" {% if clothing_info[0].clothes_specification_id != 1 %} checked="checked" {% else %}  {% endif %}>&#xD;&#xA;                    <label class="custom-control-label" for="radio_specification_existing" >vorhandene</label>&#xD;&#xA;                </td>&#xD;&#xA;                <td class="custom-control custom-radio custom-control-inline size_art_inner">&#xD;&#xA;                    <input type="radio" id="radio_specification_none" name="specification" class="custom-control-input" onclick="specification_none(this)" {% if clothing_info[0].clothes_specification_id == 1 %} checked="checked" {% else %}  {% endif %}>&#xD;&#xA;                    <label class="custom-control-label" for="radio_specification_none">keine</label>&#xD;&#xA;                </td>&#xD;&#xA;                </tr>&#xD;&#xA;            </table>&#xD;&#xA;        </div>&#xD;&#xA;    </div>