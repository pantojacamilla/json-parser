    function scroll(id: number) {&#xD;&#xA;                for (let k = 0; k < sectionsForScroll.length; k++) {&#xD;&#xA;                    if (sectionsForScroll[k].dataset.navId == id) {&#xD;&#xA;                        const bigginer = sectionsForScroll[0].getBoundingClientRect().top;&#xD;&#xA;                        console.log( bigginer + 'px  how far we from the start ');&#xD;&#xA;                        const distanceToGo= sectionsForScroll[k].getBoundingClientRect().top;&#xD;&#xA;                        console.log(sectionsForScroll[k].offsetTop);&#xD;&#xA;                        const distanceToScroll = bigginer - distanceToGo;&#xD;&#xA;                        console.log(distanceToGo + ' where we have to go ');&#xD;&#xA;                        console.log(distanceToScroll + ' what the distanse we need to scroll ');&#xD;&#xA;                        main.style.transform = 'translateY(' + distanceToScroll + 'px)';&#xD;&#xA;                        // main.scrollTop=distanceToGo;&#xD;&#xA;                        // window.scrollBy(0, distanceToGo);&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }