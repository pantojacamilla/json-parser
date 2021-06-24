    (function($) {&#xD;&#xA;      "use strict";&#xD;&#xA;      var app = function() {&#xD;&#xA;        var body = undefined;&#xD;&#xA;        var menu = undefined;&#xD;&#xA;        var menuItems = undefined;&#xD;&#xA;        var init = function init() {&#xD;&#xA;          body = document.querySelector('body');&#xD;&#xA;          menu = document.querySelector('.burger_menu_icon');&#xD;&#xA;          menuItems = document.querySelectorAll('.__overlay_nav_content_list_item');&#xD;&#xA;          applyListeners();&#xD;&#xA;        };&#xD;&#xA;        var applyListeners = function applyListeners() {&#xD;&#xA;          menu.addEventListener('click', function() {&#xD;&#xA;            return toggleClass(body, '__overlay_nav-active');&#xD;&#xA;          });&#xD;&#xA;          menuItems.addEventListener('click', function() {&#xD;&#xA;            return toggleClass(body, '__overlay_nav-active');&#xD;&#xA;          });&#xD;&#xA;        };&#xD;&#xA;        var toggleClass = function toggleClass(element, stringClass) {&#xD;&#xA;          if (element.classList.contains(stringClass))&#xD;&#xA;            element.classList.remove(stringClass);&#xD;&#xA;          else element.classList.add(stringClass);&#xD;&#xA;        };&#xD;&#xA;        init();&#xD;&#xA;      }();&#xD;&#xA;    })(jQuery);