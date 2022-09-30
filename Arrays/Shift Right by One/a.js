let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];

for (let i = array.length - 1; i >= 0; i--) {
    array[i] = array[i - 1];
}

console.log(array);