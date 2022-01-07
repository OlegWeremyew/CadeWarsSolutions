/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
    if (input === null) {
        return []
    } else if (input) {
        let pos = 0
        let neg = 0
        let arr = [pos, neg]
        pos = input.map(m => (m !== null && m > 0) ? (arr[0] += 1) : arr[0])
        neg = input.map(m => (m !== null && m < 0) ? (arr[1] += m) : arr[1])

        if (arr[1] === 0 && arr[0] === 0) {
            return arr.filter(f => f !== 0)
        }

        return arr
    }
}

console.log(countPositivesSumNegatives([0, -97]))