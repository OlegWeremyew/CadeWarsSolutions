/*
    Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.
*/

function divide(weight) {
    return (weight > 2 && weight % 2 === 0) ? true : false;
}