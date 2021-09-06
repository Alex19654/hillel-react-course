// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
   
   let words = str.split(' '); // get array of words
   let i,
       length = words.length; // create variables for cycle
   let newStr = ""; // initialize empty string for final result
   
   for(i = 0; i < length; i += 1) {
      let newWord = words[i].toLowerCase(); // transform the whole world in lower case
      newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1); // change first letter to upper case
      
      /* Add separator between first and penult word */
      if(i != (length - 1)) {
         newStr += newWord + " ";
      } else {
         newStr += newWord ;
      }
   }

   return newStr;
 }
 
 titleCase("I'm a little tea pot");

