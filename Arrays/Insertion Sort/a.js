let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];

for (let index = 1; index < array.length; index++) {
    const element = array[index];

    // initialize fake pointer
    let pointer = index - 1;
    while (element < array[pointer] && pointer >= 0) {
        // shift right by one
        array[pointer + 1] = array[pointer];

        // move pointer to the left
        pointer--;
    }

    // save element to pointer stop position + 1 (correct place of element)
    array[pointer + 1] = element;
}

console.log(array);