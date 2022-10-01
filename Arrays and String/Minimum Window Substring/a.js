function getFreqObj(s) {
    let obj = {};
    for (let index = 0; index < s.length; index++) {
        const element = s[index];

        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }
    return obj;
}

function haveExact(s) {
    let temp = getFreqObj(s);
    let res = true;
    Object.keys(temp).map((key) => {
        if (obj[key]) {
            if (temp[key] != obj[key]) {
                res = false;
            }
        }
        return;
    })
    console.log(res);
    return res;
}

function moveLeft(s, have, total) {
    if (have === total) {
        if (haveExact(s)) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }
}

let s = "ADOBECODEBANC";
let t = "ABC";
let target = t.length;

// convert t to object
let obj = getFreqObj(t);

// calculate total
let total = 0;
Object.keys(obj).map((key) => {
    total = total + obj[key]
    return;
});

console.log(obj);
console.log(total);

let have = 0;
let l = 0;
let r = 0;
while (l >= 0 && r < s.length) {
    if (obj[s[r]]) {
        have++;

        if (moveLeft(s.substring(l, r + 1), have, total)) {
            l++;
        } else {
            r++;
        }
    } else {
        if (moveLeft(s.substring(l, r + 1), have, total)) {
            l++;
        } else {
            r++;
        }
    }
}

// same direction