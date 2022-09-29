let array = [4, 23, 43, 4, 5, 123, 1, 234, 4];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        const a = array[j];
        const b = array[j + 1];
        if (a > b) {
            // swap
            const c = array[j + 1];
            array[j + 1] = array[j];
            array[j] = c;
        }
    }
}

console.log(array);