    //Initial state&#xD;&#xA;    var state = Immutable.Map();&#xD;&#xA;    //sample lead&#xD;&#xA;    var leads = [{document_id: "L4234234234234",&#xD;&#xA;                  company_name: "someComp",&#xD;&#xA;                  date_filed:"083815",&#xD;&#xA;                  address:"11111 sw 123 ave",&#xD;&#xA;                  first_name: "john",&#xD;&#xA;                  last_name: "doe"&#xD;&#xA;                 },&#xD;&#xA;                 {document_id: "L11111111",&#xD;&#xA;                  company_name: "CorpComp",&#xD;&#xA;                  date_filed:"091919", &#xD;&#xA;                  address:"22222 sw 456 Ave",&#xD;&#xA;                  first_name: "jane",&#xD;&#xA;                  last_name: "doe"&#xD;&#xA;                 }];&#xD;&#xA;    //Adds the new leads to the state&#xD;&#xA;    function handleRecieveLeads (state, leads) {&#xD;&#xA;        var newState = state.set('leads', Immutable.List(leads));&#xD;&#xA;        return console.log(newState.toJS());&#xD;&#xA;    }&#xD;&#xA;    handleRecieveLeads(state, leads);&#xD;&#xA;    //sample lead to save&#xD;&#xA;    var saveLeads = [{document_id: "L1919191919",&#xD;&#xA;                      company_name: "someComp2",&#xD;&#xA;                      date_filed:"083815",&#xD;&#xA;                      address:"33333 SW 333rd Ave",&#xD;&#xA;                      first_name: "dallas",&#xD;&#xA;                      last_name: "thomas"&#xD;&#xA;                     }];&#xD;&#xA;    //add leads to the savedLeads&#xD;&#xA;    function handleSaveLead (state, lead) {&#xD;&#xA;        if(!state.savedLeads) {&#xD;&#xA;            var newState = state.set('savedLeads', Immutable.List(lead));&#xD;&#xA;            return console.log(newState.toJS());&#xD;&#xA;        } else {&#xD;&#xA;            var newState2 = state.get('savedLeads').push(lead);&#xD;&#xA;            return console.log(newState2.toJS());&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    //sample lead to save 2&#xD;&#xA;    var saveLeads2 = [{document_id: "L16161616",&#xD;&#xA;                       company_name: "someComp3",&#xD;&#xA;                       date_filed:"083815",&#xD;&#xA;                       address:"444444 sw 555 Ave",&#xD;&#xA;                       first_name: "crystal",&#xD;&#xA;                       last_name: "mentos"&#xD;&#xA;                      }];&#xD;&#xA;    handleSaveLead(state, saveLeads);&#xD;&#xA;    //setting a new initial state&#xD;&#xA;    var state2 = Immutable.fromJS({leads:leads, savedLeads: saveLeads});&#xD;&#xA;    handleSaveLead(state2, saveLeads2);