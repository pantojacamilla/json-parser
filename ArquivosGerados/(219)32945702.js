    <button {{action 'toggleBox' 'boxOne'}}>One</button>&#xD;&#xA;    <button {{action 'toggleBox' 'boxTwo'}}>Two</button>&#xD;&#xA;    <button {{action 'toggleBox' 'boxThree'}}>Three</button>&#xD;&#xA;    {{#if boxOne}}&#xD;&#xA;    <div>&#xD;&#xA;      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>&#xD;&#xA;      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>&#xD;&#xA;    </div>&#xD;&#xA;    {{/if}} &#xD;&#xA;    {{#if boxTwo}}&#xD;&#xA;    <div>&#xD;&#xA;      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>&#xD;&#xA;      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>&#xD;&#xA;    </div>&#xD;&#xA;    {{/if}} &#xD;&#xA;    {{#if boxThree}}&#xD;&#xA;    <div>&#xD;&#xA;      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>&#xD;&#xA;      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>&#xD;&#xA;    </div>&#xD;&#xA;    {{/if}}