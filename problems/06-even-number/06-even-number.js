/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  for(i=1; i< someNum;){
      someNum = someNum - 2;
      console.log(someNum);
  }
  if (someNum === 0){
    console.log(true);
  } else {
      console.log(false);
  }
}
//input a number to test the function above
isEven(5);