    jQuery(function ($) {&#xD;&#xA;        $('.entry-content').addClass('entry-content--quiz')&#xD;&#xA;        $('.get-questions').on('click', function (e) {&#xD;&#xA;            e.preventDefault();&#xD;&#xA;            let url = $(this).attr('href');&#xD;&#xA;                $.ajax({&#xD;&#xA;                    url: url,&#xD;&#xA;                }).done(function (data) {&#xD;&#xA;                    $('.entry-content').html(data);&#xD;&#xA;                    $('#wpvq-page-0').owlCarousel({&#xD;&#xA;                        items:1,&#xD;&#xA;                        slideBy: 1,&#xD;&#xA;                        stagePadding: 0,&#xD;&#xA;                        nav: true,&#xD;&#xA;                        dots: false,&#xD;&#xA;                    });&#xD;&#xA;                }).fail(function (err) {&#xD;&#xA;                    console.log('ajax err back', err);&#xD;&#xA;                });&#xD;&#xA;            return false;&#xD;&#xA;        });&#xD;&#xA;    });