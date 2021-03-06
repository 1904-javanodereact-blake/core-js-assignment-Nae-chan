/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    //turn string into an array 
    let array = someStr.split('');

    //create duplicate and reverse array
    let reverseArray = array.map(dup => {
        return dup;
    });
    reverseArray.reverse();
    console.log(array, reverseArray);

    //check if it is not a palindrome
    for (i = 0; i < array.length; i++) {
        if (array[i] !== reverseArray[i]) {
            return console.log(`${false}; NOT a palindrome!`);
        }
    }
    // otherwise it is a palindrome
    return console.log(`${true}; This IS a palindrome!`);
}
//pass in a string to check function above
isPalindrome('asaf');