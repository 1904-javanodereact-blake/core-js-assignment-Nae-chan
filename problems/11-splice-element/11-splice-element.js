/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    someArr.splice(chosenIndex, 0, content);
  return(someArr);
}
let chosenIndex = 1;
let content = 'insertContentHere';
let someArr = [1,2,3];
spliceElement(someArr, chosenIndex);

console.log(someArr, someArr.index);


