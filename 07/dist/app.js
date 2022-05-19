"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
mergedObj.age;
function countAndPrint(e) {
    let descriptionText = 'Got no value.';
    if (e.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (e.length > 1) {
        descriptionText = 'Got ' + e.length + ' elements.';
    }
    return [e, descriptionText];
}
console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['hi', 'there']));
console.log(countAndPrint([]));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names2 = ['Max', 'Sports'];
//# sourceMappingURL=app.js.map