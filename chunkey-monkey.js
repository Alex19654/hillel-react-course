// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
   let newArrPart, newArr = []; // create new arrays for sub and main array
   let arrLength = arr.length; // calculate length of array once
   let i;

   /* In each step of cycle create subarray according to the size
      and move it to the main array */
   for(i = 0; i < arrLength; i += size) {
      newArrPart = arr.slice(i, i + size);
      newArr.push(newArrPart);
   }

   return newArr;
 }
 
 chunkArrayInGroups(["a", "b", "c", "d"], 2);