"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Organization = /** @class */ (function () {
    function Organization() {
        this.employees = [
            new Employee_1.Employee(101, "Bhagyashri"),
            new Employee_1.Employee(102, "Priyanka"),
            new Employee_1.Employee(103, "Dhiraj")
        ];
    }
    Organization.prototype.display = function () {
        for (var i in this.employees) {
            console.log(this.employees[i]);
        }
    };
    return Organization;
}());
var organization = new Organization();
organization.display();
