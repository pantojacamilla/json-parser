    // ==UserScript==&#xD;&#xA;    // @name         Test&#xD;&#xA;    // @namespace    http://bs.to/&#xD;&#xA;    // @version      2.2&#xD;&#xA;    // @description  Test&#xD;&#xA;    // @author       Me&#xD;&#xA;    // @match        https://bs.to/andere-serien&#xD;&#xA;    // @require      https://code.jquery.com/jquery-3.3.1.min.js&#xD;&#xA;    // ==/UserScript==&#xD;&#xA;    //Smoothscroll.js&#xD;&#xA;    (function() {&#xD;&#xA;      var defaultOptions = {&#xD;&#xA;        frameRate: 300,&#xD;&#xA;        animationTime: 1500,&#xD;&#xA;        stepSize: 120,&#xD;&#xA;        pulseAlgorithm: true,&#xD;&#xA;        pulseScale: 8,&#xD;&#xA;        pulseNormalize: 1,&#xD;&#xA;        accelerationDelta: 20,&#xD;&#xA;        accelerationMax: 1,&#xD;&#xA;        keyboardSupport: true,&#xD;&#xA;        arrowScroll: 50,&#xD;&#xA;        touchpadSupport: true,&#xD;&#xA;        fixedBackground: true,&#xD;&#xA;        excluded: ""&#xD;&#xA;      };&#xD;&#xA;      var options = defaultOptions;&#xD;&#xA;      var isExcluded = false;&#xD;&#xA;      var isFrame = false;&#xD;&#xA;      var direction = {&#xD;&#xA;        x: 0,&#xD;&#xA;        y: 0&#xD;&#xA;      };&#xD;&#xA;      var initDone = false;&#xD;&#xA;      var root = document.documentElement;&#xD;&#xA;      var activeElement;&#xD;&#xA;      var observer;&#xD;&#xA;      var deltaBuffer = [120, 120, 120];&#xD;&#xA;      var key = {&#xD;&#xA;        left: 37,&#xD;&#xA;        up: 38,&#xD;&#xA;        right: 39,&#xD;&#xA;        down: 40,&#xD;&#xA;        spacebar: 32,&#xD;&#xA;        pageup: 33,&#xD;&#xA;        pagedown: 34,&#xD;&#xA;        end: 35,&#xD;&#xA;        home: 36&#xD;&#xA;      };&#xD;&#xA;      options = defaultOptions;&#xD;&#xA;      function initTest() {&#xD;&#xA;        var disableKeyboard = false;&#xD;&#xA;        if (disableKeyboard) {&#xD;&#xA;          removeEvent("keydown", keydown);&#xD;&#xA;        }&#xD;&#xA;        if (options.keyboardSupport && !disableKeyboard) {&#xD;&#xA;          addEvent("keydown", keydown);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      function init() {&#xD;&#xA;        if (!document.body)&#xD;&#xA;          return;&#xD;&#xA;        var body = document.body;&#xD;&#xA;        var html = document.documentElement;&#xD;&#xA;        var windowHeight = window.innerHeight;&#xD;&#xA;        var scrollHeight = body.scrollHeight;&#xD;&#xA;        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;&#xD;&#xA;        activeElement = body;&#xD;&#xA;        initTest();&#xD;&#xA;        initDone = true;&#xD;&#xA;        if (top != self) {&#xD;&#xA;          isFrame = true;&#xD;&#xA;        } else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {&#xD;&#xA;          var pending = false;&#xD;&#xA;          var refresh = function() {&#xD;&#xA;            if (!pending && html.scrollHeight != document.height) {&#xD;&#xA;              pending = true;&#xD;&#xA;              setTimeout(function() {&#xD;&#xA;                html.style.height = document.height + 'px';&#xD;&#xA;                pending = false;&#xD;&#xA;              }, 500);&#xD;&#xA;            }&#xD;&#xA;          };&#xD;&#xA;          html.style.height = 'auto';&#xD;&#xA;          setTimeout(refresh, 10);&#xD;&#xA;          if (root.offsetHeight <= windowHeight) {&#xD;&#xA;            var underlay = document.createElement("div");&#xD;&#xA;            underlay.style.clear = "both";&#xD;&#xA;            body.appendChild(underlay);&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        if (!options.fixedBackground && !isExcluded) {&#xD;&#xA;          body.style.backgroundAttachment = "scroll";&#xD;&#xA;          html.style.backgroundAttachment = "scroll";&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      var que = [];&#xD;&#xA;      var pending = false;&#xD;&#xA;      var lastScroll = +new Date();&#xD;&#xA;      function scrollArray(elem, left, top, delay) {&#xD;&#xA;        if (delay === undefined) {&#xD;&#xA;          delay = 1000;&#xD;&#xA;        }&#xD;&#xA;        directionCheck(left, top);&#xD;&#xA;        if (options.accelerationMax != 1) {&#xD;&#xA;          var now = +new Date();&#xD;&#xA;          var elapsed = now - lastScroll;&#xD;&#xA;          if (elapsed < options.accelerationDelta) {&#xD;&#xA;            var factor = (1 + (30 / elapsed)) / 2;&#xD;&#xA;            if (factor > 1) {&#xD;&#xA;              factor = Math.min(factor, options.accelerationMax);&#xD;&#xA;              left *= factor;&#xD;&#xA;              top *= factor;&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;          lastScroll = +new Date();&#xD;&#xA;        }&#xD;&#xA;        que.push({&#xD;&#xA;          x: left,&#xD;&#xA;          y: top,&#xD;&#xA;          lastX: (left < 0) ? 0.99 : -0.99,&#xD;&#xA;          lastY: (top < 0) ? 0.99 : -0.99,&#xD;&#xA;          start: +new Date()&#xD;&#xA;        });&#xD;&#xA;        if (pending) {&#xD;&#xA;          return;&#xD;&#xA;        }&#xD;&#xA;        var scrollWindow = (elem === document.body);&#xD;&#xA;        var step = function(time) {&#xD;&#xA;          var now = +new Date();&#xD;&#xA;          var scrollX = 0;&#xD;&#xA;          var scrollY = 0;&#xD;&#xA;          for (var i = 0; i < que.length; i++) {&#xD;&#xA;            var item = que[i];&#xD;&#xA;            var elapsed = now - item.start;&#xD;&#xA;            var finished = (elapsed >= options.animationTime);&#xD;&#xA;            var position = (finished) ? 1 : elapsed / options.animationTime;&#xD;&#xA;            if (options.pulseAlgorithm) {&#xD;&#xA;              position = pulse(position);&#xD;&#xA;            }&#xD;&#xA;            var x = (item.x * position - item.lastX) >> 0;&#xD;&#xA;            var y = (item.y * position - item.lastY) >> 0;&#xD;&#xA;            scrollX += x;&#xD;&#xA;            scrollY += y;&#xD;&#xA;            item.lastX += x;&#xD;&#xA;            item.lastY += y;&#xD;&#xA;            if (finished) {&#xD;&#xA;              que.splice(i, 1);&#xD;&#xA;              i--;&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;          if (scrollWindow) {&#xD;&#xA;            window.scrollBy(scrollX, scrollY);&#xD;&#xA;          } else {&#xD;&#xA;            if (scrollX)&#xD;&#xA;              elem.scrollLeft += scrollX;&#xD;&#xA;            if (scrollY)&#xD;&#xA;              elem.scrollTop += scrollY;&#xD;&#xA;          }&#xD;&#xA;          if (!left && !top) {&#xD;&#xA;            que = [];&#xD;&#xA;          }&#xD;&#xA;          if (que.length) {&#xD;&#xA;            requestFrame(step, elem, (delay / options.frameRate + 1));&#xD;&#xA;          } else {&#xD;&#xA;            pending = false;&#xD;&#xA;          }&#xD;&#xA;        };&#xD;&#xA;        requestFrame(step, elem, 0);&#xD;&#xA;        pending = true;&#xD;&#xA;      }&#xD;&#xA;      function wheel(event) {&#xD;&#xA;        if (!initDone) {&#xD;&#xA;          init();&#xD;&#xA;        }&#xD;&#xA;        var target = event.target;&#xD;&#xA;        var overflowing = overflowingAncestor(target);&#xD;&#xA;        if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;        var deltaX = event.wheelDeltaX || 0;&#xD;&#xA;        var deltaY = event.wheelDeltaY || 0;&#xD;&#xA;        if (!deltaX && !deltaY) {&#xD;&#xA;          deltaY = event.wheelDelta || 0;&#xD;&#xA;        }&#xD;&#xA;        if (!options.touchpadSupport && isTouchpad(deltaY)) {&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;        if (Math.abs(deltaX) > 1.2) {&#xD;&#xA;          deltaX *= options.stepSize / 120;&#xD;&#xA;        }&#xD;&#xA;        if (Math.abs(deltaY) > 1.2) {&#xD;&#xA;          deltaY *= options.stepSize / 120;&#xD;&#xA;        }&#xD;&#xA;        scrollArray(overflowing, -deltaX, -deltaY);&#xD;&#xA;        event.preventDefault();&#xD;&#xA;      }&#xD;&#xA;      function keydown(event) {&#xD;&#xA;        var target = event.target;&#xD;&#xA;        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);&#xD;&#xA;        if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;        if (isNodeName(target, "button") && event.keyCode === key.spacebar) {&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;        var shift, x = 0,&#xD;&#xA;          y = 0;&#xD;&#xA;        var elem = overflowingAncestor(activeElement);&#xD;&#xA;        var clientHeight = elem.clientHeight;&#xD;&#xA;        if (elem == document.body) {&#xD;&#xA;          clientHeight = window.innerHeight;&#xD;&#xA;        }&#xD;&#xA;        switch (event.keyCode) {&#xD;&#xA;          case key.up:&#xD;&#xA;            y = -options.arrowScroll;&#xD;&#xA;            break;&#xD;&#xA;          case key.down:&#xD;&#xA;            y = options.arrowScroll;&#xD;&#xA;            break;&#xD;&#xA;          case key.spacebar:&#xD;&#xA;            shift = event.shiftKey ? 1 : -1;&#xD;&#xA;            y = -shift * clientHeight * 0.9;&#xD;&#xA;            break;&#xD;&#xA;          case key.pageup:&#xD;&#xA;            y = -clientHeight * 0.9;&#xD;&#xA;            break;&#xD;&#xA;          case key.pagedown:&#xD;&#xA;            y = clientHeight * 0.9;&#xD;&#xA;            break;&#xD;&#xA;          case key.home:&#xD;&#xA;            y = -elem.scrollTop;&#xD;&#xA;            break;&#xD;&#xA;          case key.end:&#xD;&#xA;            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;&#xD;&#xA;            y = (damt > 0) ? damt + 10 : 0;&#xD;&#xA;            break;&#xD;&#xA;          case key.left:&#xD;&#xA;            x = -options.arrowScroll;&#xD;&#xA;            break;&#xD;&#xA;          case key.right:&#xD;&#xA;            x = options.arrowScroll;&#xD;&#xA;            break;&#xD;&#xA;          default:&#xD;&#xA;            return true;&#xD;&#xA;        }&#xD;&#xA;        scrollArray(elem, x, y);&#xD;&#xA;        event.preventDefault();&#xD;&#xA;      }&#xD;&#xA;      function mousedown(event) {&#xD;&#xA;        activeElement = event.target;&#xD;&#xA;      }&#xD;&#xA;      var cache = {};&#xD;&#xA;      setInterval(function() {&#xD;&#xA;        cache = {};&#xD;&#xA;      }, 10 * 1000);&#xD;&#xA;      var uniqueID = (function() {&#xD;&#xA;        var i = 0;&#xD;&#xA;        return function(el) {&#xD;&#xA;          return el.uniqueID || (el.uniqueID = i++);&#xD;&#xA;        };&#xD;&#xA;      })();&#xD;&#xA;      function setCache(elems, overflowing) {&#xD;&#xA;        for (var i = elems.length; i--;)&#xD;&#xA;          cache[uniqueID(elems[i])] = overflowing;&#xD;&#xA;        return overflowing;&#xD;&#xA;      }&#xD;&#xA;      function overflowingAncestor(el) {&#xD;&#xA;        var elems = [];&#xD;&#xA;        var rootScrollHeight = root.scrollHeight;&#xD;&#xA;        do {&#xD;&#xA;          var cached = cache[uniqueID(el)];&#xD;&#xA;          if (cached) {&#xD;&#xA;            return setCache(elems, cached);&#xD;&#xA;          }&#xD;&#xA;          elems.push(el);&#xD;&#xA;          if (rootScrollHeight === el.scrollHeight) {&#xD;&#xA;            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {&#xD;&#xA;              return setCache(elems, document.body);&#xD;&#xA;            }&#xD;&#xA;          } else if (el.clientHeight + 10 < el.scrollHeight) {&#xD;&#xA;            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");&#xD;&#xA;            if (overflow === "scroll" || overflow === "auto") {&#xD;&#xA;              return setCache(elems, el);&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        } while (el = el.parentNode);&#xD;&#xA;      }&#xD;&#xA;      function addEvent(type, fn, bubble) {&#xD;&#xA;        window.addEventListener(type, fn, (bubble || false));&#xD;&#xA;      }&#xD;&#xA;      function removeEvent(type, fn, bubble) {&#xD;&#xA;        window.removeEventListener(type, fn, (bubble || false));&#xD;&#xA;      }&#xD;&#xA;      function isNodeName(el, tag) {&#xD;&#xA;        return (el.nodeName || "").toLowerCase() === tag.toLowerCase();&#xD;&#xA;      }&#xD;&#xA;      function directionCheck(x, y) {&#xD;&#xA;        x = (x > 0) ? 1 : -1;&#xD;&#xA;        y = (y > 0) ? 1 : -1;&#xD;&#xA;        if (direction.x !== x || direction.y !== y) {&#xD;&#xA;          direction.x = x;&#xD;&#xA;          direction.y = y;&#xD;&#xA;          que = [];&#xD;&#xA;          lastScroll = 0;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      var deltaBufferTimer;&#xD;&#xA;      function isTouchpad(deltaY) {&#xD;&#xA;        if (!deltaY)&#xD;&#xA;          return;&#xD;&#xA;        deltaY = Math.abs(deltaY);&#xD;&#xA;        deltaBuffer.push(deltaY);&#xD;&#xA;        deltaBuffer.shift();&#xD;&#xA;        clearTimeout(deltaBufferTimer);&#xD;&#xA;        var allDivisable = (isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120));&#xD;&#xA;        return !allDivisable;&#xD;&#xA;      }&#xD;&#xA;      function isDivisible(n, divisor) {&#xD;&#xA;        return (Math.floor(n / divisor) == n / divisor);&#xD;&#xA;      }&#xD;&#xA;      var requestFrame = (function() {&#xD;&#xA;        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback, element, delay) {&#xD;&#xA;          window.setTimeout(callback, delay || (1000 / 60));&#xD;&#xA;        };&#xD;&#xA;      })();&#xD;&#xA;      function pulse_(x) {&#xD;&#xA;        var val, start, expx;&#xD;&#xA;        x = x * options.pulseScale;&#xD;&#xA;        if (x < 1) {&#xD;&#xA;          val = x - (1 - Math.exp(-x));&#xD;&#xA;        } else {&#xD;&#xA;          start = Math.exp(-1);&#xD;&#xA;          x -= 1;&#xD;&#xA;          expx = 1 - Math.exp(-x);&#xD;&#xA;          val = start + (expx * (1 - start));&#xD;&#xA;        }&#xD;&#xA;        return val * options.pulseNormalize;&#xD;&#xA;      }&#xD;&#xA;      function pulse(x) {&#xD;&#xA;        if (x >= 1)&#xD;&#xA;          return 1;&#xD;&#xA;        if (x <= 0)&#xD;&#xA;          return 0;&#xD;&#xA;        if (options.pulseNormalize == 1) {&#xD;&#xA;          options.pulseNormalize /= pulse_(1);&#xD;&#xA;        }&#xD;&#xA;        return pulse_(x);&#xD;&#xA;      }&#xD;&#xA;      var isChrome = /chrome/i.test(window.navigator.userAgent);&#xD;&#xA;      var wheelEvent = null;&#xD;&#xA;      if ("onwheel" in document.createElement("div"))&#xD;&#xA;        wheelEvent = "wheel";&#xD;&#xA;      else if ("onmousewheel" in document.createElement("div"))&#xD;&#xA;        wheelEvent = "mousewheel";&#xD;&#xA;      if (wheelEvent && isChrome) {&#xD;&#xA;        addEvent(wheelEvent, wheel);&#xD;&#xA;        addEvent("mousedown", mousedown);&#xD;&#xA;        addEvent("load", init);&#xD;&#xA;      }&#xD;&#xA;    })();