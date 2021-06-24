    <template>&#xD;&#xA;      <div class="mdl-cell mdl-shadow--2dp mdl-grid__item mdl-grid__item--three-div" css="${style.storeColor}" ref="storeColors[$index]"}>&#xD;&#xA;        <span class="mdl-grid__item-primary-content">&#xD;&#xA;            <svg style="width:24px;height:24px" viewBox="0 0 24 24">&#xD;&#xA;              <path fill="#000000" d="M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z" />&#xD;&#xA;            </svg>&#xD;&#xA;          <span>${store.name}</span>&#xD;&#xA;          <span class="mdl-grid__item-text-body">&#xD;&#xA;            <p>Expiration Date: ${store.expirationDate} <br>&#xD;&#xA;              Notification Date: ${store.notificationDate}</p>&#xD;&#xA;          </span>&#xD;&#xA;        </span>&#xD;&#xA;        <span class="mdl-grid__item-secondary-content">&#xD;&#xA;          <a class="mdl-grid__item-secondary-action" href="#"><i class="material-icons">star</i></a>&#xD;&#xA;          <button class="mdl-button mdl-button--compact mdl-button--theme-dark mdl-card__action mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" click.delegate="showStore(store._id)">MORE DETAIL</button>&#xD;&#xA;        </span>&#xD;&#xA;      </li>&#xD;&#xA;      </div>&#xD;&#xA;    <template >