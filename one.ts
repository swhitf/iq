/** Question **/

// Write a function that detects a palindrome (a word that is the same forwards and backwards).


function isPalindrome(str:string):boolean
{
    throw 'Not implemented';
}

/** Test **/

let list = [
    'test',
    'alphabet',
    'racecar',
    'joke',
    'madam',
    'hannah',
    'kpmg',
];

for (let item of list)
{
    console.log(`${item}: ${isPalindrome(item)}`);
}

/** Result 

PS C:\Home\iq> tsc | node .\one.js
test: false
alphabet: false
racecar: true
joke: false
madam: true
hannah: true
kpmg: false

**/