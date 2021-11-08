/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?*/
function spongeMeme(sentence) {
    let low = sentence.toLowerCase();
    let arr = low.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i].toUpperCase();
        }
        arr[i];
    }
    return arr.join('');
}