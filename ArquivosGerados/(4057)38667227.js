    // I use npm mongodb, sounds good ?&#xD;&#xA;    var mongodb = require('mongodb');&#xD;&#xA;    // initiating connection to myDatabase...&#xD;&#xA;    var db = "my_database_I_just_connected_to";&#xD;&#xA;    var myCollection = db.collection('myCollection');&#xD;&#xA;    var newHashkey = "hashkeyX";&#xD;&#xA;    if ("newHashkey_is_already_in_myCollection") {&#xD;&#xA;      doSomething();&#xD;&#xA;    } else {&#xD;&#xA;      doSomethingElse();&#xD;&#xA;    }