//const userInput = <HTMLInputElement>document.querySelector('#user-input');
//const userInput = document.querySelector('#user-input')! as HTMLInputElement;

const userInput = document.querySelector('#user-input');

if (userInput) {
    (userInput as HTMLInputElement).value = 'Hi there!';
}
