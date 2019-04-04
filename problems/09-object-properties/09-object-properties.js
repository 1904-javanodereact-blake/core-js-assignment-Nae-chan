/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
//this for in loop iterates through and print the properties of an object
for (let property in someObj){
    console.log(`property = ${property} value = ${someObj[property]}`);
    }
}
//Test the above function by passing in this object
let testObject = {
    fieldA: 2,
    fieldB: 20,
    fieldC: 'apple'
}
 objectProperties(testObject);
