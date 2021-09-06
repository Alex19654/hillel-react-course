// Falsy Bouncer

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
   let newArr = []; // create new array for final result
   /* Through array check every item by converting to boolean and push not false items to the final array */
   for (let item of arr) {
      if(!!item) {
         newArr.push(item);
      }
   }
   
   return newArr;
 }
 
 bouncer([7, "ate", "", false, 9]);