// by swapping

let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];
let currentValue = null;

for (let index = 1; index < array.length; index++) {
    currentValue = array[index];
    array[index] = array[index - 1];
    array[index - 1] = currentValue;
}

console.log(array);