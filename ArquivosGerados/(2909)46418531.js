    function limitCharacters(){&#xD;&#xA;    $('.limit-characters').each(function(){&#xD;&#xA;    var element = $(this);&#xD;&#xA;    // var element = $('.limit-characters');&#xD;&#xA;    var elementHtml = element.html();&#xD;&#xA;    element.prepend(elementHtml);&#xD;&#xA;    element.find("p:first").addClass("limited");&#xD;&#xA;    element.find("p:last").addClass("unlimited hide-element");&#xD;&#xA;    var limitedElement = element.find('.limited');&#xD;&#xA;    var limitedElementString = limitedElement.text();&#xD;&#xA;    var subStringedString = limitedElementString.substring(0,500);&#xD;&#xA;    limitedElement.html(subStringedString);&#xD;&#xA;    var buttonElement = '<a href="#" class="btn btn-sample3 btn-sm actionButton ">Read More</a>';&#xD;&#xA;    element.append(buttonElement);&#xD;&#xA;    var button = $(".actionButton");&#xD;&#xA;    button.click(function(e){&#xD;&#xA;    $(this).parent().find(".unlimited").toggleClass("hide-element");&#xD;&#xA;    $(this).parent().find(".limited").toggleClass("hide-element");&#xD;&#xA;    $(this).toggleClass("read-less");&#xD;&#xA;    if($(this).hasClass("read-less")){&#xD;&#xA;    $(this).html("Read Less");&#xD;&#xA;    }else{&#xD;&#xA;    $(this).html("Read More");&#xD;&#xA;    }&#xD;&#xA;    e.preventDefault();&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    }