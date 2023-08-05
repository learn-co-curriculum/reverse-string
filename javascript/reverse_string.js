function reverseString(str) {
  return str.split("").reverse().join("");
}

if (require.main === module) {
  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");

  console.log("Expecting: 'ab'");
  console.log("=>", reverseString("ba"));

  console.log("");

  console.log("Expecting: 'tac'");
  console.log("=>", reverseString("cat"));

  console.log("");

  console.log("Expecting: 'sham-meow'");
  console.log("=>", reverseString("woem-mahs"));

  console.log("");

  console.log("Expecting: 'racecar'");
  console.log("=>", reverseString("racecar"));

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
//## Before you start coding

// 1. Rewrite the problem in your own words
  // - Write a function that takes a string and returns the string in reverse order
//2. Validate that you understand the problem
  // - I need the tests to return the string in reverse order
//3. Write your own test cases

//4. Pseudocode
//5. Code!


//Here's what the function does:

// Takes a string as input. A string in JavaScript can be thought of as an array of characters, with each character at a specific index.
// Calls the split('') method on the string, which creates a new array where each element is a character from the string. The split('') method is part of the String object prototype in JavaScript.
// Calls the reverse() method on the array returned by split(''). The reverse() method is part of the Array object prototype in JavaScript and modifies the array in place to reverse its elements.
// Calls the join('') method on the array returned by reverse(). This concatenates all the elements of the array back into a single string, with each element becoming a single character in the string.
// To elaborate on the data structures used:

// Strings: In JavaScript, strings are essentially arrays of characters. They have a length property and can be accessed by index.

// Arrays: A JavaScript Array is a global object that is used in the construction of arrays; which are high-level, list-like objects.

// Here is a pseudocode representation of the function:

// FUNCTION reverseString(INPUT string):
//  SET reversedString = string.SPLIT('').REVERSE().JOIN('')
// RETURN reversedString

// The reverseString function is straightforward: it uses built-in JavaScript methods to reverse the characters in a string. Its time complexity is O(n), where n is the length of the string, because each method (split, reverse, join) traverses the entire string once. Although these methods are chained together, they each complete before the next begins, so their time complexities add rather than multiply. The space complexity is also O(n), because split creates a new array that stores the characters of the string.

