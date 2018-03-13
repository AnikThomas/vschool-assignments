// EXERCISE FROM SYLLABUS :

// //create an array employees:
// var employees = [{
//     name: "Anik",
//     title: "supervisor",
//     salary:"annual",
//     status:"current status",
// }];

//define an empty array :
var employees = [];

//create constructor function:
var EmployeeForm = function(name,title,salary,per = "year",status = "Full Time"){
    this.name = name;
    this.jobTitle = title;
    this.salary = salary;
    this.per = per
    this.status = status;

}
//calling the constructor function:
var anik = new EmployeeForm("Anik","Supervisor",300000);
var nate = new EmployeeForm("Nate","Manager",600000,undefined,"Part Time");
var dan = new EmployeeForm("Dan","Cashier",15,"hour","Part Time");


EmployeeForm.prototype.printEmployeeForm = function (){
    employees.push(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/${this.per} Status: ${this.status}`);
}

dan.printEmployeeForm();
nate.printEmployeeForm();
anik.printEmployeeForm();
console.log(employees.sort());

