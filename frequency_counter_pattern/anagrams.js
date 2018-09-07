
// Solution #1

function validAnagram(str1, str2){
 if (str1.length !== str2.length) {
     return false;
 }

 let frequencyCounter1 = {}
 let frequencyCounter2 = {}

 for (let val of str1) {
     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
 }
 for (let val of str2) {
     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
 }
 for (let key in frequencyCounter1) {
     if (!(key in frequencyCounter2)) {
         return false;
     }
     if(frequencyCounter2[key] !== frequencyCounter1[key]) {
       return false;
     }
 }
 return true;
}

// Solution #2
function validAnagram(str1, str2){
 if (str1.length !== str2.length) {
     return false;
 }
 const lookup = {};

 for (let i = 0; i < str1.length; i++) {
   let letter = str1[i];
   // If letter exists - increment; otherwise - set to 1
   lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
 }

 for (let i = 0; i < str2.length; i++) {
   let letter = str2[i];
   // It's NOT an anagram if it can't find letter or letter is zero
   if (!lookup[letter]) {
     return false;
   } else {
     // check if letter is zero
     lookup[letter] -= 1
   }
 }
 return true;
}
