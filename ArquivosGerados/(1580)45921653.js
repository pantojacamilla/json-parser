    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>&#xD;&#xA;    <h1>&#xD;&#xA;      Time format is in 24h&#xD;&#xA;    </h1>&#xD;&#xA;    <div id="table">&#xD;&#xA;      <table id="timeTable" class="tg">&#xD;&#xA;        <tr>&#xD;&#xA;          <th class="tg-yw41"></th>&#xD;&#xA;          <th class="tg-yw41"></th>&#xD;&#xA;          <th class="tg-yw4l">Start time</th>&#xD;&#xA;          <th class="tg-yw4l">End time</th>&#xD;&#xA;          <th class="tg-yw4l">Hours in total</th>&#xD;&#xA;          <th class="tg-yw4l">Standby hours</th>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td class="aa">1</td>&#xD;&#xA;          <td class="tg-yw4l"><button class="removeTime">Remove Time</button></td>&#xD;&#xA;          <td class="tg-yw4l">&#xD;&#xA;            <input class="Time1" value="" placeholder="Enter your start time" />&#xD;&#xA;          </td>&#xD;&#xA;          <td class="tg-yw4l">&#xD;&#xA;            <input class="Time2" value="" placeholder="Enter your end time" />&#xD;&#xA;          </td>&#xD;&#xA;          <td class="tg-yw4l">&#xD;&#xA;            <input type="text" class="Hours" value="0" readonly="" />&#xD;&#xA;          </td>&#xD;&#xA;          <td class="tg-yw4l">&#xD;&#xA;            <input type="text" class="Standby" value="0" readonly="" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;      </table>&#xD;&#xA;    </div>&#xD;&#xA;    <caption>Total standby hours</caption>&nbsp;&#xD;&#xA;    <input class="grandtotal" value="" readonly="" />&#xD;&#xA;    <br>&#xD;&#xA;    <button onclick="addTime();">Add Time</button>&#xD;&#xA;    <br>&#xD;&#xA;    <button onclick="standBy();">Calculate total Standby hours</button>