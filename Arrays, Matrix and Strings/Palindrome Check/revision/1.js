let array = [4, 3, 2, 1, 0, 1, 2, 3, 4];

let i = 0;
let j = array.length - 1;

while (i < j) {
    if (array[i] === array[j]) {
        i++;
        j--;
    } else {
        break;
    }

    if (i === Math.floor(array.length / 2)) {
        console.log('found');
    }
}