    ## FilterList.vue ##&#xD;&#xA;    export default {&#xD;&#xA;      data() {&#xD;&#xA;        return {&#xD;&#xA;          listSelected: ['aa','bb','cc','...'],  // this value will mutate when user has selected checkbox&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    =================================================================&#xD;&#xA;    ## store.js ##&#xD;&#xA;    export default new Vuex.Store({&#xD;&#xA;      state = {&#xD;&#xA;        dataSelected: [ ]&#xD;&#xA;      },&#xD;&#xA;      mutation = {&#xD;&#xA;        FILTERSELECTED(state, payload) {&#xD;&#xA;          state.selected = payload&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      action = {&#xD;&#xA;        hasSelected(context,param) {&#xD;&#xA;          context.commit('FILTERSELECTED',param)&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      getters = {&#xD;&#xA;        getSelected: state => state.dataSelected,&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      strict: true&#xD;&#xA;    })