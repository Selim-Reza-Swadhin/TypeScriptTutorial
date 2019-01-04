"use strict";
exports.__esModule = true;
function ShowMsg(message) {
    return "Hello world " + message;
}
var outMessage = ShowMsg('TypeScript');
console.log(outMessage);
var customerName = "Akheruzzaman";
var address = "Dhaka";
var salary = 75000;
console.log(customerName);
console.log(address);
console.log(salary);
function processData(x, y) {
    return x + y;
}
var result;
result = processData('Hello ', 'TypeScript');
console.log(result);
result = processData(10, 20);
console.log(result);
