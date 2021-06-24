    function* Sequence(Tab_fct) { for( let fct of Tab_fct) yield fct }&#xD;&#xA;    var iterator = Sequence([]);&#xD;&#xA;    function nextSequence() {&#xD;&#xA;      let command = iterator.next()&#xD;&#xA;      if (!command.done) command.value()&#xD;&#xA;      else console.log('-------------- done ----')&#xD;&#xA;    }&#xD;&#xA;    function Forward()&#xD;&#xA;    {&#xD;&#xA;      console.log('forward 1 step')  // supposed async animation&#xD;&#xA;      nextSequence()                // supposed call back on async ending event&#xD;&#xA;    }&#xD;&#xA;    function Turn_Left()&#xD;&#xA;    {&#xD;&#xA;      console.log('turn left')   // supposed async animation&#xD;&#xA;      nextSequence()            // supposed call back on async ending event&#xD;&#xA;    }&#xD;&#xA;    function Turn_Right()&#xD;&#xA;    {&#xD;&#xA;      console.log('turn right') // supposed async animation&#xD;&#xA;      nextSequence()           // supposed call back on async ending event&#xD;&#xA;    }&#xD;&#xA;    const Tab_A = [ Forward, Turn_Left, Forward, Turn_Right, Forward ]&#xD;&#xA;    const Tab_B = [ Turn_Left, Forward, Turn_Right, Forward ]&#xD;&#xA;    Bt_Tab_A.onclick=_=>{ &#xD;&#xA;      iterator = Sequence(Tab_A)&#xD;&#xA;      console.clear()&#xD;&#xA;      console.log( ' Sequence A ')&#xD;&#xA;      nextSequence()&#xD;&#xA;    }&#xD;&#xA;    Bt_Tab_B.onclick=_=>{ &#xD;&#xA;      iterator = Sequence(Tab_B)&#xD;&#xA;      console.clear()&#xD;&#xA;      console.log( ' Sequence B ')&#xD;&#xA;      nextSequence()&#xD;&#xA;    }