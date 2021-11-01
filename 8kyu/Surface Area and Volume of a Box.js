/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
function getSize(width, height, depth) {
    let s = 2 * ((width * depth) + (width * height) + (height * depth));
    let v = width * height * depth;
    let arr = [];
    arr[0] = s;
    arr[1] = v;
    return arr;
}