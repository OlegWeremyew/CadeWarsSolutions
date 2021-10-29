//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A) {
    let R;//radius
    let S;//square
    let out;
    R = ((2 * A) / Math.PI);
    S = R * R;
    out = S.toFixed(2);
    return +out;
}