function squareDigits(num) {
    let str = String(num)
    let arr = str.split('')
    let arr2 = arr.map(item => item ** 2)
    let str2 = arr2.join("")
    return Number(str2)
}