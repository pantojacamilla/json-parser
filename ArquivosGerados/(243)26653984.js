    angular.module('recordsApp', ['ionic']).run(function($ionicPlatform) {&#xD;&#xA;      $ionicPlatform.ready(function() {&#xD;&#xA;        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard&#xD;&#xA;        // for form inputs)&#xD;&#xA;        //unresolved variable Keyboard&#xD;&#xA;        if(window.cordova && window.cordova.plugins.Keyboard) {&#xD;&#xA;          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);&#xD;&#xA;        }&#xD;&#xA;        //unresolved variable StatusBar&#xD;&#xA;        if(window.StatusBar) {&#xD;&#xA;          //unresolved variable or type StatusBar&#xD;&#xA;          //unresolved method of function styleDefault()&#xD;&#xA;          StatusBar.styleDefault();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });