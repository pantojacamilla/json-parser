    var p1 = p.connectToServer(platform1, username1, password1)&#xD;&#xA;    var p2 = p.connectToServer(platform2, username2, password2)&#xD;&#xA;    var p3 = p.connectToServer(platform3, username3, password3)&#xD;&#xA;    //some logic to decide what to show and what to filter out&#xD;&#xA;    //it might not make sense in this snippet, but in the full code-base &#xD;&#xA;    //this seperation is important&#xD;&#xA;    var params = [p3,p2]&#xD;&#xA;    Promise.all(params)&#xD;&#xA;    .then((responses) => {&#xD;&#xA;        console.log("--- value ---")&#xD;&#xA;        console.log(responses.length)&#xD;&#xA;    }