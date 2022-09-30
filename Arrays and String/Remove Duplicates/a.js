let array = [1, 1, , 5, 3, 43, 4, 5, 123, 1, 234, 4, 5];
array.sort((i, j) => i - j);

let a = 0;
let b = 0;

while (a < array.length) {

    if (array[a] !== array[b]) {
        b++;
        array[b] = array[a];
    }
    a++;
}


console.log(array.slice(0, b));
