// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ''
    let i = 0
    let j = s.length;
    while (j>0) {
        while ( i < s.length) {
            const current = s.slice(i,j)
            if (isPalindrome(current)) {
              if(current.length > longest.length) {
                  longest = current
              }
            }
            i+=1
        }
        i=0
        j-=1
    }
    return longest;
};

const isPalindrome = function(x) {
    return x === reverseString(x)
};

const reverseString = str => str.split("").reverse().join("");
console.log('longest: ',  longestPalindrome('fsfl safj saf alsdf fgasator arepo tenet opera rotas fhwkefhwq rqwer t'))
// console.log('longest: ',  longestPalindrome('teneta'))