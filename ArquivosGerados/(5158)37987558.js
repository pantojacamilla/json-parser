    function listAllResults (){&#xD;&#xA;	mongo.connect(process.env.MONGODB_URI, function(err, db) {&#xD;&#xA;		assert.equal(null, err);&#xD;&#xA;		var results = db.collection('mydatabase').find();&#xD;&#xA;		var show = '<table>';&#xD;&#xA;		results.each ( function ( err, result ) {&#xD;&#xA;			assert.equal(err, null);&#xD;&#xA;			if ( result != null ) {&#xD;&#xA;				show = show + '<tr><td>' + result['object']['BasicInfo[Name]'] + '</td></tr>';&#xD;&#xA;			}else { &#xD;&#xA;				callback();&#xD;&#xA;			}&#xD;&#xA;					&#xD;&#xA;		});&#xD;&#xA;		show = show + '</table>';&#xD;&#xA;		return show;&#xD;&#xA;	});&#xD;&#xA;    }