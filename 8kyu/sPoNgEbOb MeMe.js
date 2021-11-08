/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

function spongeMeme(sentence) {
    let arr = sentence.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.toUpperCase(i);
        }
    }
    return arr.join('');
}
console.log(sentence);