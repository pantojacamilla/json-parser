    function Welcome()&#xD;&#xA;    {&#xD;&#xA;            alert("Welcome " + document.getElementById("fname").value + "!");&#xD;&#xA;    }&#xD;&#xA;     &#xD;&#xA;    function oldEnough(age)&#xD;&#xA;    {&#xD;&#xA;            if (age< 18)&#xD;&#xA;            {alert("UNDER 18 LEAVE NOW");&#xD;&#xA;            }&#xD;&#xA;    }&#xD;&#xA;     &#xD;&#xA;    //player dice roll//&#xD;&#xA;    function rollDice() {&#xD;&#xA;            var die1 = document.getElementById("die1");&#xD;&#xA;            var die2 = document.getElementById("die2");&#xD;&#xA;            var status = document.getElementById("status");&#xD;&#xA;            //random number between 1 and 6(whole number)//&#xD;&#xA;            var d1 = Math.floor(Math.random() * 6) + 1;&#xD;&#xA;            var d2 = Math.floor(Math.random() * 6) + 1;&#xD;&#xA;            var diceTotal = d1 + d2;&#xD;&#xA;            //shows the random number value//&#xD;&#xA;           &#xD;&#xA;            die1.innerHTML = d1;&#xD;&#xA;            die2.innerHTML = d2;&#xD;&#xA;            status.innerHTML = "You Rolled "+diceTotal+".";&#xD;&#xA;            if (d1 == d2){&#xD;&#xA;                    status.innerHTML +=" Doubles! Roll Again ";&#xD;&#xA;            }&#xD;&#xA;    }&#xD;&#xA;     &#xD;&#xA;    //computer dice roll//&#xD;&#xA;    function compDice() {&#xD;&#xA;                    var die3 = document.getElementById("die3")&#xD;&#xA;                    var die4 = document.getElementById("die4")&#xD;&#xA;                    var status2 = document.getElementById("status2")&#xD;&#xA;                   &#xD;&#xA;                    var d3 = Math.floor(Math.random() *6) +1;&#xD;&#xA;                    var d4 = Math.floor(Math.random() * 6) +1;&#xD;&#xA;                    var diceTotal = d3 + d4;&#xD;&#xA;                   &#xD;&#xA;                    die3.innerHTML = d3;&#xD;&#xA;                    die4.innerHTML = d4;&#xD;&#xA;                    status2.innerHTML = "Computer Rolled "+diceTotal+".";&#xD;&#xA;    }