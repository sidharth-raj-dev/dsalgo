//by fake pointers

let array = [1, 23, 43, 4, 5, 123, 1, 234, 4];

// creating fake pointers
let left = 0;
let right = array.length - 1;

while (left < array.length && right >= 0) {
    // swapping
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    if (left === parseInt(array.length / 2)) {
        break;
    }

    left++;
    right--;
}

console.log(array);