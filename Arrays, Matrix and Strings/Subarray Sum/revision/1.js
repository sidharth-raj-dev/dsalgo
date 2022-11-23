let array = [1, 4, 20, 3, 10, 5];
let target = 33;

let sum = 0;
let i = 0;
let j = 0;

while (j < array.length) {
    if (sum < target) {
        sum += array[j];
        j++;
    } else if (sum == target) {
        console.log('found');
        break;
    } else {
        sum -= array[i];
        i++;
    }
}