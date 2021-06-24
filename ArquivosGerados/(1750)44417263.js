    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.3/vue.min.js"></script>&#xD;&#xA;    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>&#xD;&#xA;    <script id="vtip_template" type="x-template">&#xD;&#xA;        <span style="position:relative;">&#xD;&#xA;            <button @click="toggleDialog" v-text="button_text" ref="button"></button>&#xD;&#xA;            <div ref="dialog" class="dialog">&#xD;&#xA;                <div class='item-body'>&#xD;&#xA;                    <a @click="closeDialog" style="float:right;color:white;padding:1em;" href="#">x</a>&#xD;&#xA;                    <!-- i hate slots -->&#xD;&#xA;                    <slot>...</slot>&#xD;&#xA;                </div>&#xD;&#xA;            </div>&#xD;&#xA;        </span>&#xD;&#xA;    </script>&#xD;&#xA;    <DIV id="v_app">&#xD;&#xA;        1. Click Hey.<br>&#xD;&#xA;        2. How do I make the "Yes!" button close the component like the "x" link does?<br>&#xD;&#xA;        &#xD;&#xA;        <vtip button_text="hey">&#xD;&#xA;            <!-- how do i make it so this slot child can close the parent component -->&#xD;&#xA;            Are you sure?&#xD;&#xA;            <button>Yes!</button> <!-- @click="closeDialog" does not work (and should not) -->&#xD;&#xA;        </vtip>   &#xD;&#xA;    </DIV>