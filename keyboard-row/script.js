/*
 * Title: Keyboard Row
 * Description: https://leetcode.com/problems/keyboard-row/
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
    words.forEach((word) => {
        firstRowHit = secondRowHit = thirdRowHit = false;
        currentCharacterRow = -1;
        wordMaps.forEach((wordMap) => {
            if (wordMap.includes(word.toLowerCase().charAt(0))) {
                currentCharacterRow = wordMaps.findIndex(
                    (el) => el === wordMap
                );
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
