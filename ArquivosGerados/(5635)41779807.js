    $(document).ready(function() {&#xD;&#xA;        "use strict";&#xD;&#xA;        var PushState, Current;&#xD;&#xA;      &#xD;&#xA;        $(document).on('click', function(e) {&#xD;&#xA;            if ($(e.target).closest($('.page-breadcrumb')).length) {&#xD;&#xA;                $(e.target).closest('li').nextAll().remove();&#xD;&#xA;                PushState = $('.page-breadcrumb').children('li').each(function() {&#xD;&#xA;                    return $(this).children().find('span.Title').text();&#xD;&#xA;                }).get().join("/");&#xD;&#xA;                console.log(PushState);&#xD;&#xA;                Current = $(e.target).closest('a').html();&#xD;&#xA;                $(e.target).closest('li').remove();&#xD;&#xA;                $('.page-breadcrumb').append(Current);&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    });