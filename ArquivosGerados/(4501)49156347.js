    // this function change img like hover effect using js&#xD;&#xA;    let avatarSimple = document.querySelector(".avatar_simple");&#xD;&#xA;    let avatarQuantumBreak = document.querySelector(".avatar_quantum_break");&#xD;&#xA;    avatarQuantumBreak.style.opacity = "0";&#xD;&#xA;    let hover = () => {&#xD;&#xA;    	avatarQuantumBreak.style.opacity = "1";&#xD;&#xA;    }&#xD;&#xA;    let normal = () => {&#xD;&#xA;    	avatarQuantumBreak.style.opacity = "0";&#xD;&#xA;    }&#xD;&#xA;    // this function adding sticky class to our empty_row block make it position fixed&#xD;&#xA;    window.onscroll = function() {&#xD;&#xA;      let w = document.documentElement.clientWidth;&#xD;&#xA;      if (w > 940) {&#xD;&#xA;      	 var scrolled = window.pageYOffset || document.documentElement.scrollTop;&#xD;&#xA;      	 scrolled >= 20 ? document.querySelector(".empty_row").classList.add("sticky") : document.querySelector(".empty_row").classList.remove("sticky");&#xD;&#xA;      }&#xD;&#xA;    }