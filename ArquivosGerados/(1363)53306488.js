    let yaml_doc_json = [{&#xD;&#xA;        name: 'guidIds',&#xD;&#xA;        ids:&#xD;&#xA;         [ '209A3935-2305-4786-960B-BB008F3E9DC9',&#xD;&#xA;           'C10D76D2-89A3-4F28-B64E-2D78C953B283',&#xD;&#xA;           'B7164432-94B3-4096-A9EA-181D0F00D25E',&#xD;&#xA;           'DA366048-557F-42ED-AB1D-3B2196278E86' ]&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        name: 'keyMessage',&#xD;&#xA;        ids:&#xD;&#xA;         [ 'Enbril_RA_30.00',&#xD;&#xA;           'Enbril_RA_40.00',&#xD;&#xA;           'Enbril_RA_50.00',&#xD;&#xA;           'Enbril_RA_10.00' ]&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        name: 'SequenceName',&#xD;&#xA;        ids:&#xD;&#xA;         [ '1_KEY_LUN_09_2017_Ukr_main',&#xD;&#xA;           '1_KEY_LUN_09_2017_Ukr_sl01',&#xD;&#xA;           '1_KEY_LUN_09_2017_Ukr_sl02',&#xD;&#xA;           '1_KEY_LUN_09_2017_Ukr_sl03' ]&#xD;&#xA;      }],&#xD;&#xA;      letnewArray = [];&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;      yaml_doc_json.forEach( (e , i) => {&#xD;&#xA;            //console.log(e);&#xD;&#xA;            let id_name = yaml_doc_json[i].name;&#xD;&#xA;            //console.log(id_name);&#xD;&#xA;            e['ids'].forEach( ( elem , idx ) => {&#xD;&#xA;                console.log(idx); &#xD;&#xA;                let obj = {&#xD;&#xA;                    id_name : elem&#xD;&#xA;                }&#xD;&#xA;                letnewArray.splice( idx , 0 , obj );&#xD;&#xA;            });&#xD;&#xA;      });