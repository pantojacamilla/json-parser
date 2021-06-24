    .steps {&#xD;&#xA;    	 position: relative;&#xD;&#xA;    	 margin-top: 4rem;&#xD;&#xA;    	 padding-top: 14rem;&#xD;&#xA;    	 display: -webkit-flex;&#xD;&#xA;    	 display: -moz-flex;&#xD;&#xA;    	 display: -ms-flex;&#xD;&#xA;    	 display: -o-flex;&#xD;&#xA;    	 display: flex;&#xD;&#xA;    }&#xD;&#xA;     .steps #pointer {&#xD;&#xA;    	 position: absolute;&#xD;&#xA;    	 top: 0;&#xD;&#xA;    	 left: 0;&#xD;&#xA;    	 width: 20%;&#xD;&#xA;    	 text-align: center;&#xD;&#xA;    	 -webkit-transition: left 0.3s ease;&#xD;&#xA;    	 -o-transition: left 0.3s ease;&#xD;&#xA;    	 transition: left 0.3s ease;&#xD;&#xA;    }&#xD;&#xA;     .steps #pointer svg {&#xD;&#xA;    	 width: 10rem;&#xD;&#xA;    	 height: auto;&#xD;&#xA;    }&#xD;&#xA;     .steps .step {&#xD;&#xA;    	 width: 20%;&#xD;&#xA;    	 text-align: center;&#xD;&#xA;    }&#xD;&#xA;     .steps .step svg circle {&#xD;&#xA;    	 fill: blue;&#xD;&#xA;    	 -webkit-transition: fill 0.3s ease;&#xD;&#xA;    	 -o-transition: fill 0.3s ease;&#xD;&#xA;    	 transition: fill 0.3s ease;&#xD;&#xA;    }&#xD;&#xA;     .steps .step p {&#xD;&#xA;    	 font-size: 1.8rem;&#xD;&#xA;    	 font-weight: 600;&#xD;&#xA;    	 color: blue;&#xD;&#xA;    	 opacity: 0;&#xD;&#xA;    	 max-height: 0;&#xD;&#xA;    	 overflow: hidden;&#xD;&#xA;    	 -webkit-transition: max-height 0s, opacity 0.3s ease;&#xD;&#xA;    	 -o-transition: max-height 0s, opacity 0.3s ease;&#xD;&#xA;    	 transition: max-height 0s, opacity 0.3s ease;&#xD;&#xA;    }&#xD;&#xA;     .steps .step.active svg circle {&#xD;&#xA;    	 fill: lightblue;&#xD;&#xA;    }&#xD;&#xA;     .steps .step.active p {&#xD;&#xA;    	 opacity: 1;&#xD;&#xA;    	 max-height: unset;&#xD;&#xA;    }&#xD;&#xA;     