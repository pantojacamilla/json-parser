    function getUserProfile(passInEmail, companyID, callback) {&#xD;&#xA;        MongoClient.connect(url, function(err, db) {&#xD;&#xA;        	if (err) {&#xD;&#xA;        		console.log(err);&#xD;&#xA;        	} else {&#xD;&#xA;        		console.log("We are connected");&#xD;&#xA;        	}&#xD;&#xA;        	var collection = db.collection('UserProfile');&#xD;&#xA;        	collection.find({$where: "this.email == passInEmail"}, function(err, result) {&#xD;&#xA;        		if (err) {&#xD;&#xA;        			console.log(err);&#xD;&#xA;        			callback(err);&#xD;&#xA;        		} else if (result.length) {&#xD;&#xA;        			console.log(result);&#xD;&#xA;        			callback(result);&#xD;&#xA;        		} else {&#xD;&#xA;        			callback(err);&#xD;&#xA;        			console.log("No document found");&#xD;&#xA;        		} &#xD;&#xA;        	});&#xD;&#xA;        	db.close();&#xD;&#xA;        });&#xD;&#xA;        }