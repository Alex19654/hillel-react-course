// Implement strStr().

// Return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let cycleStep = needle.length;
    if(needle === '') {
      return 0; 
    }
    for(let i = 0; i < haystack.length; i += 1) {
       console.log("i = ", haystack.substring(i, i+cycleStep))
       if (haystack.substring(i, i+cycleStep) === needle) {
         return i;
       } 
    }
    return -1;
};


strStr("hello", "ll");