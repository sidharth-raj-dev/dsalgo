let array = [1, 8, 0, 2, 0, 0, 7];

let count = 0;

for (let index = 0; index < array.length; index++) {
    array[count] = array[index];
    if (array[index] != 0) {
        count++;
    }
}

console.log(array);