let array = [4, 3, 2, 1, 0, 1, 2, 3, 4];

let left = 0;
let right = array.length - 1;

while (left <= parseInt(array.length / 2)) {
    if (array[left] !== array[right]) {
        break;
    }

    left++;
    right--;
}

if (left === parseInt(array.length / 2) + 1) {
    console.log('is palindrome');
}
