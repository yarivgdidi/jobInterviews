/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
 return x.toString() === reverseString(x.toString())
};

const reverseString = str => (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
const reverseString2 = str => str.split("").reverse().join("");

console.log('121', isPalindrome(121))
console.log('-121', isPalindrome(-121))