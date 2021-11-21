/*

*/
function sumArray(array) {
    let sum = 0;
    if (array === null) {
        return sum;
    } else {
        let arr = array.sort((a, b) => b - a)
        arr.shift();
        arr.pop();
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    }
    return sum
}