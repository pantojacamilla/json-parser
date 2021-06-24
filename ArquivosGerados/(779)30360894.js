    /*&#xD;&#xA;     * jqFloat.js - jQuery plugin&#xD;&#xA;     * A Floating Effect with jQuery!&#xD;&#xA;     *&#xD;&#xA;     * Name:			jqFloat.js&#xD;&#xA;     * Author:		Kenny Ooi - http://www.inwebson.com&#xD;&#xA;     * Date:			December 6, 2012&#xD;&#xA;     * Version:		1.1&#xD;&#xA;     * Example:		http://www.inwebson.com/demo/jqfloat/&#xD;&#xA;     *&#xD;&#xA;     */&#xD;&#xA;    (function($) {&#xD;&#xA;      //plugin methods&#xD;&#xA;      var methods = {&#xD;&#xA;        init: function(options) { //object initialize&#xD;&#xA;          //console.log('init');&#xD;&#xA;          return this.each(function() {&#xD;&#xA;            //define element data&#xD;&#xA;            $(this).data('jSetting', $.extend({}, $.fn.jqFloat.defaults, options));&#xD;&#xA;            $(this).data('jDefined', true);&#xD;&#xA;            //create wrapper&#xD;&#xA;            var wrapper = $('<div/>').css({&#xD;&#xA;              'width': $(this).outerWidth(true),&#xD;&#xA;              'height': $(this).outerHeight(true),&#xD;&#xA;              'z-index': $(this).css('zIndex')&#xD;&#xA;            });&#xD;&#xA;            //alert($(this).position().top);&#xD;&#xA;            if ($(this).css('position') == 'absolute')&#xD;&#xA;              wrapper.css({&#xD;&#xA;                'position': 'absolute',&#xD;&#xA;                'top': $(this).position().top,&#xD;&#xA;                'left': $(this).position().left&#xD;&#xA;              });&#xD;&#xA;            else&#xD;&#xA;              wrapper.css({&#xD;&#xA;                'float': $(this).css('float'),&#xD;&#xA;                'position': 'relative'&#xD;&#xA;              });&#xD;&#xA;            //check for margin auto solution&#xD;&#xA;            if (($(this).css('marginLeft') == '0px' || $(this).css('marginLeft') == 'auto') && $(this).position().left > 0 && $(this).css('position') != 'absolute') {&#xD;&#xA;              wrapper.css({&#xD;&#xA;                'marginLeft': $(this).position().left&#xD;&#xA;              });&#xD;&#xA;            }&#xD;&#xA;            $(this).wrap(wrapper).css({&#xD;&#xA;              'position': 'absolute',&#xD;&#xA;              'top': 0,&#xD;&#xA;              'left': 0&#xD;&#xA;            });&#xD;&#xA;            //call play method&#xD;&#xA;            //methods.play.apply($(this));&#xD;&#xA;          });&#xD;&#xA;        },&#xD;&#xA;        update: function(options) {&#xD;&#xA;          $(this).data('jSetting', $.extend({}, $.fn.jqFloat.defaults, options));&#xD;&#xA;        },&#xD;&#xA;        play: function() { //start floating&#xD;&#xA;          if (!$(this).data('jFloating')) {&#xD;&#xA;            //console.log('play');&#xD;&#xA;            $(this).data('jFloating', true);&#xD;&#xA;            //floating(this);&#xD;&#xA;          }&#xD;&#xA;          floating(this);&#xD;&#xA;        },&#xD;&#xA;        stop: function() { //stop floating&#xD;&#xA;          //console.log('stop');&#xD;&#xA;          this.data('jFloating', false);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      //private methods&#xD;&#xA;      var floating = function(obj) {&#xD;&#xA;        //generate random position&#xD;&#xA;        var setting = $(obj).data('jSetting');&#xD;&#xA;        var newX = Math.floor(Math.random() * setting.width) - setting.width / 2;&#xD;&#xA;        var newY = Math.floor(Math.random() * setting.height) - setting.height / 2 - setting.minHeight;&#xD;&#xA;        var spd = Math.floor(Math.random() * setting.speed) + setting.speed / 2;&#xD;&#xA;        //inifnity loop XD	&#xD;&#xA;        $(obj).stop().animate({&#xD;&#xA;          'top': newY,&#xD;&#xA;          'left': newX&#xD;&#xA;        }, spd, function() {&#xD;&#xA;          if ($(this).data('jFloating'))&#xD;&#xA;            floating(this);&#xD;&#xA;          else&#xD;&#xA;            $(this).animate({&#xD;&#xA;              'top': 0,&#xD;&#xA;              'left': 0&#xD;&#xA;            }, spd / 2);&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      $.fn.jqFloat = function(method, options) {&#xD;&#xA;        var element = $(this);&#xD;&#xA;        if (methods[method]) {&#xD;&#xA;          if (element.data('jDefined')) {&#xD;&#xA;            //reset settings&#xD;&#xA;            if (options && typeof options === 'object')&#xD;&#xA;              methods.update.apply(this, Array.prototype.slice.call(arguments, 1));&#xD;&#xA;          } else&#xD;&#xA;            methods.init.apply(this, Array.prototype.slice.call(arguments, 1));&#xD;&#xA;          methods[method].apply(this);&#xD;&#xA;        } else if (typeof method === 'object' || !method) {&#xD;&#xA;          if (element.data('jDefined')) {&#xD;&#xA;            if (method)&#xD;&#xA;              methods.update.apply(this, arguments);&#xD;&#xA;          } else&#xD;&#xA;            methods.init.apply(this, arguments);&#xD;&#xA;          methods.play.apply(this);&#xD;&#xA;        } else&#xD;&#xA;          $.error('Method ' + method + ' does not exist!');&#xD;&#xA;        return this;&#xD;&#xA;      }&#xD;&#xA;      $.fn.jqFloat.defaults = {&#xD;&#xA;        width: 100,&#xD;&#xA;        height: 100,&#xD;&#xA;        speed: 1000,&#xD;&#xA;        minHeight: 0&#xD;&#xA;      }&#xD;&#xA;    })(jQuery);&#xD;&#xA;    + function($) {&#xD;&#xA;      'use strict';&#xD;&#xA;      var Animate = function(element) {&#xD;&#xA;        this.element = element;&#xD;&#xA;        this.topPosition = element.data('position')[0];&#xD;&#xA;        this.leftPosition = element.data('position')[1];&#xD;&#xA;        this.fontSize = element.data('size') + 'px' || '20px';&#xD;&#xA;        this.shadow = element.data('shadow') || false;&#xD;&#xA;        this.setPosition();&#xD;&#xA;        this.setSize();&#xD;&#xA;        this.startFloat();&#xD;&#xA;        this.startPulsete();&#xD;&#xA;      };&#xD;&#xA;      Animate.prototype.setSize = function() {&#xD;&#xA;        this.element.css('fontSize', this.fontSize);&#xD;&#xA;      };&#xD;&#xA;      Animate.prototype.setPosition = function() {&#xD;&#xA;        this.element.css('top', this.topPosition);&#xD;&#xA;        this.element.css('left', this.leftPosition);&#xD;&#xA;      };&#xD;&#xA;      Animate.prototype.setBeyond = function() {&#xD;&#xA;        this.element.css('z-index', '99999')&#xD;&#xA;      };&#xD;&#xA;      Animate.prototype.startFloat = function() {&#xD;&#xA;        this.element.jqFloat({&#xD;&#xA;          width: 50,&#xD;&#xA;          height: 50,&#xD;&#xA;          speed: 5000&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;      Animate.prototype.startPulsete = function() {&#xD;&#xA;        this.element.css('color', 'transparent');&#xD;&#xA;        this.element.css('textShadow', '0 0 5px rgba(255, 255, 255, 0.9)');&#xD;&#xA;      };&#xD;&#xA;      $(window).on('load', function() {&#xD;&#xA;        $('[data-ride="animate"]').each(function() {&#xD;&#xA;          var element = $(this);&#xD;&#xA;          var animation = new Animate(element);&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    }(jQuery);