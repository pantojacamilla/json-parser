    <div class="fourth clearfix">&#xD;&#xA;      <h2>Prep Time:</h2>&#xD;&#xA;      <input type="text" id="prepTime" name="prepTime" class="inputField" value="">&#xD;&#xA;    </div>&#xD;&#xA;    <div class="fourth">&#xD;&#xA;      <h2>Rest Time:</h2>&#xD;&#xA;      <input type="text" id="restTime" name="restTime" class="inputField" value="">&#xD;&#xA;    </div>&#xD;&#xA;    <div class="fourth">&#xD;&#xA;      <h2>Cook Time:</h2>&#xD;&#xA;      <input type="text" id="cookTime" name="cookTime" class="inputField" value="">&#xD;&#xA;    </div>&#xD;&#xA;    <div class="fourth">&#xD;&#xA;      <h2>Total Time:</h2>&#xD;&#xA;      <label id="totalTime" name="totalTime"></label>&#xD;&#xA;    </div>&#xD;&#xA;    <input type="button" class="addButton" value="Calc" onclick="calcTotalCook(document.getElementById('prepTime').value, document.getElementById('restTime').value, document.getElementById('cookTime').value);">