        var birdArray = ["Owl", "Hummingbird", "Toucan"]&#xD;&#xA;        var dogArray = ["Bulldog", "Dash Hound", "German Shepard"]&#xD;&#xA;        var fishArray = ["Goldfish", "Mahi Mahi", "Catfish"]&#xD;&#xA;        var randomBird = birdArray[Math.floor(Math.random() * birdArray.length)];&#xD;&#xA;        var randomDog = dogArray[Math.floor(Math.random() * dogArray.length)];&#xD;&#xA;        var randomFish = fishArray[Math.floor(Math.random() * fishArray.length)];&#xD;&#xA;        function initFlashCardGame() {&#xD;&#xA;                var classname = document.getElementsByClassName("row")&#xD;&#xA;                for (var i = 0; i < classname.length; i++) {&#xD;&#xA;                    var datavalue;&#xD;&#xA;                    datavalue = classname[i].getAttribute("data-animal-cat");&#xD;&#xA;                    classname[i].addEventListener("click", function() {&#xD;&#xA;                        displayAnimal(datavalue);&#xD;&#xA;                    });&#xD;&#xA;                }&#xD;&#xA;                function displayAnimal(datavalue) {&#xD;&#xA;                    var animalType;&#xD;&#xA;                    if (datavalue === "birds") {&#xD;&#xA;                        alert(randomBird);&#xD;&#xA;                    } else if (datavalue = "dogs") {&#xD;&#xA;                        alert(randomDog);&#xD;&#xA;                    } else if (datavalue = "fish") {&#xD;&#xA;                        alert(randomFish);&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            //add event listener when window loads        &#xD;&#xA;        window.addEventListener("load", initFlashCardGame);