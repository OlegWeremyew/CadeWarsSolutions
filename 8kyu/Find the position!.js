/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta
 */

function position(letter) {
    let result = "Position of alphabet: ";
    let code = letter.toUpperCase().charCodeAt(letter)
    if (code > 64 && code < 91) result += (code - 64);
    return result;
}

console.log(position("b"))