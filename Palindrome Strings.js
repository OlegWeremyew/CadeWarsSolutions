function isPalindrome(line) {
    let str = line.toString();
    let reverse = str.split("").reverse().join('');
    return (reverse == line) ? true : false;
}