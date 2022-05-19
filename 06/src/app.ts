//object
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

//선택적 체이닝
const result = add('Max', 'Schwarz');
result.split('');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    //job: { title: 'CEO', description: 'My own company' },
};

//console.log(fetchedUserData?.job.title);

//null
const userinput = '';

const storedData = userinput || 'DEFAULT';
console.log(storedData);

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log('Name:' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startdate: ', emp.startDate);
    }
};

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};

const e2: Admin = {
    name: 'HJ',
    privileges: ['create-server'],
};

printEmployeeInformation(e2);

//class
class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};

useVehicle(v1);
useVehicle(v2);

//interface
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('moving with speed: ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 10 });
