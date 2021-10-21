function reverseString(str) {
  let res = "";
  for (let end = str.length-1; end >= 0; end--) {
    res += str[end];
  }
  return res;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/** 
 *  define three pointers
 *  one points to the beginning
 *  one points to the end
 *  one is a holder/container for the switch
 *  switch the characters
 */ 

// And a written explanation of your solution