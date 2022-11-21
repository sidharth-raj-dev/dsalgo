let array = [1, 1, , 5, 3, 43, 4, 5, 123, 1, 234, 4, 5];

array.sort((i, j) => i - j);

let j = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] != array[j]) {
        j++;
        array[j] = array[i];
    }
}

console.log(array);