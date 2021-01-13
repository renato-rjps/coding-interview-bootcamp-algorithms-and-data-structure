// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reverseWithReduce(str);
}

function reverseWithArrayReverse(str) {
   return str.split('').reverse().join('');
}

function reverseWithFor(str) {
    let reversed = '';
    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverseWithReduce(str) {
    return str.split('').reduce((rev,cur) => cur + rev, '');
}

reverse('123456');

module.exports = reverse;
