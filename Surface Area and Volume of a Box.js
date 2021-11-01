function getSize(width, height, depth) {
    let s = 2 * ((width * depth) + (width * height) + (height * depth));
    let v = width * height * depth;
    let arr = [];
    arr[0] = s;
    arr[1] = v;
    return arr;
}