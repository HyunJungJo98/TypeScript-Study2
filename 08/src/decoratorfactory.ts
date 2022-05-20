function Logger(logString: string) {
    console.log('Logger factory');

    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

// function WithTemplate(template: string, hookId: string) {
//     return function (constructor: any) {
//         console.log('Template factory');

//         const hookE = document.getElementById(hookId);
//         // Person 객체 생성
//         const p = new constructor();
//         if (hookE) {
//             hookE.innerHTML = template;
//             hookE.querySelector('h1')!.textContent = p.name;
//         }
//     };
// }

function WithTemplate(template: string, hookId: string) {
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Template factory');
                const hookE = document.getElementById(hookId);
                if (hookE) {
                    hookE.innerHTML = template;
                    hookE.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

// 객체가 생성되지 않아도 실행됨
// 아래부터 실행됨
@Logger('Logging Person')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);
