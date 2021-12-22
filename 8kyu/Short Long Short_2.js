// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);