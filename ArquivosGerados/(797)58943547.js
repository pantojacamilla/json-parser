    const navSlide = () => {&#xD;&#xA;        const burger = document.querySelector(".burger");&#xD;&#xA;        const nav = document.querySelector(".nav-links");&#xD;&#xA;        const navLinks = document.querySelectorAll(".nav-links li");&#xD;&#xA;        burger.addEventListener('click', () => {&#xD;&#xA;            // toggle nav&#xD;&#xA;            nav.classList.toggle('nav-active');&#xD;&#xA;            // animate links&#xD;&#xA;            navLinks.forEach((link, index) => {&#xD;&#xA;                if (link.style.animation) {&#xD;&#xA;                    link.style.animation = '';&#xD;&#xA;                } else {&#xD;&#xA;                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;            // burger animation&#xD;&#xA;            burger.classList.toggle("toggle")&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    navSlide();