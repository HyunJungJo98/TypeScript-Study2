abstract class Department {
    //name: string = 'DEFAULT';
    static fiscalYear = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(): void;
    // {
    //     //name : describe 메소드 내부 or클래스 외부의 전역변수를 찾음
    //     //console.log(name);
    //     console.log(`Department ${this.id}: ${this.name}`);
    // }

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

    describe(): void {
        console.log('IT Department - ID: ' + this.id);
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
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        } else {
            this.instance = new AccountingDepartment('d2', []);
            return this.instance;
        }
    }

    describe(): void {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('123', ['Max']);

//const accounting = new AccountingDepartment('123', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

// 같음
console.log(accounting === accounting2);

accounting.addReport('something went wrong');
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
accounting.mostRecentReport = 'report!!!';
accounting.describe();
console.log(accounting.mostRecentReport);
