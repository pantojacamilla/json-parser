    eAssinatura.controller('CadastroController', ['$scope', '$route', '$routeParams', '$location', '$http', '$modal', 'blockService', 'notifyService', 'browserService', 'locale',&#xD;&#xA;    function ($scope, $route, $routeParams, $location, $http, $modal, blockService, notifyService, browserService, locale) {&#xD;&#xA;      &#xD;&#xA;      $scope.EmailRegister = true; // setting the div register by e-mail visible when the page loads&#xD;&#xA;        $scope.CertificateRegister = false;&#xD;&#xA;        $scope.showEmailRegister = function () {&#xD;&#xA;            $scope.EmailRegister = true;&#xD;&#xA;            $scope.CertificateRegister = false;&#xD;&#xA;        };&#xD;&#xA;        $scope.showCertificateRegister = function () {&#xD;&#xA;            if (!$scope.LoadedPKI) { //setting PKI when register by certificate is selected&#xD;&#xA;                init(); &#xD;&#xA;            } &#xD;&#xA;            $scope.EmailRegister = false;&#xD;&#xA;            $scope.CertificateRegister = true; &#xD;&#xA;        };&#xD;&#xA;      &#xD;&#xA;     }&#xD;&#xA;    ]);