const names: Array<string> = []; // === string[]
//names[0].split(' ');

//string을 반환
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then((data) => {
//     data.split(' ');
// });

// 제약 조건(extends)
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
mergedObj.age;

// 일반 함수 제약 조건
interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(e: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (e.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (e.length > 1) {
        descriptionText = 'Got ' + e.length + ' elements.';
    }
    return [e, descriptionText];
}

console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['hi', 'there']));
console.log(countAndPrint([]));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');

// 제네릭 클래스
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Max' });
// objectStorage.addItem({ name: 'Manu' });
// // indexOf를 하지 못하기 때문에 마지막 요소 제거
// objectStorage.removeItem({ name: 'Max' });
// console.log(objectStorage.getItems());

// 유틸리티
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ['Max', 'Sports'];
//names2.push('Manu');
