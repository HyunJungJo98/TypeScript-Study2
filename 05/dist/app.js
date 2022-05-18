"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(pharse) {
        if (this.name) {
            console.log(pharse + ' ' + this.name);
        }
        else {
            console.log('hi!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there - I am');
console.log(user1);
const a = {
    name: 'HJ',
};
//# sourceMappingURL=app.js.map