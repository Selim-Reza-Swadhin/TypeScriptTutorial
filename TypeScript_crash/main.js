"use strict";
exports.__esModule = true;
var firstName = "samim";
var age = 20;
console.log(age);
var web_developer = true;
//array
// let jobs:any[]=['web_developer', 'programmer', 10];
var jobs = ["web_developer", "programmer", 10];
//tuple
var job;
job = ["web_developer", "programmer", 10, true];
console.log(job);
console.log(job[0]);
console.log(job[3]);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var chosenColor = Color.Red;
console.log(chosenColor);
// null
var engineer = null;
var engineer1 = null;
var engineer2 = undefined;
//function
//void mean no return
// function Bio(self:object):void {
//     console.log(self);
//     // return self;
// }
// Bio({
//     firstName:'samim',
//     lastName:'fazlu',
//     age:30
// });
// Bio('samim', 30)
// function Bio2(firstName:string, age:number):void{
//     // console.log("my name is "+firstName + age);
//     console.log(`my name is ${firstName} and I am ${age}`);//backtre
// }
// Bio2('samim ',30);
//interface
function Bio(self) {
    console.log("my name is " + self.firstName + " " + self.lastName + " and I am " + self.age);
    // return self;
}
Bio({
    firstName: "samim",
    lastName: "fazlu",
    age: 30
});
/*--------------------------------*/
function printNumber(number) {
    for (var i = 0; i < number; i++) {
        //given var, no error i
        console.log(i);
    }
    console.log("-----");
    console.log(i);
}
printNumber(10);
//Type assertion
var firstNam = "selim";
// firstNam.endsWith('m');
console.log(firstNam.endsWith("m"));
var firstName2;
firstName2 = "swadhin";
// (<string>firstName2).endsWith('n');
console.log(firstName2.endsWith("n"));
// (firstName2 as string).endsWith('n');
console.log(firstName2.endsWith("n"));
//Arrow function
var Dio = function (fname, age) {
    console.log("my name is " + fname + " and I am " + age);
};
Dio("selim", 22);
var Dio2 = function (fname, age) { return console.log("my name is " + fname + " and I am " + age); }; //single line
Dio2("selim", 22);
//Class
var Person = /** @class */ (function () {
    function Person(fn, ln, age) {
        this.firtName = fn;
        this.lastName = ln;
        this.age = age;
    }
    Person.prototype.showBio = function () {
        console.log("my name is " + this.firtName + " " + this.lastName + " and I am " + this.age);
    };
    return Person;
}());
var selff = new Person("selim", "reza", 30);
// let selff = new Person();
// selff.firtName = 'hello';
// selff.lastName = 'world';
// selff.age = 22;
selff.showBio();
//system 2
//Class
var Person2 = /** @class */ (function () {
    function Person2(x, y, z) {
        this.firtName = x;
        this.lastName = y;
        this.age = z;
    }
    Person2.prototype.showBio2 = function () {
        return "my name is " + this.firtName + " " + this.lastName + " and I am " + this.age;
    };
    Object.defineProperty(Person2.prototype, "vio", {
        get: function () {
            return this.showBio2();
        },
        set: function (firtName) {
            this.firtName = firtName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Person2;
}());
var mySelf = new Person2("selim", "reza", 30);
mySelf.vio = 'Anas';
console.log(mySelf.vio);
