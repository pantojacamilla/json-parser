    <form name="createnewmember" id="createnewmember" method="post" action="addmember.php" class="form-horizontal" enctype="multipart/form-data">&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- name and surname -->&#xD;&#xA;        <label for="membername" class="col-xs-2 control-label">Ime i prezime:<font color="#d9534f">*</font></label>&#xD;&#xA;        <div class="col-xs-10">&#xD;&#xA;          <div class="form-inline">&#xD;&#xA;            <input name="membername" id="membername" type="text" class="form-control" placeholder="Ime" autofocus />&#xD;&#xA;            <input name="membersurname" id="membersurname" type="text" class="form-control" placeholder="Prezime" />&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /name and surname -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- date of birth -->&#xD;&#xA;        <label for="memberdate" class="col-xs-2 control-label">Datum rođenja:<font color="#d9534f">*</font></label>&#xD;&#xA;        <div class="col-xs-3">&#xD;&#xA;          <input name="memberdate" id="memberdate" type="date" class="form-control" value="1990-01-01" />&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /date of birth -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- membership number (scanned with barcode scanner) -->&#xD;&#xA;        <label for="membershipnumber" class="col-xs-2 control-label">Članski broj:<font color="#d9534f">*</font></label>&#xD;&#xA;        <div class="col-xs-3">&#xD;&#xA;          <input name="membershipnumber" id="membershipnumber" type="text" class="form-control" placeholder="Članski broj" data-toggle="tooltip" data-placement="right" title="Očitajte bar-kod sa nekorišćene kartice." />&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /membmership number -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- phone number -->&#xD;&#xA;        <label for="memberphonenumber" class="col-xs-2 control-label">Broj telefona:<font color="#d9534f">*</font></label>&#xD;&#xA;        <div class="col-xs-3">&#xD;&#xA;          <input name="memberphonenumber" id="memberphonenumber" type="text" class="form-control" placeholder="Broj telefona" />&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /phone number -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- email -->&#xD;&#xA;        <label for="memberemail" class="col-xs-2 control-label">Email adresa:</label>&#xD;&#xA;        <div class="col-xs-3">&#xD;&#xA;          <input name="memberemail" id="memberemail" type="text" class="form-control" placeholder="Email adresa" />&#xD;&#xA;          <div class="checkbox">&#xD;&#xA;            <label><input name="memberemailinglist" id="memberemailinglist" type="checkbox" disabled/> Prijavi na mailing listu?</label>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /email -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <!-- picture -->&#xD;&#xA;        <label for="memberpicture" class="col-xs-2 control-label">Slika:</label>&#xD;&#xA;        <div class="col-xs-10">&#xD;&#xA;          <label class="btn btn-default" for="memberpicture">&#xD;&#xA;            <input id="memberpicture" name="memberpicture" type="file" style="display:none;" onchange="$('#memberpicture-info').html($(this).val());" accept=".jpg,.png,.jpeg" class="form-control" />&#xD;&#xA;            <span class="glyphicon glyphicon-camera"></span> Traži...&#xD;&#xA;          </label>&#xD;&#xA;          <span class="label label-danger" id="memberpicture-info">Nije izabrana ni jedna slika...</span>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <!-- /picture -->&#xD;&#xA;      <div class="form-group">&#xD;&#xA;        <span class="pull-right">Polja označena sa <font color="#d9534f">*</font> su obavezna! &nbsp</span>&#xD;&#xA;        <!-- required fields text -->&#xD;&#xA;      </div>&#xD;&#xA;      <button name="Submit" id="submit" class="btn btn-default pull-right" type="submit">Podnesi</button>&#xD;&#xA;      <!-- submit button -->&#xD;&#xA;    </form>&#xD;&#xA;    <!-- /form -->