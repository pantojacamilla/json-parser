    /*navigation icon animation*/&#xD;&#xA;    var trigger='X';&#xD;&#xA;    jQuery(document).ready(function () {&#xD;&#xA;        $('#toggle-menu').click(function () {&#xD;&#xA;            trigger='X';&#xD;&#xA;            $(this).toggleClass('menu-is-active')&#xD;&#xA;        });&#xD;&#xA;        /* click outside of nav to trigger navigation icon animation*/&#xD;&#xA;        $(document).click(function () {&#xD;&#xA;            if (trigger=='X')&#xD;&#xA;            {&#xD;&#xA;                $("#toggle-menu").toggleClass();&#xD;&#xA;                trigger='ham';&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;        $("nav").click(function (e) {&#xD;&#xA;            e.stopPropagation();&#xD;&#xA;            return false;&#xD;&#xA;        });&#xD;&#xA;        /*----/----navigation icon animation*/&#xD;&#xA;        /*toggle menu*/&#xD;&#xA;        jQuery("#toggle-menu").click(function () {&#xD;&#xA;            jQuery(".nav").slideToggle();&#xD;&#xA;        });&#xD;&#xA;        /* click outside of nav to close toggle*/&#xD;&#xA;        $(document).click(function () {&#xD;&#xA;            $(".nav").hide();&#xD;&#xA;        });&#xD;&#xA;        $("#toggle-menu").click(function (e) {&#xD;&#xA;            e.stopPropagation();&#xD;&#xA;            return false;&#xD;&#xA;        });&#xD;&#xA;        /*----/----toggle menu*/&#xD;&#xA;    });