/*
Write a function that checks if a given string (case insensitive) is a palindrome.
 */

function isPalindrome(x) {
    let str = []
    let str2 = []
    for (let i = 0; i < x.length; i++) {
        str.push(x[i]);
        str2.unshift(x[i])
    }
    if (str.join("").toLowerCase() === str2.join("").toLowerCase()) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("Madam"))