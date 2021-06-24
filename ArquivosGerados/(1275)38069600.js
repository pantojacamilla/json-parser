    //quotation.js&#xD;&#xA;    import DataComponent from './data-component';&#xD;&#xA;    export default DataComponent.extend({&#xD;&#xA;      &#xD;&#xA;      data(){&#xD;&#xA;        return{&#xD;&#xA;          id:0,&#xD;&#xA;          date:'',&#xD;&#xA;          remarks:'',&#xD;&#xA;          terms:'',&#xD;&#xA;          quote:{},&#xD;&#xA;          dbTextFields:['to', 'org', 'address', 'items', 'description', 'quoted_by'],&#xD;&#xA;          dbIntFields:['quote_ref', 'quantity', 'amount', 'discount', 'total'],&#xD;&#xA;          dbObjFields:['inquiry', 'booking']&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      &#xD;&#xA;      methods:{&#xD;&#xA;        setDbData(){&#xD;&#xA;          let entity = this.quote;&#xD;&#xA;          this.getDbData(entity);&#xD;&#xA;          &#xD;&#xA;          //getDbData gives error as "this" in getDbData does not refer to this&#xD;&#xA;          // child component and so this.dbTextFields becomes undefined.&#xD;&#xA;          &#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;    });&#xD;&#xA;    How to achieve method inheritance as I am trying to do? Is it possible in Vue.js?  