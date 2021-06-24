    /* http://meyerweb.com/eric/tools/css/reset/ &#xD;&#xA;       v2.0 | 20110126&#xD;&#xA;       License: none (public domain)&#xD;&#xA;    */&#xD;&#xA;    html, body, div, span, applet, object, iframe,&#xD;&#xA;    h1, h2, h3, h4, h5, h6, p, blockquote, pre,&#xD;&#xA;    a, abbr, acronym, address, big, cite, code,&#xD;&#xA;    del, dfn, em, img, ins, kbd, q, s, samp,&#xD;&#xA;    small, strike, strong, sub, sup, tt, var,&#xD;&#xA;    b, u, i, center,&#xD;&#xA;    dl, dt, dd, ol, ul, li,&#xD;&#xA;    fieldset, form, label, legend,&#xD;&#xA;    table, caption, tbody, tfoot, thead, tr, th, td,&#xD;&#xA;    article, aside, canvas, details, embed, &#xD;&#xA;    figure, figcaption, footer, header, hgroup, &#xD;&#xA;    menu, nav, output, ruby, section, summary,&#xD;&#xA;    time, mark, audio, video {&#xD;&#xA;    	margin: 0;&#xD;&#xA;    	padding: 0;&#xD;&#xA;    	border: 0;&#xD;&#xA;    	font-size: 100%;&#xD;&#xA;    	font: inherit;&#xD;&#xA;    	vertical-align: baseline;&#xD;&#xA;    }&#xD;&#xA;    /* HTML5 display-role reset for older browsers */&#xD;&#xA;    article, aside, details, figcaption, figure, &#xD;&#xA;    footer, header, hgroup, menu, nav, section {&#xD;&#xA;    	display: block;&#xD;&#xA;    }&#xD;&#xA;    body {&#xD;&#xA;    	line-height: 1;&#xD;&#xA;    }&#xD;&#xA;    ol, ul {&#xD;&#xA;    	list-style: none;&#xD;&#xA;    }&#xD;&#xA;    blockquote, q {&#xD;&#xA;    	quotes: none;&#xD;&#xA;    }&#xD;&#xA;    blockquote:before, blockquote:after,&#xD;&#xA;    q:before, q:after {&#xD;&#xA;    	content: '';&#xD;&#xA;    	content: none;&#xD;&#xA;    }&#xD;&#xA;    table {&#xD;&#xA;    	border-collapse: collapse;&#xD;&#xA;    	border-spacing: 0;&#xD;&#xA;    }&#xD;&#xA;    /* required styles */&#xD;&#xA;    .leaflet-pane,&#xD;&#xA;    .leaflet-tile,&#xD;&#xA;    .leaflet-marker-icon,&#xD;&#xA;    .leaflet-marker-shadow,&#xD;&#xA;    .leaflet-tile-container,&#xD;&#xA;    .leaflet-pane > svg,&#xD;&#xA;    .leaflet-pane > canvas,&#xD;&#xA;    .leaflet-zoom-box,&#xD;&#xA;    .leaflet-image-layer,&#xD;&#xA;    .leaflet-layer {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	left: 0;&#xD;&#xA;    	top: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container {&#xD;&#xA;    	overflow: hidden;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tile,&#xD;&#xA;    .leaflet-marker-icon,&#xD;&#xA;    .leaflet-marker-shadow {&#xD;&#xA;    	-webkit-user-select: none;&#xD;&#xA;    	   -moz-user-select: none;&#xD;&#xA;    	        user-select: none;&#xD;&#xA;    	  -webkit-user-drag: none;&#xD;&#xA;    	}&#xD;&#xA;    /* Safari renders non-retina tile on retina better with this, but Chrome is worse */&#xD;&#xA;    .leaflet-safari .leaflet-tile {&#xD;&#xA;    	image-rendering: -webkit-optimize-contrast;&#xD;&#xA;    	}&#xD;&#xA;    /* hack that prevents hw layers "stretching" when loading new tiles */&#xD;&#xA;    .leaflet-safari .leaflet-tile-container {&#xD;&#xA;    	width: 1600px;&#xD;&#xA;    	height: 1600px;&#xD;&#xA;    	-webkit-transform-origin: 0 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-marker-icon,&#xD;&#xA;    .leaflet-marker-shadow {&#xD;&#xA;    	display: block;&#xD;&#xA;    	}&#xD;&#xA;    /* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */&#xD;&#xA;    /* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */&#xD;&#xA;    .leaflet-container .leaflet-overlay-pane svg,&#xD;&#xA;    .leaflet-container .leaflet-marker-pane img,&#xD;&#xA;    .leaflet-container .leaflet-shadow-pane img,&#xD;&#xA;    .leaflet-container .leaflet-tile-pane img,&#xD;&#xA;    .leaflet-container img.leaflet-image-layer,&#xD;&#xA;    .leaflet-container .leaflet-tile {&#xD;&#xA;    	max-width: none !important;&#xD;&#xA;    	max-height: none !important;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container.leaflet-touch-zoom {&#xD;&#xA;    	-ms-touch-action: pan-x pan-y;&#xD;&#xA;    	touch-action: pan-x pan-y;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container.leaflet-touch-drag {&#xD;&#xA;    	-ms-touch-action: pinch-zoom;&#xD;&#xA;    	/* Fallback for FF which doesn't support pinch-zoom */&#xD;&#xA;    	touch-action: none;&#xD;&#xA;    	touch-action: pinch-zoom;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {&#xD;&#xA;    	-ms-touch-action: none;&#xD;&#xA;    	touch-action: none;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-container {&#xD;&#xA;    	-webkit-tap-highlight-color: transparent;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-container a {&#xD;&#xA;    	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);&#xD;&#xA;    }&#xD;&#xA;    .leaflet-tile {&#xD;&#xA;    	filter: inherit;&#xD;&#xA;    	visibility: hidden;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tile-loaded {&#xD;&#xA;    	visibility: inherit;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-box {&#xD;&#xA;    	width: 0;&#xD;&#xA;    	height: 0;&#xD;&#xA;    	-moz-box-sizing: border-box;&#xD;&#xA;    	     box-sizing: border-box;&#xD;&#xA;    	z-index: 800;&#xD;&#xA;    	}&#xD;&#xA;    /* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */&#xD;&#xA;    .leaflet-overlay-pane svg {&#xD;&#xA;    	-moz-user-select: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-pane         { z-index: 400; }&#xD;&#xA;    .leaflet-tile-pane    { z-index: 200; }&#xD;&#xA;    .leaflet-overlay-pane { z-index: 400; }&#xD;&#xA;    .leaflet-shadow-pane  { z-index: 500; }&#xD;&#xA;    .leaflet-marker-pane  { z-index: 600; }&#xD;&#xA;    .leaflet-tooltip-pane   { z-index: 650; }&#xD;&#xA;    .leaflet-popup-pane   { z-index: 700; }&#xD;&#xA;    .leaflet-map-pane canvas { z-index: 100; }&#xD;&#xA;    .leaflet-map-pane svg    { z-index: 200; }&#xD;&#xA;    .leaflet-vml-shape {&#xD;&#xA;    	width: 1px;&#xD;&#xA;    	height: 1px;&#xD;&#xA;    	}&#xD;&#xA;    .lvml {&#xD;&#xA;    	behavior: url(#default#VML);&#xD;&#xA;    	display: inline-block;&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	}&#xD;&#xA;    /* control positioning */&#xD;&#xA;    .leaflet-control {&#xD;&#xA;    	position: relative;&#xD;&#xA;    	z-index: 800;&#xD;&#xA;    	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */&#xD;&#xA;    	pointer-events: auto;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-top,&#xD;&#xA;    .leaflet-bottom {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	z-index: 1000;&#xD;&#xA;    	pointer-events: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-top {&#xD;&#xA;    	top: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-right {&#xD;&#xA;    	right: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bottom {&#xD;&#xA;    	bottom: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-left {&#xD;&#xA;    	left: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control {&#xD;&#xA;    	float: left;&#xD;&#xA;    	clear: both;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-right .leaflet-control {&#xD;&#xA;    	float: right;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-top .leaflet-control {&#xD;&#xA;    	margin-top: 10px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bottom .leaflet-control {&#xD;&#xA;    	margin-bottom: 10px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-left .leaflet-control {&#xD;&#xA;    	margin-left: 10px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-right .leaflet-control {&#xD;&#xA;    	margin-right: 10px;&#xD;&#xA;    	}&#xD;&#xA;    /* zoom and fade animations */&#xD;&#xA;    .leaflet-fade-anim .leaflet-tile {&#xD;&#xA;    	will-change: opacity;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-fade-anim .leaflet-popup {&#xD;&#xA;    	opacity: 0;&#xD;&#xA;    	-webkit-transition: opacity 0.2s linear;&#xD;&#xA;    	   -moz-transition: opacity 0.2s linear;&#xD;&#xA;    	        transition: opacity 0.2s linear;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {&#xD;&#xA;    	opacity: 1;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-animated {&#xD;&#xA;    	-webkit-transform-origin: 0 0;&#xD;&#xA;    	    -ms-transform-origin: 0 0;&#xD;&#xA;    	        transform-origin: 0 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-anim .leaflet-zoom-animated {&#xD;&#xA;    	will-change: transform;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-anim .leaflet-zoom-animated {&#xD;&#xA;    	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);&#xD;&#xA;    	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);&#xD;&#xA;    	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-anim .leaflet-tile,&#xD;&#xA;    .leaflet-pan-anim .leaflet-tile {&#xD;&#xA;    	-webkit-transition: none;&#xD;&#xA;    	   -moz-transition: none;&#xD;&#xA;    	        transition: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-anim .leaflet-zoom-hide {&#xD;&#xA;    	visibility: hidden;&#xD;&#xA;    	}&#xD;&#xA;    /* cursors */&#xD;&#xA;    .leaflet-interactive {&#xD;&#xA;    	cursor: pointer;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-grab {&#xD;&#xA;    	cursor: -webkit-grab;&#xD;&#xA;    	cursor:    -moz-grab;&#xD;&#xA;    	cursor:         grab;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-crosshair,&#xD;&#xA;    .leaflet-crosshair .leaflet-interactive {&#xD;&#xA;    	cursor: crosshair;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-pane,&#xD;&#xA;    .leaflet-control {&#xD;&#xA;    	cursor: auto;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-dragging .leaflet-grab,&#xD;&#xA;    .leaflet-dragging .leaflet-grab .leaflet-interactive,&#xD;&#xA;    .leaflet-dragging .leaflet-marker-draggable {&#xD;&#xA;    	cursor: move;&#xD;&#xA;    	cursor: -webkit-grabbing;&#xD;&#xA;    	cursor:    -moz-grabbing;&#xD;&#xA;    	cursor:         grabbing;&#xD;&#xA;    	}&#xD;&#xA;    /* marker & overlays interactivity */&#xD;&#xA;    .leaflet-marker-icon,&#xD;&#xA;    .leaflet-marker-shadow,&#xD;&#xA;    .leaflet-image-layer,&#xD;&#xA;    .leaflet-pane > svg path,&#xD;&#xA;    .leaflet-tile-container {&#xD;&#xA;    	pointer-events: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-marker-icon.leaflet-interactive,&#xD;&#xA;    .leaflet-image-layer.leaflet-interactive,&#xD;&#xA;    .leaflet-pane > svg path.leaflet-interactive {&#xD;&#xA;    	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */&#xD;&#xA;    	pointer-events: auto;&#xD;&#xA;    	}&#xD;&#xA;    /* visual tweaks */&#xD;&#xA;    .leaflet-container {&#xD;&#xA;    	background: #ddd;&#xD;&#xA;    	outline: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container a {&#xD;&#xA;    	color: #0078A8;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container a.leaflet-active {&#xD;&#xA;    	outline: 2px solid orange;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-zoom-box {&#xD;&#xA;    	border: 2px dotted #38f;&#xD;&#xA;    	background: rgba(255,255,255,0.5);&#xD;&#xA;    	}&#xD;&#xA;    /* general typography */&#xD;&#xA;    .leaflet-container {&#xD;&#xA;    	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;&#xD;&#xA;    	}&#xD;&#xA;    /* general toolbar styles */&#xD;&#xA;    .leaflet-bar {&#xD;&#xA;    	box-shadow: 0 1px 5px rgba(0,0,0,0.65);&#xD;&#xA;    	border-radius: 4px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a,&#xD;&#xA;    .leaflet-bar a:hover {&#xD;&#xA;    	background-color: #fff;&#xD;&#xA;    	border-bottom: 1px solid #ccc;&#xD;&#xA;    	width: 26px;&#xD;&#xA;    	height: 26px;&#xD;&#xA;    	line-height: 26px;&#xD;&#xA;    	display: block;&#xD;&#xA;    	text-align: center;&#xD;&#xA;    	text-decoration: none;&#xD;&#xA;    	color: black;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a,&#xD;&#xA;    .leaflet-control-layers-toggle {&#xD;&#xA;    	background-position: 50% 50%;&#xD;&#xA;    	background-repeat: no-repeat;&#xD;&#xA;    	display: block;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a:hover {&#xD;&#xA;    	background-color: #f4f4f4;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a:first-child {&#xD;&#xA;    	border-top-left-radius: 4px;&#xD;&#xA;    	border-top-right-radius: 4px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a:last-child {&#xD;&#xA;    	border-bottom-left-radius: 4px;&#xD;&#xA;    	border-bottom-right-radius: 4px;&#xD;&#xA;    	border-bottom: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bar a.leaflet-disabled {&#xD;&#xA;    	cursor: default;&#xD;&#xA;    	background-color: #f4f4f4;&#xD;&#xA;    	color: #bbb;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-bar a {&#xD;&#xA;    	width: 30px;&#xD;&#xA;    	height: 30px;&#xD;&#xA;    	line-height: 30px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-bar a:first-child {&#xD;&#xA;    	border-top-left-radius: 2px;&#xD;&#xA;    	border-top-right-radius: 2px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-bar a:last-child {&#xD;&#xA;    	border-bottom-left-radius: 2px;&#xD;&#xA;    	border-bottom-right-radius: 2px;&#xD;&#xA;    	}&#xD;&#xA;    /* zoom control */&#xD;&#xA;    .leaflet-control-zoom-in,&#xD;&#xA;    .leaflet-control-zoom-out {&#xD;&#xA;    	font: bold 18px 'Lucida Console', Monaco, monospace;&#xD;&#xA;    	text-indent: 1px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {&#xD;&#xA;    	font-size: 22px;&#xD;&#xA;    	}&#xD;&#xA;    /* layers control */&#xD;&#xA;    .leaflet-control-layers {&#xD;&#xA;    	box-shadow: 0 1px 5px rgba(0,0,0,0.4);&#xD;&#xA;    	background: #fff;&#xD;&#xA;    	border-radius: 5px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-toggle {&#xD;&#xA;    	background-image: url(images/layers.png);&#xD;&#xA;    	width: 36px;&#xD;&#xA;    	height: 36px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-retina .leaflet-control-layers-toggle {&#xD;&#xA;    	background-image: url(images/layers-2x.png);&#xD;&#xA;    	background-size: 26px 26px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-control-layers-toggle {&#xD;&#xA;    	width: 44px;&#xD;&#xA;    	height: 44px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers .leaflet-control-layers-list,&#xD;&#xA;    .leaflet-control-layers-expanded .leaflet-control-layers-toggle {&#xD;&#xA;    	display: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-expanded .leaflet-control-layers-list {&#xD;&#xA;    	display: block;&#xD;&#xA;    	position: relative;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-expanded {&#xD;&#xA;    	padding: 6px 10px 6px 6px;&#xD;&#xA;    	color: #333;&#xD;&#xA;    	background: #fff;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-scrollbar {&#xD;&#xA;    	overflow-y: scroll;&#xD;&#xA;    	overflow-x: hidden;&#xD;&#xA;    	padding-right: 5px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-selector {&#xD;&#xA;    	margin-top: 2px;&#xD;&#xA;    	position: relative;&#xD;&#xA;    	top: 1px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers label {&#xD;&#xA;    	display: block;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-layers-separator {&#xD;&#xA;    	height: 0;&#xD;&#xA;    	border-top: 1px solid #ddd;&#xD;&#xA;    	margin: 5px -10px 5px -6px;&#xD;&#xA;    	}&#xD;&#xA;    /* Default icon URLs */&#xD;&#xA;    .leaflet-default-icon-path {&#xD;&#xA;    	background-image: url(images/marker-icon.png);&#xD;&#xA;    	}&#xD;&#xA;    /* attribution and scale controls */&#xD;&#xA;    .leaflet-container .leaflet-control-attribution {&#xD;&#xA;    	background: #fff;&#xD;&#xA;    	background: rgba(255, 255, 255, 0.7);&#xD;&#xA;    	margin: 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-attribution,&#xD;&#xA;    .leaflet-control-scale-line {&#xD;&#xA;    	padding: 0 5px;&#xD;&#xA;    	color: #333;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-attribution a {&#xD;&#xA;    	text-decoration: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-attribution a:hover {&#xD;&#xA;    	text-decoration: underline;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container .leaflet-control-attribution,&#xD;&#xA;    .leaflet-container .leaflet-control-scale {&#xD;&#xA;    	font-size: 11px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-left .leaflet-control-scale {&#xD;&#xA;    	margin-left: 5px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-bottom .leaflet-control-scale {&#xD;&#xA;    	margin-bottom: 5px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-scale-line {&#xD;&#xA;    	border: 2px solid #777;&#xD;&#xA;    	border-top: none;&#xD;&#xA;    	line-height: 1.1;&#xD;&#xA;    	padding: 2px 5px 1px;&#xD;&#xA;    	font-size: 11px;&#xD;&#xA;    	white-space: nowrap;&#xD;&#xA;    	overflow: hidden;&#xD;&#xA;    	-moz-box-sizing: border-box;&#xD;&#xA;    	     box-sizing: border-box;&#xD;&#xA;    	background: #fff;&#xD;&#xA;    	background: rgba(255, 255, 255, 0.5);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-scale-line:not(:first-child) {&#xD;&#xA;    	border-top: 2px solid #777;&#xD;&#xA;    	border-bottom: none;&#xD;&#xA;    	margin-top: -2px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-control-scale-line:not(:first-child):not(:last-child) {&#xD;&#xA;    	border-bottom: 2px solid #777;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-control-attribution,&#xD;&#xA;    .leaflet-touch .leaflet-control-layers,&#xD;&#xA;    .leaflet-touch .leaflet-bar {&#xD;&#xA;    	box-shadow: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-touch .leaflet-control-layers,&#xD;&#xA;    .leaflet-touch .leaflet-bar {&#xD;&#xA;    	border: 2px solid rgba(0,0,0,0.2);&#xD;&#xA;    	background-clip: padding-box;&#xD;&#xA;    	}&#xD;&#xA;    /* popup */&#xD;&#xA;    .leaflet-popup {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	text-align: center;&#xD;&#xA;    	margin-bottom: 20px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-content-wrapper {&#xD;&#xA;    	padding: 1px;&#xD;&#xA;    	text-align: left;&#xD;&#xA;    	border-radius: 12px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-content {&#xD;&#xA;    	margin: 13px 19px;&#xD;&#xA;    	line-height: 1.4;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-content p {&#xD;&#xA;    	margin: 18px 0;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-tip-container {&#xD;&#xA;    	width: 40px;&#xD;&#xA;    	height: 20px;&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	left: 50%;&#xD;&#xA;    	margin-left: -20px;&#xD;&#xA;    	overflow: hidden;&#xD;&#xA;    	pointer-events: none;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-tip {&#xD;&#xA;    	width: 17px;&#xD;&#xA;    	height: 17px;&#xD;&#xA;    	padding: 1px;&#xD;&#xA;    	margin: -10px auto 0;&#xD;&#xA;    	-webkit-transform: rotate(45deg);&#xD;&#xA;    	   -moz-transform: rotate(45deg);&#xD;&#xA;    	    -ms-transform: rotate(45deg);&#xD;&#xA;    	        transform: rotate(45deg);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-content-wrapper,&#xD;&#xA;    .leaflet-popup-tip {&#xD;&#xA;    	background: white;&#xD;&#xA;    	color: #333;&#xD;&#xA;    	box-shadow: 0 3px 14px rgba(0,0,0,0.4);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container a.leaflet-popup-close-button {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	top: 0;&#xD;&#xA;    	right: 0;&#xD;&#xA;    	padding: 4px 4px 0 0;&#xD;&#xA;    	border: none;&#xD;&#xA;    	text-align: center;&#xD;&#xA;    	width: 18px;&#xD;&#xA;    	height: 14px;&#xD;&#xA;    	font: 16px/14px Tahoma, Verdana, sans-serif;&#xD;&#xA;    	color: #c3c3c3;&#xD;&#xA;    	text-decoration: none;&#xD;&#xA;    	font-weight: bold;&#xD;&#xA;    	background: transparent;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-container a.leaflet-popup-close-button:hover {&#xD;&#xA;    	color: #999;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-popup-scrolled {&#xD;&#xA;    	overflow: auto;&#xD;&#xA;    	border-bottom: 1px solid #ddd;&#xD;&#xA;    	border-top: 1px solid #ddd;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-oldie .leaflet-popup-content-wrapper {&#xD;&#xA;    	zoom: 1;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-oldie .leaflet-popup-tip {&#xD;&#xA;    	width: 24px;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";&#xD;&#xA;    	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-oldie .leaflet-popup-tip-container {&#xD;&#xA;    	margin-top: -1px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-oldie .leaflet-control-zoom,&#xD;&#xA;    .leaflet-oldie .leaflet-control-layers,&#xD;&#xA;    .leaflet-oldie .leaflet-popup-content-wrapper,&#xD;&#xA;    .leaflet-oldie .leaflet-popup-tip {&#xD;&#xA;    	border: 1px solid #999;&#xD;&#xA;    	}&#xD;&#xA;    /* div icon */&#xD;&#xA;    .leaflet-div-icon {&#xD;&#xA;    	background: #fff;&#xD;&#xA;    	border: 1px solid #666;&#xD;&#xA;    	}&#xD;&#xA;    /* Tooltip */&#xD;&#xA;    /* Base styles for the element that has a tooltip */&#xD;&#xA;    .leaflet-tooltip {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	padding: 6px;&#xD;&#xA;    	background-color: #fff;&#xD;&#xA;    	border: 1px solid #fff;&#xD;&#xA;    	border-radius: 3px;&#xD;&#xA;    	color: #222;&#xD;&#xA;    	white-space: nowrap;&#xD;&#xA;    	-webkit-user-select: none;&#xD;&#xA;    	-moz-user-select: none;&#xD;&#xA;    	-ms-user-select: none;&#xD;&#xA;    	user-select: none;&#xD;&#xA;    	pointer-events: none;&#xD;&#xA;    	box-shadow: 0 1px 3px rgba(0,0,0,0.4);&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip.leaflet-clickable {&#xD;&#xA;    	cursor: pointer;&#xD;&#xA;    	pointer-events: auto;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-top:before,&#xD;&#xA;    .leaflet-tooltip-bottom:before,&#xD;&#xA;    .leaflet-tooltip-left:before,&#xD;&#xA;    .leaflet-tooltip-right:before {&#xD;&#xA;    	position: absolute;&#xD;&#xA;    	pointer-events: none;&#xD;&#xA;    	border: 6px solid transparent;&#xD;&#xA;    	background: transparent;&#xD;&#xA;    	content: "";&#xD;&#xA;    	}&#xD;&#xA;    /* Directions */&#xD;&#xA;    .leaflet-tooltip-bottom {&#xD;&#xA;    	margin-top: 6px;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-tooltip-top {&#xD;&#xA;    	margin-top: -6px;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-tooltip-bottom:before,&#xD;&#xA;    .leaflet-tooltip-top:before {&#xD;&#xA;    	left: 50%;&#xD;&#xA;    	margin-left: -6px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-top:before {&#xD;&#xA;    	bottom: 0;&#xD;&#xA;    	margin-bottom: -12px;&#xD;&#xA;    	border-top-color: #fff;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-bottom:before {&#xD;&#xA;    	top: 0;&#xD;&#xA;    	margin-top: -12px;&#xD;&#xA;    	margin-left: -6px;&#xD;&#xA;    	border-bottom-color: #fff;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-left {&#xD;&#xA;    	margin-left: -6px;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-tooltip-right {&#xD;&#xA;    	margin-left: 6px;&#xD;&#xA;    }&#xD;&#xA;    .leaflet-tooltip-left:before,&#xD;&#xA;    .leaflet-tooltip-right:before {&#xD;&#xA;    	top: 50%;&#xD;&#xA;    	margin-top: -6px;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-left:before {&#xD;&#xA;    	right: 0;&#xD;&#xA;    	margin-right: -12px;&#xD;&#xA;    	border-left-color: #fff;&#xD;&#xA;    	}&#xD;&#xA;    .leaflet-tooltip-right:before {&#xD;&#xA;    	left: 0;&#xD;&#xA;    	margin-left: -12px;&#xD;&#xA;    	border-right-color: #fff;&#xD;&#xA;    	}&#xD;&#xA;    html, body {&#xD;&#xA;        width  : 100%;&#xD;&#xA;        height : 100%;&#xD;&#xA;    }&#xD;&#xA;    .map-container {&#xD;&#xA;        width : 100%;&#xD;&#xA;        height : 100%;&#xD;&#xA;        &#xD;&#xA;    }