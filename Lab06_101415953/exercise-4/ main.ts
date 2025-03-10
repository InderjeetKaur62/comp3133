import { Customer } from "./customer";

// Create an instance of Customer and call GetAge() directly
let customer = new Customer("John", "Smith", 30);
customer.greeter();   // Output: Hello John Smith
customer.GetAge();    // Output: Age of John Smith is: 30
