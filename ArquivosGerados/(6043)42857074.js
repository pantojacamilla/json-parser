    var lock = document.getElementById('skm_LockPane');&#xD;&#xA;    if (lock)&#xD;&#xA;        lock.className = 'LockOff';&#xD;&#xA;    &#xD;&#xA;}&#xD;&#xA;         .LockOff { &#xD;&#xA;         display: none; &#xD;&#xA;         visibility: hidden; &#xD;&#xA;      } &#xD;&#xA;      .LockOn { &#xD;&#xA;         display: block; &#xD;&#xA;         visibility: visible; &#xD;&#xA;         position: absolute; &#xD;&#xA;         z-index: 999; &#xD;&#xA;         top: 0px; &#xD;&#xA;         left: 0px; &#xD;&#xA;         width: 105%; &#xD;&#xA;         height: 105%; &#xD;&#xA;         background-color: #ccc; &#xD;&#xA;         text-align: center; &#xD;&#xA;         padding-top: 20%; &#xD;&#xA;         filter: alpha(opacity=75); &#xD;&#xA;         opacity: 0.75; &#xD;&#xA;      } &#xD;&#xA;       <div id="skm_LockPane" class="LockOff"></div> 