function reverseString(str) {
  const strArr = str.split("")
  for(let i=0; i < strArr.length/2; i++){
    const temp = strArr[i]
    const backI = strArr.length - i - 1
    strArr[i] = str[backI]
    strArr[backI] = temp
  }
  return strArr.join("")
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
// And a written explanation of your solution
// Split the string into an array
// iterate over half of the array moving first to last, second to second to last
  // arr[0] should flip with arr[n-1], arr[1] w/ arr[n-2], etc... 
  // can get the flip partner using arr.length - (index + 1) or (arr.length - index - 1)