    $('button.op_comm_now').one('click',function(){&#xD;&#xA;    $(this).parent().before('<div class="comment_box_all" ng-controller="votesController"></div>');&#xD;&#xA;    }).click(function(){&#xD;&#xA;    var panel = $(this).closest('.area_comm_tex');&#xD;&#xA;    var commentBox = panel.prev('.comment_box_all');&#xD;&#xA;    var content = document.createElement("span");&#xD;&#xA;    content.innerHTML = panel.find('.text_area').val().replace(/(\n|\r|\r\n)/g, '<br>');&#xD;&#xA;    commentBox.append('<div class="comment_user"><div ng-repeat="vote in votes"> <div class="comment_note_11" ><a ng-click="incrementLikes(vote)" class="vote_comment_11"></a><span class="num_vote_comm_11">{{vote.Likes}}</span><a ng-click="decrementLikes(vote)" class="vote_dis_like_comm_un11"></a></div></div><div class="content_text_user_ans"></div></div>');&#xD;&#xA;    commentBox.find('.content_text_user_ans').last().html(content);	 &#xD;&#xA;    });&#xD;&#xA;       &#xD;&#xA;    var myApp = angular.module("myApp", []);&#xD;&#xA;    myApp.controller("votesController", function($scope){	&#xD;&#xA;    var votes = [&#xD;&#xA;    {Likes:"0"},&#xD;&#xA;    ];&#xD;&#xA;    $scope.votes=votes;&#xD;&#xA;    });