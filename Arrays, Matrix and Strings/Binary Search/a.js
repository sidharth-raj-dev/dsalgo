let array = [1, 3, 5, 7, 8, 9];
let target = 8;
let l = 0;
let r = array.length - 1;

while (1) {
    let m = Math.floor((l + r) / 2);

    if (array[m] == target) {
        console.log('found');
        break;
    } else if (array[m] > target) {
        r = m;
    } else {
        l = m;
    }

    if (l > r) {
        console.log('not found')
        break;
    }
}