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