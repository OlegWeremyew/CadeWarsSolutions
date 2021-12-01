function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i]
    }
    let mean = sum/classPoints.length
    if (mean <= yourPoints) {
        return true
    } else {
        return false
    }
}