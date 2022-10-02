let e = "[()]{}{[()()]()}";

let s = [];
let count = 0;

for (let index = 0; index < e.length; index++) {
    const element = e[index];

    if (element == '[' || element == '{' || element == '(') {
        s.push(element);
        count++;
    } else {
        const top = s.pop();
        count--;

        if (top == '(') {
            if (element != ')') {
                break;
            }
        }

        if (top == '[') {
            if (element != ']') {
                break;
            }
        }

        if (top == '{') {
            if (element != '}') {
                break;
            }
        }
    }

}

console.log(count);