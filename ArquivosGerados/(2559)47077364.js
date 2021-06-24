    /*------------------------------ Variables -----------------------------------*/&#xD;&#xA;    const menu = document.querySelector('.menu');&#xD;&#xA;    const items = [...document.querySelectorAll('.item')];&#xD;&#xA;    const itemsLink = [...document.querySelectorAll('.item-link')];&#xD;&#xA;    const itemsContent = [...document.querySelectorAll('.item-content')];&#xD;&#xA;    let translateYHeight = itemsLink[0].offsetHeight;&#xD;&#xA;    console.log(translateYHeight)&#xD;&#xA;    let textContentItemAtTheTopOfTheStack;&#xD;&#xA;    let transitionInSeconds;&#xD;&#xA;    let transitionInMilliSeconds;&#xD;&#xA;    let clickedItemIndex;&#xD;&#xA;    /*--------------------------- Functions - callbacks --------------------------*/&#xD;&#xA;    //Get the index. Called in the STEP 1.&#xD;&#xA;    function getTheIndexOfTheClickedItem(e) {&#xD;&#xA;      //Variable&#xD;&#xA;      let clicked;&#xD;&#xA;      //We select the <p> only&#xD;&#xA;      if (e.target.tagName == "LI") {&#xD;&#xA;        clicked = e.target.firstElementChild.firstElementChild;&#xD;&#xA;      } else if (e.target.tagName == "A") {&#xD;&#xA;        clicked = e.target.firstElementChild;&#xD;&#xA;      } else if (e.target.tagName == "P") {&#xD;&#xA;        clicked = e.target;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;      //Nothing happen if we clicked on the first item&#xD;&#xA;      if (clickedItemIndex === 0) {&#xD;&#xA;        return;&#xD;&#xA;      }&#xD;&#xA;      //We get the index of the clicked item&#xD;&#xA;      clickedItemIndex = items.indexOf(clicked.parentElement.parentElement);&#xD;&#xA;      //We get the textContent of the clicked item, so that when the textContent&#xD;&#xA;      //of the first item in the menu is the proper textContent, we are done&#xD;&#xA;      textContentItemAtTheTopOfTheStack = itemsContent[clickedItemIndex].textContent;&#xD;&#xA;      //We set the total transition time to 1 second&#xD;&#xA;      transitionInSeconds = 1 / clickedItemIndex;&#xD;&#xA;      transitionInMilliSeconds = transitionInSeconds * 1000;&#xD;&#xA;      translateAndFade();&#xD;&#xA;    }&#xD;&#xA;    /*--------------------------- STEP 1 --------------------------*/&#xD;&#xA;    function translateAndFade() {&#xD;&#xA;      //We put the proper transition depending on when the translateAndFade function&#xD;&#xA;      //is called&#xD;&#xA;      let transitionStyle;&#xD;&#xA;      if (clickedItemIndex === 1) {&#xD;&#xA;        transitionStyle = 'ease-in-out';&#xD;&#xA;      } else if (itemsLink[1].textContent.trim() === textContentItemAtTheTopOfTheStack) {&#xD;&#xA;        transitionStyle = 'ease-out';&#xD;&#xA;      } else if (itemsLink[clickedItemIndex].textContent.trim() === textContentItemAtTheTopOfTheStack) {&#xD;&#xA;        transitionStyle = 'ease-in';&#xD;&#xA;      } else {&#xD;&#xA;        transitionStyle = 'linear';&#xD;&#xA;      }&#xD;&#xA;      //We add the transitions and fadings we want&#xD;&#xA;      itemsLink.forEach(link => {&#xD;&#xA;        if (itemsLink.indexOf(link) === 0) {&#xD;&#xA;          //We add the fade-out for the first menu-item&#xD;&#xA;          link.style.opacity = 0;&#xD;&#xA;          link.style.transform = `translateY(-${translateYHeight}px)`;&#xD;&#xA;          link.style.transition = `all ${transitionInSeconds}s ${transitionStyle}`;&#xD;&#xA;        } else if (itemsLink.indexOf(link) === (itemsLink.length - 1)) {&#xD;&#xA;          //We add the fade-in for the last menu-item&#xD;&#xA;          link.firstElementChild.textContent = itemsLink[0].textContent.trim();&#xD;&#xA;          link.style.opacity = 1;&#xD;&#xA;          link.style.transform = `translateY(-${translateYHeight}px)`;&#xD;&#xA;          link.style.transition = `all ${transitionInSeconds}s ${transitionStyle}`;&#xD;&#xA;        } else {&#xD;&#xA;          //We translate every menu-item one step up&#xD;&#xA;          link.style.transform = `translateY(-${translateYHeight}px)`;&#xD;&#xA;          link.style.transition = `all ${transitionInSeconds}s ${transitionStyle}`;&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      //We call repopulateMenu, to repopulate the menu, with enough timeout to&#xD;&#xA;      //let the transition happening&#xD;&#xA;      window.setTimeout(repopulateMenu, transitionInMilliSeconds);&#xD;&#xA;    }&#xD;&#xA;    /*--------------------------- STEP 2 --------------------------*/&#xD;&#xA;    function repopulateMenu() {&#xD;&#xA;      //We remove the transitions&#xD;&#xA;      itemsLink.forEach(link => {&#xD;&#xA;        if (itemsLink.indexOf(link) === 0) {&#xD;&#xA;          //We remove the fade-out for the first menu-item&#xD;&#xA;          link.style.opacity = 1;&#xD;&#xA;          link.style.transform = ``;&#xD;&#xA;          link.style.transition = ``;&#xD;&#xA;        } else if (itemsLink.indexOf(link) === (itemsLink.length - 1)) {&#xD;&#xA;          //We remove the fade-in for the last menu-item&#xD;&#xA;          link.style.opacity = 0;&#xD;&#xA;          link.style.transform = ``;&#xD;&#xA;          link.style.transition = ``;&#xD;&#xA;        } else {&#xD;&#xA;          //We remove the translation of all of them&#xD;&#xA;          link.style.transform = ``;&#xD;&#xA;          link.style.transition = ``;&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      //We update the textContents&#xD;&#xA;      itemsContent.forEach(item => {&#xD;&#xA;        // We put back emptiness for the last menu-item&#xD;&#xA;        if (itemsContent.indexOf(item) === (itemsContent.length - 1)) {&#xD;&#xA;          item.textContent = '';&#xD;&#xA;        } else {&#xD;&#xA;          //We replace the content of the item by the one below it&#xD;&#xA;          item.textContent = itemsContent[itemsContent.indexOf(item) + 1].textContent.trim();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      //We do all again until the proper item-menu is on top of the stack.&#xD;&#xA;      if (itemsContent[0].textContent != textContentItemAtTheTopOfTheStack) {&#xD;&#xA;        window.setTimeout(translateAndFade, 20);&#xD;&#xA;      } else {&#xD;&#xA;        return;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    /*--------------------------- Event listeners --------------------------------*/&#xD;&#xA;    menu.addEventListener('click', getTheIndexOfTheClickedItem);