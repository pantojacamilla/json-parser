    var app = angular.module("myApp",['listOfBooks']);&#xD;&#xA;                app.controller("myCtrl", function($scope){&#xD;&#xA;                    $scope.authors = [];&#xD;&#xA;                    $scope.addAuthor = function(){&#xD;&#xA;                          var author = {};&#xD;&#xA;                          author.surname = "";&#xD;&#xA;                          author.name = "";&#xD;&#xA;                          $scope.authors.push(author);&#xD;&#xA;                    };&#xD;&#xA;                    $scope.SavelocalStorage = function(){&#xD;&#xA;                        if($scope.myForm.$valid){&#xD;&#xA;                            localStorage.setItem('Authors', JSON.stringify($scope.authors));&#xD;&#xA;                        }&#xD;&#xA;                        else{&#xD;&#xA;                            alert("fill in all the gaps pls!");&#xD;&#xA;                        }&#xD;&#xA;                    };&#xD;&#xA;                });&#xD;&#xA;                &#xD;&#xA;                var app = angular.module("listOfBooks", []);&#xD;&#xA;            app.controller("booksCtrl", function($scope) {&#xD;&#xA;              $scope.showBooks = false;&#xD;&#xA;            &#xD;&#xA;              $scope.currentAuthor = {};&#xD;&#xA;              $scope.showBookList = function(author) {&#xD;&#xA;                $scope.showBooks = !$scope.showBooks;&#xD;&#xA;                $scope.currentAuthor = author;&#xD;&#xA;              }&#xD;&#xA;            &#xD;&#xA;              $scope.addBook = function() {&#xD;&#xA;               &#xD;&#xA;                $scope.currentAuthor.books = $scope.currentAuthor.books || [];&#xD;&#xA;                var book = {};&#xD;&#xA;                book.title = "";&#xD;&#xA;                $scope.currentAuthor.books.push(book);&#xD;&#xA;              };&#xD;&#xA;            });