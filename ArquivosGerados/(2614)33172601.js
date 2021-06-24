    function ViewItem()&#xD;&#xA;    {&#xD;&#xA;    var context = new SP.ClientContext.get_current();&#xD;&#xA;    var web = context.get_web();&#xD;&#xA;    var list = web.get_lists().getByTitle('demoTrainingRoom2');&#xD;&#xA;    var query = SP.CamlQuery.createAllItemsQuery();&#xD;&#xA;    allItems = list.getItems(query);&#xD;&#xA;    context.load(allItems, 'Include(Title, EventDate, time2)');&#xD;&#xA;    context.executeQueryAsync(Function.createDelegate(this, this.success), Function.createDelegate(this, this.failed));&#xD;&#xA;    }&#xD;&#xA;    function success() {&#xD;&#xA;     &#xD;&#xA;    var currentTitle = SPUtility.GetSPFieldByInternalName('EventDate').GetValue(); &#xD;&#xA;    for(var i = 0; i < this.allItems.get_count(); i++){&#xD;&#xA;    					 var item = this.allItems.get_item(i);&#xD;&#xA;    					 console.log(item.get_item('time2') + ' - ' + currentTitle );&#xD;&#xA;    					                      &#xD;&#xA;                         if (currentTitle == item.get_item('time2')){&#xD;&#xA;                         alert('There is an event with the same Start Date on DemoTrainingRoom2' + ' ' + item.get_item('time2') + ' - ' + currentTitle );&#xD;&#xA;                         &#xD;&#xA;                           &#xD;&#xA;                          return true; // or item&#xD;&#xA;                           &#xD;&#xA;                                                                 &#xD;&#xA;    				      }&#xD;&#xA;    				  }&#xD;&#xA;    				  &#xD;&#xA;                      return false;&#xD;&#xA;    				}&#xD;&#xA;    				&#xD;&#xA;    function failed(sender, args) {&#xD;&#xA;    alert("failed. Message:" + args.get_message());&#xD;&#xA;    }&#xD;&#xA;    function PreSaveAction()    {&#xD;&#xA;    var time = SPUtility.GetSPFieldByInternalName('EventDate').GetValue();&#xD;&#xA;    alert(time + " Current Start Time");&#xD;&#xA;      &#xD;&#xA;    if(SPUtility.GetSPField('demoField').GetValue() == "no")&#xD;&#xA;    {&#xD;&#xA;         &#xD;&#xA;         alert('No need for validation');&#xD;&#xA;         return true; // save file&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        else&#xD;&#xA;    {&#xD;&#xA;       &#xD;&#xA;    	alert('Need to validate date');&#xD;&#xA;         &#xD;&#xA;        //here is where i need to call the result from success &#xD;&#xA;      &#xD;&#xA;    	return false; // don't save file&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    }