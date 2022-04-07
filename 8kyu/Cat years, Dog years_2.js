const humanYearsCatYearsDogYears = function (humanYears) {
    let arr = []
    let arr1 = humanYears
    let arr2 = humanYears === 1
        ? 15
        : humanYears === 2
            ? 24
            : 24 + (humanYears - 2) * 4
    let arr3 = humanYears === 1
        ? 15
        : humanYears === 2
            ? 24
            : 24 + (humanYears - 2) * 5
    arr = [arr1, arr2, arr3]
    return arr
}

/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */