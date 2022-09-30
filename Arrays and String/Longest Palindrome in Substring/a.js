let array = [4, 23, 43, 23, 4, -4, -5, 123, -1, 234, 4];

function checkPalindrome(array) {
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
        return true;
    }

    return false;
}

let max = 0;
let ans = [];

for (let index = 0; index < array.length; index++) {
    // for odd length
    let a = index;
    let b = index;
    while (a >= 0 && b < array.length && array[a] == array[b]) {
        if (b - a + 1 > max) {
            max = b - a + 1;
        }
        a--;
        b++;
    }

    // for even length
    a = index;
    b = index + 1;
    while (a >= 0 && b < array.length && array[a] == array[b]) {
        if (b - a + 1 > max) {
            max = b - a + 1;
        }
        a--;
        b++;
    }
}


console.log(max);
console.log(ans);