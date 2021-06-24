    angular.module("appBanner", [])&#xD;&#xA;      .controller('bannerCtrl', function($scope) {&#xD;&#xA;        $scope.slides = ["zero", "one", "two"];&#xD;&#xA;        $scope.currentIndex = 0;&#xD;&#xA;        $scope.currentSlideIndex = "zero";&#xD;&#xA;        $scope.setCurrentSlideIndex = function(index) {&#xD;&#xA;          $scope.currentIndex = index;&#xD;&#xA;          $scope.currentSlideIndex = $scope.slides[$scope.currentIndex];&#xD;&#xA;        }&#xD;&#xA;        $scope.isCurrentSlideIndex = function(slideIndex) {&#xD;&#xA;          return $scope.currentSlideIndex === slideIndex;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        &#xD;&#xA;      })&#xD;&#xA;      .animation('.navCircleTransition', function($window) {&#xD;&#xA;        return {&#xD;&#xA;          addClass: function(element, className, done) {&#xD;&#xA;            if (className === 'active') {&#xD;&#xA;              var svgEl = element.find("svg");&#xD;&#xA;              navCircleAnimate(svgEl, "reverse");&#xD;&#xA;            } else {&#xD;&#xA;              done();&#xD;&#xA;            }&#xD;&#xA;          },&#xD;&#xA;          removeClass: function(element, className, done) {&#xD;&#xA;            var scope = element.scope();&#xD;&#xA;            if (className === 'active') {&#xD;&#xA;              var svgEl = element.find("svg");&#xD;&#xA;              navCircleAnimate(svgEl, "reverse");&#xD;&#xA;            } else {&#xD;&#xA;              done();&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    function navCircleAnimate(el, direction) {&#xD;&#xA;      var tlNavCircle = new TimelineMax({&#xD;&#xA;        paused: true&#xD;&#xA;      });&#xD;&#xA;      tlNavCircle.set($(el), {&#xD;&#xA;        drawSVG: "0% 100%",&#xD;&#xA;        ease: Linear.easeInOut&#xD;&#xA;      });&#xD;&#xA;      tlNavCircle.to($(el), 1, {&#xD;&#xA;        drawSVG: "0% 0%",&#xD;&#xA;        fill: "none",&#xD;&#xA;        ease: Linear.easeInOut&#xD;&#xA;      });&#xD;&#xA;      if (direction === "play") tlNavCircle.play();&#xD;&#xA;      else tlNavCircle.reverse();&#xD;&#xA;    }