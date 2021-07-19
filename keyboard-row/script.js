/*
 * Title: Keyboard Row
 * Description: Find word match in keyboard row
 * Author: Samin Yasar
 * Date: 19/July/2021
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
    const wordMaps = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let results = [];
    let currentCharacterRow = -1;
    let firstRowHit = false;
    let secondRowHit = false;
    let thirdRowHit = false;
    words.forEach((word) => {
        firstRowHit = secondRowHit = thirdRowHit = false;
        currentCharacterRow = -1;
        wordMaps.forEach((wordMap) => {
            if (wordMap.includes(word.toLowerCase().charAt(0))) {
                currentCharacterRow = wordMaps.findIndex(
                    (el) => el === wordMap
                );
                switch (currentCharacterRow) {
                    case 0:
                        firstRowHit = true;
                        break;
                    case 1:
                        secondRowHit = true;
                        break;
                    case 2:
                        thirdRowHit = true;
                        break;
                    default:
                        firstRowHit = secondRowHit = thirdRowHit = false;
                        break;
                }
            }
        });
        if (
            word
                .toLowerCase()
                .split("")
                .slice(1)
                .every((character) => {
                    return wordMaps[currentCharacterRow].includes(character);
                })
        ) {
            results.push(word);
        } else return;
    });
    return results;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

// status: Completed
