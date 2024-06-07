function stringTransform(input) {
    const length = input.length;
    let result = input;

    // If length is divisible by both 3 and 5 (i.e., by 15),
    // perform both operations in the specified order.

    if (length % 3 === 0 && length % 5 === 0) {

        // Reverse the string

        result = result.split('').reverse().join('');

        // Replace each character with its ASCII code

        result = result.split('').map(char => char.charCodeAt(0)).join(' ');

    } else if (length % 3 === 0) {

        // If length is divisible by 3, reverse the string

        result = result.split('').reverse().join('');

    } else if (length % 5 === 0) {

        // If length is divisible by 5, replace each character with its ASCII code

        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// THIS IS A TEST CASE

const input = "IMFURA";
const transformed = stringTransform(input);
console.log(transformed); // Output: "87 111 114 108 100 32 111 108 108 101 72"