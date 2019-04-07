/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //turn string into an array 
    let array = someStr.split('');
    //reverse array and log
    array.reverse();
    console.log(array);
}
//Insert a string to test the function above
reverseStr("axolotl")