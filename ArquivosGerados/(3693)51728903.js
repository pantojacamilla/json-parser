        <p id = 'namesList'>Bhittersweet Angel&#xD;&#xA;    Pam Hankins&#xD;&#xA;    Josh Dena &#xD;&#xA;    Joanne Deutch &#xD;&#xA;    Melanie Dodd &#xD;&#xA;    Randy Scott &#xD;&#xA;    Bryan Jellick ...&#xD;&#xA;    </p>&#xD;&#xA;    &#xD;&#xA;    function myFunc(){&#xD;&#xA;      var names= $('#namesList').html();&#xD;&#xA;      var nameArr = names.split(' ');&#xD;&#xA;      //join comma after each full name&#xD;&#xA;      console.log(nameArr);&#xD;&#xA;     }