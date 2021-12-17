/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
function arrayPlusArray(arr1, arr2) {

    let resultArr1 = arr1.reduce((sum, current) => sum + current, 0);

    let resultArr2 = arr2.reduce((sum, current) => sum + current, 0);

    return resultArr1 + resultArr2;

}