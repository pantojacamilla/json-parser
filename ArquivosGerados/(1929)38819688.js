    var Bear = function(type){ //PARENT&#xD;&#xA;      this.type;&#xD;&#xA;      this.hasFur = true;&#xD;&#xA;    }&#xD;&#xA;    var Bear.prototype.kingdom = 'Animalia'; //ASSIGNING TO PARENT'S PROTOTYPE&#xD;&#xA;    var Grizzly = function(type){ //CHILD&#xD;&#xA;      this.species = 'Brown Bear';&#xD;&#xA;    }&#xD;&#xA;    Grizzly.prototype = Object.create(Bear.prototype); //INHERITING FROM PARENT&#xD;&#xA;    &#xD;&#xA;    var grizzly1 = new Grizzly('grizzly');&#xD;&#xA;    &#xD;&#xA;    console.log(grizzly1.hasFur);  //prints undefined //members in parent's constructor not accessible&#xD;&#xA;    console.log(grizzly1.kingdom); //prints Animalia //however, members in parent's prototype is accessible