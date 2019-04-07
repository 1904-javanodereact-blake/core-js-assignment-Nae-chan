/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  for (i = 1; i < someNum;) {
    someNum = someNum - 2;
  }
  if (someNum === 0) {
    console.log(`${true}, Number is even`);
  } else {
    console.log(`${false}, Number is odd`);
  }
}
//input a number to test the function above
isEven(3);