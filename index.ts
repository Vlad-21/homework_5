// types
type Roles = "Admin" | "Moderator" | "User";
type AccessLevel = 1|2|3;


// interface
interface IUserInfo {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

//  Абстрактний клас юзера з описом полів і методів
abstract class User  {
    protected firstName: string;
    protected lastName: string;
    protected email: string;
    protected password: string;
    protected role: Roles;
    constructor(firstName: string, lastName: string, email: string, password: string, role: Roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public abstract editProfile(newFirstName: string, newLastName: string, email:string, newPassword?: string):void;
    public abstract vievInfo(): void;
}

// клас адмін який наслідується від класу юзера
class Admin extends User {
    private accessLevel: AccessLevel;
    constructor(firstName: string, lastName: string, email:string, password:string) {
        super(firstName, lastName, email,  password, "Admin");
    };

// реалізація методів для конкретно цього класу
    public editProfile(newFirstName: string, newLastName: string, email: string, newPassword: string):void {
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.email = email;
        this.password = newPassword;
    }

    public vievInfo(): void {
        console.log(`User name: ${this.firstName} ${this.lastName}, your passwors: ${this.password} role: ${this.role}`);
    }

    public setAccessLevel(level: AccessLevel): void {
        this.accessLevel = level;
    };

    public getAccessLevel(): void {
        if (!this.accessLevel) {
            console.log("You don't have asscess level");
            return;
        }
        console.log(`Your Access Level: ${this.accessLevel}`);
    }

}

// клас модератор
class Moderator extends User {
    private numberOfReports: number;
    constructor(firstName: string, lastName: string, email:string, password:string) {
        super(firstName, lastName, email,  password, "Moderator");
    };
    
// реалізація методів для конкретно цього класу
    public editProfile(newFirstName: string, newLastName: string, email: string):void {
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.email = email;
    }

    public vievInfo(): void {
        console.log(`User name: ${this.firstName} ${this.lastName}, role: ${this.role}`);
    }

    public setNumberOfReporst(reports: number): void {
        this.numberOfReports = reports;
    };

    public getNumberOfReport(): void {
        if (!this.numberOfReports) {
            console.log("You don't have reports");
            return;
        }
        console.log(`Your reports: ${this.numberOfReports}`);
    }

}

const abmin = new Admin('Vlad', 'Kryshchuk', 'vlad@gmail.com', '123456');
const moderator = new Moderator('Vlad', 'Kryshchuk', 'vlad@gmail.com', '123456');
abmin.vievInfo();
abmin.setAccessLevel(3);
abmin.getAccessLevel();
moderator.vievInfo();
moderator.getNumberOfReport();
moderator.setNumberOfReporst(15);
moderator.getNumberOfReport();


  