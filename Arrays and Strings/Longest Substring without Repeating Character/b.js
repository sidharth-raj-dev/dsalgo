let array = "abcdefbea";
// let array = "GEEKSFORGEEKS";

let l = 0;
let r = 0;
let set = new Set();
let max = 0;

function updateMax() {
    // update max
    if (r - l + 1 > max) {
        max = r - l + 1;
    }
}

while (l >= 0 && r < array.length) {
    if (set.has(array[r])) {
        // delete all from past
        set = new Set();

        console.log(array.substring(l, r));
        updateMax();

        l = r;
    } else {
        set.add(array[r]);

        updateMax();

        r++;
    }

    if (r === array.length - 1) {
        break;
    }
}

console.log(max);

// loop
//      logic for moving left pointer
// move right pointer