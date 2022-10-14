// by swapping
let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];
let currentValue = null;

for (let i = array.length - 2; i >= 0; i--) {
    currentValue = array[i + 1];
    array[i + 1] = array[i];
    array[i] = currentValue;
}

console.log(array);