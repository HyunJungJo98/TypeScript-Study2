"use strict";
const userName = 'Max';
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = [...hobbies];
console.log(activeHobbies);
const person = {
    firstname: 'Max',
    age: 30,
};
const copiedPerson = Object.assign({}, person);
copiedPerson.age = 20;
console.log(person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, ...remainingHobbies] = hobbies;
console.log(remainingHobbies);
const { firstname: user, age } = person;
console.log(user);
//# sourceMappingURL=app.js.map