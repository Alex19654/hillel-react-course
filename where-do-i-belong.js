// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {

   /* Sort array */
   arr.sort((a, b) => {
      if (a > b) {
         return 1;
      } else if (a < b) {
         return -1;
      } else {
         return 0;
      }
   })

   /* Find index where we need to place num */
   let number = arr.findIndex( (item) => item >= num );

   /* Check the number for cases where it shoud be placed last or first */
   if (arr.length === 0) {
      return 0
   } else if (number === -1) {
      return arr.length;
   } else {
      return number;
   }
 }
 
 getIndexToIns([2, 5, 10], 15)