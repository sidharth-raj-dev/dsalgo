let a = [4, 23, 43, 4, 5, 123, 1, 234, 4];

// defining and initilizing fake pointer
let p = 0;

// a holds the address of first element of above array
// so a is the real pointer
// in C we derefrence pointer like *a
// *(a + p) is like array[p]

// a[p] written in left side is
// different than written in right side
// a[p] = a[p] + 10;
// left side symbol 'a[p]' is like *(a + p)
// right side symbol 'a[p]' is a data which can be integer

while (p < a.length) {
    a[p] = 0;
    p++;
}

console.log(a);