    <div align="right" id="1">&#xD;&#xA;      <select onchange="SwitchDatabaseSet()" name="DBSetList" form="DBSetSelector" id="DBSetSelector">&#xD;&#xA;        <option value="' . $DBSet->DBSetName . '">OPTION</option>&#xD;&#xA;        <option value="' . $DBSet->DBSetName . '">Option</option>&#xD;&#xA;      </select>&#xD;&#xA;    </div>&#xD;&#xA;    <Form>&#xD;&#xA;      <div>&#xD;&#xA;        <div class="QueryBox" name="QBox">&#xD;&#xA;            <select>&#xD;&#xA;              <option>Option</option>&#xD;&#xA;            </select>&#xD;&#xA;            <input type="text"></input>&#xD;&#xA;            <button>-</button>&#xD;&#xA;        </div>&#xD;&#xA;          <div><button onclick="AddQueryBox()">+</button></div>&#xD;&#xA;      </div>&#xD;&#xA;    </Form>