const reverseString = function(str) {

    const arr = str.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        const j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
