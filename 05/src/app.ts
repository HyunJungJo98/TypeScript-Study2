// 객체 형식
// type Person2 =  {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

interface AddFn {
    (a: number, b: number): number;
}

//type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(pharse: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(pharse: string): void {
        if (this.name) {
            console.log(pharse + ' ' + this.name);
        } else {
            console.log('hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person();
user1.greet('Hi there - I am');
console.log(user1);

type A = {
    name: string;
    age?: number;
};

const a: A = {
    name: 'HJ',
};
