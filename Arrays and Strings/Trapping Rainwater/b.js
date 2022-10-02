let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let leftMax = [];
let rightMax = [];

let max = 0;
let l = 0;
while (l < array.length) {
    if (max < array[l]) {
        max = array[l];
    }
    leftMax[l] = max;
    l++;
}

// resetting max
max = 0;
let r = array.length - 1;
while (r >= 0) {
    if (max < array[r]) {
        max = array[r];
    }
    rightMax[r] = max;
    r--;
}

console.log(leftMax);
console.log(rightMax);

let res = 0;
for (let index = 0; index < array.length; index++) {
    res += Math.min(leftMax[index], rightMax[index]) - array[index];
}
