const userName = 'Max';

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = [...hobbies];

console.log(activeHobbies);

//<--spread-->
const person = {
    firstname: 'Max',
    age: 30,
};

//const copiedPerson = person;
const copiedPerson = { ...person };
copiedPerson.age = 20;

console.log(person);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

//<--비구조화-->
const [hobby1, ...remainingHobbies] = hobbies;
console.log(remainingHobbies);

const { firstname: user, age } = person;
//에러
//console.log(fistname);
console.log(user);
