    function classSecureMessage(message){&#xD;&#xA;    	this.secretA=security.randomAlphaNum(56);&#xD;&#xA;    	this.secretB=security.randomAlphaNum(56);&#xD;&#xA;    	this.secretC=security.randomAlphaNum(56);&#xD;&#xA;    	var passStr=message;&#xD;&#xA;    	passStr=CryptoJS.AES.encrypt(passStr, this.secretA);&#xD;&#xA;    	passStr=CryptoJS.Rabbit.encrypt(passStr.toString(), this.secretB);&#xD;&#xA;    	passStr=CryptoJS.AES.encrypt(passStr.toString(), this.secretC);&#xD;&#xA;    	this.message=passStr;	&#xD;&#xA;    	this.decrypt= function(){&#xD;&#xA;    		var passStr=CryptoJS.AES.decrypt(this.message, this.secretC).toString( CryptoJS.enc.Utf8 );&#xD;&#xA;    		passStr=CryptoJS.Rabbit.decrypt(passStr, this.secretB).toString( CryptoJS.enc.Utf8 );&#xD;&#xA;    		passStr=CryptoJS.AES.decrypt(passStr, this.secretA).toString( CryptoJS.enc.Utf8 );&#xD;&#xA;    		return(passStr);&#xD;&#xA;    	}&#xD;&#xA;    }