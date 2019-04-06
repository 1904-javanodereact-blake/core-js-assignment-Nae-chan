/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//Not sure if splice to add or splice to delete...

//if splice to add:
function spliceElement(someArr, index) {
    someArr.splice(chosenIndex, 0, content);
  return(someArr);
}
//insert where you would like to splice
let chosenIndex = 1;
//insert element to add
let content = 'insertContentHere';
//use this array to test the function above
let someArr = [1,2,3];
spliceElement(someArr, chosenIndex);

console.log(someArr);

//if splice to delete:
function spliceElement2(someOtherArr, otherIndex) {
  someOtherArr.splice(otherIndex, 1);
return(someOtherArr);
}
//insert where you would like to splice
let otherChosenIndex = 1;
//use this array to test the function above
let someOtherArr = [1,2,3];
spliceElement2(someOtherArr, otherChosenIndex);

console.log(someOtherArr);
