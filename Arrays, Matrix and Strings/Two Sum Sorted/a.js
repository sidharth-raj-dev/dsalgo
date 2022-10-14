let array = [1, 1, 2, 5, 3, 43, 4, 5, 123, 1, 234, 4, 5, 4, 2, 3];
array.sort((i, j) => i - j);

let a = 0;
let b = array.length - 1;

const target = 7;

while (a < array.length) {
    if (array[a] + array[b] === target) {
        console.log(array[a]);
        console.log(array[b]);
        break;
    } else if (array[a] + array[b] > target) {
        b--;
    } else {
        a++;
    }
}
