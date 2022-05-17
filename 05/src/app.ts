class Department {
    //name: string = 'DEFAULT';

    protected employees: string[] = [];
    constructor(private readonly id: string, public name: string) {}

    describe() {
        //name : describe 메소드 내부 or클래스 외부의 전역변수를 찾음
        //console.log(name);
        console.log(`Department ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    //오버라이딩
    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('no value');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('id', ['Max']);

const accounting = new AccountingDepartment('id', []);
accounting.addReport('something went wrong');
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
accounting.mostRecentReport = '';
console.log(accounting.mostRecentReport);
