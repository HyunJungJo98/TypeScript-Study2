"use strict";
const printEmployeeInformation = (emp) => {
    console.log('Name:' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startdate: ', emp.startDate);
    }
};
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
const e2 = {
    name: 'HJ',
    privileges: ['create-server'],
};
printEmployeeInformation(e2);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
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
//# sourceMappingURL=typeGuard.js.map