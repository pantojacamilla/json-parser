    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>&#xD;&#xA;    <div class="panel panel-default">&#xD;&#xA;      <div class="panel-body">&#xD;&#xA;        <form name="UrgentCareSearch" ng-submit="SearchUrgentCare(searchParam);" novalidate="" role="form">&#xD;&#xA;          <div class="form-group">&#xD;&#xA;            <input class="form-control" id="urgentcare" ng-model="searchParam.UrgentCareName" placeholder="Urgent Care Name" type="text" />&#xD;&#xA;          </div>&#xD;&#xA;          <!---<div class="form-group"><input class="form-control" id="urgentcare" name="Urgent Care Name" onblur="if(this.value === '') this.value = 'Urgent Care Name';" onfocus="if(this.value === 'Urgent Care Name') this.value = '';" type="text" value="Urgent Care Name" /></div>--->&#xD;&#xA;          <div class="form-group">&#xD;&#xA;            <!---<select class="form-control margin-bottom1" id="city" ng-model="searchParam.City" ng-options="City.value for City in Cities">&#xD;&#xA;                <option disabled="disabled" selected="selected" value="">City</option> </select>--->&#xD;&#xA;            <SELECT name="proCity" class="form-control margin-bottom1" id="city" placeholder="City" ng-model="searchParam.City">&#xD;&#xA;              <option disabled="disabled" selected="selected" value="">City</option>&#xD;&#xA;              <cfoutput query="UCarecityFind">&#xD;&#xA;                <option value=#officecity#>#officecity#</option>&#xD;&#xA;              </cfoutput>&#xD;&#xA;            </select>&#xD;&#xA;          </div>&#xD;&#xA;          <hr />&#xD;&#xA;          <div style="margin-top:-10px; margin-bottom:10px; text-align:center; font-size:8pt! important">* or Search by Zip code radius *</div>&#xD;&#xA;          <div class="row">&#xD;&#xA;            <div class="col-xs-7 no-right-padding">&#xD;&#xA;              <div class="form-group">&#xD;&#xA;                <div class="input-group">&#xD;&#xA;                  <!---<select class="form-control" name="distance" ng-model="searchParam.Distance" ng-options="mile.value for mile in miles"></select>--->&#xD;&#xA;                  <select class="form-control" name="distance" ng-model="searchParam.distance">&#xD;&#xA;                    <option selected="selected" value=" "></option>&#xD;&#xA;                    <option>5</option>&#xD;&#xA;                    <option>10</option>&#xD;&#xA;                    <option>15</option>&#xD;&#xA;                    <option>20</option>&#xD;&#xA;                  </select>&#xD;&#xA;                  <div class="input-group-addon">miles</div>&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;            <div class="col-xs-5 no-left-padding widthZip">&#xD;&#xA;              <div class="form-group">&#xD;&#xA;                <input allow-pattern="[\d\W]" class="form-control" id="zip" maxlength="5" ng-model="searchParam.Zip" placeholder="Zip code" type="text" />&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;          </div>&#xD;&#xA;          <div class="form-group">&#xD;&#xA;            <input class="btn btn-warning btn-block" ng-click="gotoElement('SearchResultsAnchor');" type="submit" value="Search" />&#xD;&#xA;          </div>&#xD;&#xA;        </form>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA; 