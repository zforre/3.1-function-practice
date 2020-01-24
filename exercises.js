// git push and git push origin
//origin is here: https://github.com/ccs-student-submissions/3-1-function-practice-zforre
(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

let max = (num1,num2) => {
  if(num1>=num2) {
    return (num1);
  } else {
    return (num2);
  }
}
max(5,4);


console.assert(max(5, 4) === 5, 'error: max function');
console.assert(max(2, 2) === 2, 'error: function');


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  let maxOfThree = (num1, num2, num3) => {
      return Math.max(num1, num2, num3);
  }

  maxOfThree(6,5,4);


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

let isVowel = (char) => {

  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }

}

isVowel('k');

console.assert(isVowel('a') === true, 'error: isVowel()');
console.assert(isVowel('z') === false, 'error: isVowel()');


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
//mady's answer, I couldnt figure this one out
let rovarspraket = (str) => {
  let consanants = 'bcdfghjklmnpqrstvwxyz'
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if(!consonants.includes(str[i])) {
      result += str[i];
    } else {
      result += str[i] + 'o' + str[i];
    }
  }
  return result;
}

console.assert(rovarspraket('this is fun') === 'tothohisos isos fofunon', 'error: rovarspraket function');
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  var arr = [1,2,3,4];
  var sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);

  console.log(sum)


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  let reverse = (str) => {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }
  reverse('jag testar');




  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  let findLongestWord = (str) => {
    var strSplit = str.split(' ');
    var longest = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longest){
  	longest = strSplit[i].length;
       }
    }
    return longest;
  }
  findLongestWord("I think i'm actually starting to understand JavaScript functions!");



  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------





  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

//test if it works
console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === x);
console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === x);
console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === x);

})();
