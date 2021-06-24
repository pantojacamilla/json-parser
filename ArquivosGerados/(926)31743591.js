    angular.module('cssStuff', [])&#xD;&#xA;    		.controller('MainCtrl', ['$scope', function ($scope) {&#xD;&#xA;    		}])&#xD;&#xA;    		.directive('moveToThis', function () {&#xD;&#xA;    			'use strict';&#xD;&#xA;    			return {&#xD;&#xA;    				restrict: 'A',&#xD;&#xA;    				link: function (scope, element) {&#xD;&#xA;    				var animationDistance = null;&#xD;&#xA;    					element.bind('click', function (ev) {&#xD;&#xA;    						console.log('I have been clicked');&#xD;&#xA;    						&#xD;&#xA;    						// find the distance of the 'beatle' div that was clicked and scroll / animate to the zero position of the beatle-container&#xD;&#xA;    						// what was clicked...&#xD;&#xA;    						var clickedBeatle = findUpDom(ev.target, 'data-beatle');&#xD;&#xA;    						&#xD;&#xA;    						if (clickedBeatle !== false) {&#xD;&#xA;    							// get position of clicked DIV to container&#xD;&#xA;    							if(animationDistance === null ) {&#xD;&#xA;    								console.log('is null');&#xD;&#xA;    								animationDistance = (element[0].children[1].getBoundingClientRect().left - clickedBeatle.getBoundingClientRect().left);&#xD;&#xA;    							} else {&#xD;&#xA;    								console.log('already exisits');&#xD;&#xA;    								animationDistance = animationDistance + (element[0].children[1].getBoundingClientRect().left - clickedBeatle.getBoundingClientRect().left)  || (element[0].children[1].getBoundingClientRect().left - clickedBeatle.getBoundingClientRect().left) ;&#xD;&#xA;    							}&#xD;&#xA;    console.log(animationDistance, element[0].children[1].children[0].scrollLeft);&#xD;&#xA;    							element[0].children[1].children[0].style['transition'] = '1s ease-in-out';&#xD;&#xA;    							element[0].children[1].children[0].style['animation-iteration-count'] = '1';&#xD;&#xA;    							element[0].children[1].children[0].style['animation-fill-mode'] = 'forwards';&#xD;&#xA;    							element[0].children[1].children[0].style['transform'] = 'translate(' + animationDistance + 'px)';&#xD;&#xA;    						}&#xD;&#xA;    					});&#xD;&#xA;    					var findUpDom = function (elem, attribute) {&#xD;&#xA;    						if (elem.getAttribute(attribute)) {&#xD;&#xA;    							return elem;&#xD;&#xA;    						} else {&#xD;&#xA;    							while (elem.parentNode) {&#xD;&#xA;    								elem = elem.parentNode;&#xD;&#xA;    								if (elem.getAttribute && elem.getAttribute(attribute)) {&#xD;&#xA;    									return elem;&#xD;&#xA;    									break;&#xD;&#xA;    								}&#xD;&#xA;    							}&#xD;&#xA;    							return false;&#xD;&#xA;    						}&#xD;&#xA;    					};&#xD;&#xA;    				}&#xD;&#xA;    			};&#xD;&#xA;    		});