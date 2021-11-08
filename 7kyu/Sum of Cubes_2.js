function sumCubes(n) {
    if (n > 0) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i ** 3;
        }
        return sum;
    }
}