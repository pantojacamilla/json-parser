    angular.module('myApp',['pascalprecht.translate'])&#xD;&#xA;      &#xD;&#xA;    .config(function($translateProvider){&#xD;&#xA;    $translateProvider.useSanitizeValueStrategy(null);&#xD;&#xA;      $translateProvider&#xD;&#xA;        .translations('ar', {&#xD;&#xA;          status:{&#xD;&#xA;            "new":"جديد",&#xD;&#xA;            "awaiting":"منتظر",&#xD;&#xA;            "confirmed":"مؤكد",&#xD;&#xA;            "shipped":"مشحون",&#xD;&#xA;            "delivered":"مستلم",&#xD;&#xA;            "returned":"مرتجع",&#xD;&#xA;            "canceled":"ملغى"&#xD;&#xA;        }&#xD;&#xA;      })&#xD;&#xA;        .preferredLanguage('ar');&#xD;&#xA;    })&#xD;&#xA;    .controller('myCtrl',function($scope){&#xD;&#xA;      $scope.current_status = 'awaiting';&#xD;&#xA;    })