let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    //에러 객체 생성해서 넘기기
    throw { message: message, errorCode: code };
}

const result = generateError('An error occured!', 500);
console.log(result);
