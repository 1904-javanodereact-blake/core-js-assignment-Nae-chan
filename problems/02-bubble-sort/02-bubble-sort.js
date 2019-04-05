/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i + 1]) {
                swapped = true;
                let temp = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = temp;
             }
        }
    } while (swapped);
    console.log(numArray);
}

//pass in an array to test the above functio
bubbleSort([5, 4, 3, 2, 1]);