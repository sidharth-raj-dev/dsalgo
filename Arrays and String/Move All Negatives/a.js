let array = [4, 23, 43, -4, -5, 123, -1, 234, 4];

let p = 0;
let s = 0;

while (p < array.length) {

    if (array[p] < 0) {
        // swap
        const temp = array[p];
        array[p] = array[s];
        array[s] = temp;

        // increase s fake pointer
        s++;
    }
    p++;
}

console.log(array);