    var data = [{&#xD;&#xA;    	"error": false,&#xD;&#xA;    	"date": "09-02-2016",&#xD;&#xA;    	"day": "5",&#xD;&#xA;    	"checkin": "20:29:11",&#xD;&#xA;    	"checkout": null,&#xD;&#xA;    	"break_timein": null,&#xD;&#xA;    	"break_timeout": null,&#xD;&#xA;    	"checkin_remarks": "test",&#xD;&#xA;    	"checkout_remarks": null,&#xD;&#xA;    	"break_time_remarks": null&#xD;&#xA;    }];&#xD;&#xA;    console.log(data[0].checkin)&#xD;&#xA;    console.log(data[0].break_timein)&#xD;&#xA;    console.log(data[0].break_timein.length > 0 || data[0].break_timein != null)