let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let capacity = [];

for (let index = 0; index < array.length; index++) {
    let l = index;
    let r = index;
    let leftMax = 0;
    let righMax = 0;
    while (l >= 0 && r < array.length) {
        // update leftMax
        if (leftMax < array[l]) {
            leftMax = array[l];
        }

        // update rightMax
        if (righMax < array[r]) {
            righMax = array[r];
        }

        // update capacity
        capacity[index] = Math.min(leftMax, righMax) - array[index];

        // move pointers
        if (l > 0) {
            l--;
        }
        if (r < array.length - 1) {
            r++
        }

        // stop 
        if (l == 0 && r == array.length - 1) {
            break;
        }
    }
}

console.log(capacity);
console.log(capacity.reduce((a, b) => a + b, 0));

// opposite pointers