let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];

for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
}

console.log(array);