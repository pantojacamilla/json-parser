    function Controller($scope)&#xD;&#xA;    {&#xD;&#xA;        $scope.currentPage = 1;&#xD;&#xA;        $scope.totalPages = 2;&#xD;&#xA;        $scope.itemPerPage = 12;&#xD;&#xA;        $scope.getPages = function ()&#xD;&#xA;        {&#xD;&#xA;          return new Array($scope.totalPages);&#xD;&#xA;        };&#xD;&#xA;        $scope.pageChange = function (page)&#xD;&#xA;        {&#xD;&#xA;            if(isNaN(page))&#xD;&#xA;            {&#xD;&#xA;                if((page == "-" && 1 < $scope.currentPage) || (page == "+" && $scope.currentPage < $scope.totalPages))&#xD;&#xA;                {&#xD;&#xA;                    $scope.currentPage = eval($scope.currentPage + page + 1);&#xD;&#xA;                    getProducts();&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            else&#xD;&#xA;            {&#xD;&#xA;                $scope.currentPage = page;&#xD;&#xA;                getProducts();&#xD;&#xA;            }&#xD;&#xA;        };&#xD;&#xA;    }