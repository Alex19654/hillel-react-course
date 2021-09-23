// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. 
// For example, 121 is palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */

 const x = 121;

 var isPalindrome = function(x) {
    let stringNum = x.toString();
    let stringLength = stringNum.length;
    for (let i = 1; i <= stringNum.length; i++) {
       let startSymbol = stringNum[i-1];
       let endSymbol = stringNum[stringLength - i];
       if (startSymbol !== endSymbol) {
          return false;
       }
    }
    return true;
};


isPalindrome(x);