    /*File Name : logoutPage.js*/&#xD;&#xA;    var logoutPage = function () {&#xD;&#xA;        'use strict';&#xD;&#xA;    		this.logoutcaret = element(by.css('[ng-if="api.userNav.items"]'));&#xD;&#xA;        	this.logoutbtn = element(by.css('[ng-click="openModal()"]'));&#xD;&#xA;        	this.googlelogout = element(by.css('[ng-click="logout()"]'));&#xD;&#xA;          var EC1 = protractor.ExpectedConditions;&#xD;&#xA;        //******************** functions *******************&#xD;&#xA;        this.logoutfn = function () {&#xD;&#xA;      	  browser.wait(EC1.visibilityOf(this.logoutcaret),15000);&#xD;&#xA;    	    this.logoutcaret.click();&#xD;&#xA;        	this.logoutbtn.click();&#xD;&#xA;        	this.googlelogout.click();&#xD;&#xA;        };&#xD;&#xA;    };&#xD;&#xA;    module.exports = {&#xD;&#xA;        log: new logoutPage()&#xD;&#xA;    };