/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let a = 1;
    let b = 1;
    let result = 1;
    //fibonacci of 1(a) and 2(b) both result in 1
    if (n < 3) {
        return (result);
    } else {
        //use this for loop to track the shifts for fibonacci above 3, repeated nth times
        console.log(a)
        console.log(b)
        for (let count = 1; count < (n - 1); count++) {
            result = a + b;
            console.log(result);
            a = b;
            b = result;
        }
        return (b);
    }
}
//insert a number to test the function above
let testNumber = 8;
console.log(`The value at ${testNumber} is ${fib(testNumber)}`);



