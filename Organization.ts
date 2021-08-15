import {Employee} from "./Employee";
class Organization
{
    employees:Employee[] = [
        new Employee(101, "Bhagyashri"),
        new Employee(102, "Priyanka"),
        new Employee(103, "Dhiraj")
    ]

    display() : void{
        for(var i in this.employees){
            console.log(this.employees[i]);
        }
    } 
}

let organization:Organization = new Organization();
organization.display();