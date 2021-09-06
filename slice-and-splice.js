// Slice and Splice

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
   
   let newArr = []; // create a new array for final result
   let length = arr2.length + 1; // check length for the cycle

   for(let i = 0; i < length; i += 1) {
      /* Push new elements to the array according to the order*/
      if (i == n) {
         newArr = newArr.concat(arr1);
      } else if (i < n){
         newArr.push(arr2[i]); 
      } else {
         newArr.push(arr2[i-1]); 
      }
   }

   return newArr;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);