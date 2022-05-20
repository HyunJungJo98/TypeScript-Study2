interface VlidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    };
}

const registeredValidators: VlidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [
            ...(registeredValidators[target.constructor.name]?.[propName] ??
                []),
            'required',
        ],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [
            ...(registeredValidators[target.constructor.name]?.[propName] ??
                []),
            'positive',
        ],
    };
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleE = document.getElementById('title') as HTMLInputElement;
    const priceE = document.getElementById('price') as HTMLInputElement;

    const title = titleE.value;
    const price = +priceE.value;

    const createdCourse = new Course(title, price);

    if (validate(createdCourse)) {
        alert('please try again');
        return;
    }
    console.log(createdCourse);
});
