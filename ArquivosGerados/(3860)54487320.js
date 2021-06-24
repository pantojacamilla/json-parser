    <div class="container-fluid">&#xD;&#xA;      <div class="sidebar">&#xD;&#xA;        <div class="menuItem" style="border-bottom: none;padding:10px;text-align: &#xD;&#xA;                  center;">&#xD;&#xA;          <img src="/assets/images/lockout-logo-white.png" class="app-logo" />&#xD;&#xA;        </div>&#xD;&#xA;        <div class="menuItem active" id="alert">&#xD;&#xA;          Lockdown Alert<img src="/assets/images/lock-alt.svg" />&#xD;&#xA;        </div>&#xD;&#xA;        <div class="menuItem" id="chat">&#xD;&#xA;          Chat<img src="/assets/images/comment-dots.svg" />&#xD;&#xA;        </div>&#xD;&#xA;        <div class="menuItem" id="schoolInfo">&#xD;&#xA;          School Info<img src="/assets/images/school.svg" />&#xD;&#xA;        </div>&#xD;&#xA;        <div class="menuItem" id="savedData">&#xD;&#xA;          Saved Data<img src="/assets/images/save.svg" />&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    <div class="container alertDashboard" id="App">&#xD;&#xA;      <h1>Alert Dashboard</h1>&#xD;&#xA;      <div class="row">&#xD;&#xA;        <div class="col-md-3 schoolList" id="listDiv">&#xD;&#xA;          <div class="listHeader">&#xD;&#xA;            <h5>Please select a school</h5>&#xD;&#xA;            <p>Hold ctrl to select more than one school</p>&#xD;&#xA;          </div>&#xD;&#xA;          <select size="100" multiple id="schoolSelect" class="school_select"></select>&#xD;&#xA;          <!-- <div id="infoDiv">&#xD;&#xA;                    <p>Drag the cursor, or hold CTRL to select multiple</p>&#xD;&#xA;                  </div> -->&#xD;&#xA;        </div>&#xD;&#xA;        <div class="col-md-4">&#xD;&#xA;          <div class="row">&#xD;&#xA;            <div class="col-md-12">&#xD;&#xA;              <!-- <img id="stage2Img" draggable="false" &#xD;&#xA;                            opacity="0.85" &#xD;&#xA;                            src="../assets/images/stage_2_up.png"/> -->&#xD;&#xA;              <div class="alertStageInner">&#xD;&#xA;                <div class="alertHeader">&#xD;&#xA;                  <img src="/assets/images/stage2Image.png" />&#xD;&#xA;                  <h2>Alert Level 2</h2>&#xD;&#xA;                  <h3>Soft Lockdown</h3>&#xD;&#xA;                </div>&#xD;&#xA;                <div class="alertBody">&#xD;&#xA;                  <p>&#xD;&#xA;                    Locks down school due to immediate, non-life threatening situation&#xD;&#xA;                  </p>&#xD;&#xA;                  <button id="stage2Div">Initiate Lockdown</button>&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <!-- <img id="stage3Img" draggable="false" opacity="0.85" src="../assets/images/stage_3_up.png"/> -->&#xD;&#xA;              <div class="alertStageInner" style="margin-top: 24px">&#xD;&#xA;                <div class="alertHeader">&#xD;&#xA;                  <img src="/assets/images/stage3Image.png" />&#xD;&#xA;                  <h2>Alert Level 3</h2>&#xD;&#xA;                  <h3>Full Lockdown</h3>&#xD;&#xA;                </div>&#xD;&#xA;                <div class="alertBody">&#xD;&#xA;                  <p>&#xD;&#xA;                    Locks down school due to immediate, life threatening situation&#xD;&#xA;                  </p>&#xD;&#xA;                  <button id="stage3Div">Initiate Lockdown</button>&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;            <div class="col-md-5"></div>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA; 