/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
//turn string into an array and splice at given indice
let chars = someStr.split('');
console.log(chars.slice (startIndex, endIndex));
}

//enter a string, start index, and end index to test the function above
substring('hello', 0, 3);