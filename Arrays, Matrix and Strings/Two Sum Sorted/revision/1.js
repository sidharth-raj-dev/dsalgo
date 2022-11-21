let array = [1, 1, 2, 5, 3, 43, 4, 5, 123, 1, 234, 4, 5, 4, 2, 3];
let target = 7;
let i = 0;
let j = array.length - 1;

while (i < j) {
    if (array[i] + array[j] === target) {
        console.log('found');
        break;
    } else if (array[i] + array[j] > target) {
        j--;
    } else {
        i++;
    }
}