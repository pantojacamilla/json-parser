    $scope.fileNameChanged = function(files)&#xD;&#xA;    {&#xD;&#xA;        var formD = new FormData();&#xD;&#xA;        var reader = new FileReader();&#xD;&#xA;        reader.onload = function(e)&#xD;&#xA;        {&#xD;&#xA;            $scope.$apply(function()&#xD;&#xA;           {&#xD;&#xA;              $scope.files = reader.result;      &#xD;&#xA;           });&#xD;&#xA;         &#xD;&#xA;        };&#xD;&#xA;        formD.append("file",files.files[0]);&#xD;&#xA;        reader.readAsText(files.files[0]);&#xD;&#xA;        $http({&#xD;&#xA;        method: 'POST',&#xD;&#xA;        headers: {'Content-Type': undefined},&#xD;&#xA;        data:{formD},&#xD;&#xA;        transformRequest : angular.identity,&#xD;&#xA;        url: 'http://localhost:12199/api/FacturacionWeb/PostFormData'&#xD;&#xA;         &#xD;&#xA;        }).success(function(data)&#xD;&#xA;        { &#xD;&#xA;          &#xD;&#xA;        }).then(function(dat)&#xD;&#xA;          {&#xD;&#xA;            &#xD;&#xA;          })&#xD;&#xA;         &#xD;&#xA;    }