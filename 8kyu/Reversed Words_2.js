//Complete the solution so that it reverses all of the words within the string passed in.
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
    let array = str.split(" ");
    let reverse = array.reverse();
    str = reverse.join(' ');
    return str // reverse those words
}