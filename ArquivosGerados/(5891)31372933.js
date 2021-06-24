    function Gizmo() {&#xD;&#xA;        // my awesome base class&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    Gizmo.prototype.wamboozle = function () {&#xD;&#xA;        // inherited member function&#xD;&#xA;    };&#xD;&#xA;    &#xD;&#xA;    function EventEmitter() {&#xD;&#xA;        // my awesome interface&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    EventEmitter.prototype.on = function (name, callback) {&#xD;&#xA;        // code here&#xD;&#xA;    };&#xD;&#xA;    &#xD;&#xA;    EventEmitter.prototype.emit = function (name, event) {&#xD;&#xA;        // more code here&#xD;&#xA;    };&#xD;&#xA;    &#xD;&#xA;    // set up inheritance and implementation&#xD;&#xA;    // maybe this could be a possibility?&#xD;&#xA;    Doohickey.prototype = Object.create(Gizmo.prototype);&#xD;&#xA;    Object.getOwnPropertyNames(EventEmitter.prototype).forEach(function (member) {&#xD;&#xA;        Doohickey.prototype[member] = EventEmitter.prototype[member];&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    // What should go here to make Doohickey implement EventEmitter?&#xD;&#xA;    &#xD;&#xA;    function Doohickey() {&#xD;&#xA;        Gimzo.call(this); // initialize base class&#xD;&#xA;        EventEmitter.call(this); // initialize interface&#xD;&#xA;        // my awesome extension class&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    Doohickey.prototype.turlywoops = function () {&#xD;&#xA;        // member function&#xD;&#xA;    };&#xD;&#xA;    var myOwnDoohickey = new Doohickey();&#xD;&#xA;    // member function works&#xD;&#xA;    myOwnDoohickey.turlywoops();&#xD;&#xA;    // inherited member function works&#xD;&#xA;    myOwnDoohickey.wamboozle();&#xD;&#xA;    // interface member functions work&#xD;&#xA;    myOwnDoohickey.on('finagle', function (trick) {&#xD;&#xA;        console.log(trick);&#xD;&#xA;    });&#xD;&#xA;    myOwnDoohickey.emit('finagle', {&#xD;&#xA;        hello: 'world!';&#xD;&#xA;    });&#xD;&#xA;    // both true&#xD;&#xA;    console.log(myOwnDoohickey instanceof Doohickey);&#xD;&#xA;    console.log(myOwnDoohickey instanceof Gizmo);&#xD;&#xA;    // don't mind if this isn't necessarily true, though it would be nice&#xD;&#xA;    console.log(myOwnDoohickey instanceof EventEmitter);