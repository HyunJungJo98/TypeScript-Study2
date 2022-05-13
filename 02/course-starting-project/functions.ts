function add(n1: number, n2: number): number {
    return n1 + n2;
}

//but undefined를 반환함
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
//에러
//combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
    //가능
    return true;
});
