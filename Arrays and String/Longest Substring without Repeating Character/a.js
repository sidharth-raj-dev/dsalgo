let array = ['a', 'b', 'c', 'd', 'e', 'f', 'b', 'e', 'a'];

let a = 0;
let b = 0;

const obj = {};
let ans = {};
let max = 0;

while (a < array.length) {

    //check duplicates
    if (obj[array[a]]) {
        // updating second pointer
        b = obj[array[a]] + 1;
    } else {
        // check duplicates object update
        obj[array[a]] = a;

        //update max
        if (a - b > max) {
            max = a - b;
            ans = { b, a }
        }
    }

    a++;
}
console.log(ans);
console.log(max + 1);