    const compareWords = (array1, array2) => {&#xD;&#xA;        let guess = []&#xD;&#xA;        &#xD;&#xA;        array1.forEach((letter, i) => {&#xD;&#xA;            let guessMap = { letter }&#xD;&#xA;    &#xD;&#xA;            // Does the word contain the correct letter&#xD;&#xA;            if (array2.includes(letter)) {&#xD;&#xA;                guessMap.includes = true&#xD;&#xA;        &#xD;&#xA;                // Is the correct letter in the same position?&#xD;&#xA;                if (array1[i] === array2[i]) {&#xD;&#xA;                    guessMap.samePos = true&#xD;&#xA;                } else {&#xD;&#xA;                    guessMap.samePos = false&#xD;&#xA;                }&#xD;&#xA;            } else {&#xD;&#xA;                guessMap.includes = false&#xD;&#xA;                guessMap.samePos = false&#xD;&#xA;            }&#xD;&#xA;            guess.push(guessMap)&#xD;&#xA;        })&#xD;&#xA;        console.log(guess)&#xD;&#xA;    }