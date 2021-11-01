/*

*/
function getNumberFromString(s) {
    let num = s.replace(/[^+\d]/g, '');
    return Number(num);
}