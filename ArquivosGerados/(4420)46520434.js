    const human = {&#xD;&#xA;      species: 'human',&#xD;&#xA;      create: function(values) {&#xD;&#xA;        return Object.assign({}, this, values);&#xD;&#xA;      },&#xD;&#xA;      sayName: function() {&#xD;&#xA;        console.log(`Hi, my name is ${this.name}`);&#xD;&#xA;      },&#xD;&#xA;      saySpecies: function() {&#xD;&#xA;        console.log(`Hi, I'm a ${this.species}`);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    const musician = human.create({&#xD;&#xA;      species: 'musician',&#xD;&#xA;      playInstrument: function() {&#xD;&#xA;        console.log(`I'm a musician and I play ${this.instrument}`);&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    const aHuman = human.create({ name: 'Paul' });&#xD;&#xA;    aHuman.sayName();&#xD;&#xA;    aHuman.saySpecies();&#xD;&#xA;    &#xD;&#xA;    const aMusician = musician.create({ name: 'David', instrument: 'Guitar' });&#xD;&#xA;    aMusician.sayName();&#xD;&#xA;    aMusician.saySpecies();&#xD;&#xA;    aMusician.playInstrument();&#xD;&#xA;    &#xD;&#xA;    // how to check if musician is an instance of human?&#xD;&#xA;    console.log(musician instanceof human);