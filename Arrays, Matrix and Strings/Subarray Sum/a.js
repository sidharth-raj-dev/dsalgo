let array = [1, 4, 20, 3, 10, 5];
let target = 33;
let sum = 0;
let p = {};

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
    p[sum] = index;
}

let q = Object.keys(p);

for (let q = 0; q < array.length; q++) {
    const element = array[q];
    if (p[target - element]) {
        console.log('found');
    }
}

console.log(p);

