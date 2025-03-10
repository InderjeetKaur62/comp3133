export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;  // Private property for age

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;  // Set the age
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    // Method to return and log the age of the customer
    public GetAge() {
        console.log(`Age of ${this.firstName} ${this.lastName} is: ${this._age}`);
        return this._age;
    }
}
