"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var string = 'hello selim reza swadhin';
console.log(string);
// let a = 10;
// a = 'binoy';
var a;
a = 12;
a = 'hello';
var title = 'hello world';
//type
var var1 = true;
// var1.valueOf();
var var2 = 'binoy';
// var2.charAt
var var3 = null;
var var6 = null;
var var4 = undefined;
var var5 = undefined;
var num1 = null;
var num2 = null;
var num3 = undefined;
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [1, 2, 7, 4, 5, 6];
var arr3 = ['a', 'b', 'c', '2'];
//Tuple mean mix value
var arr4 = ['selim', 30];
var arr5 = ['selim', 30, true];
//enum
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
;
var c = Colors.green;
console.log(c);
//any
var var7 = 10;
var7 = 'string';
var7.name;
var7 = false;
// var7();
var7;
//unknown
var var8 = 20;
// var8.name;
// union type
var var9;
var9 = 20;
var9 = 'hello world';
var9 = true;
//function
function add(num1, num2) {
    return num1 + num2;
}
var value = add(4, 5);
console.log(value);
//default parameter/value
function add1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
// let value1 = add1(4,5);//overwrite
var value1 = add1(4);
console.log(value1);
//undefined parameter/value
// function add2(num1:number, num2?:number):number//return type{
//     return num1 + num2;
// }
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// let value2 = add2(4,5);//overwrite
var value2 = add2(4);
console.log(value2);
function fullName(value) {
    console.log(value);
}
//call function
fullName({ firstName: 'Selim', lastName: 'REZA Swadhin', age: 30 });
//parent class
var PersonDetail = /** @class */ (function () {
    function PersonDetail(name) {
        this.personName = name;
    }
    PersonDetail.prototype.greeting = function () {
        console.log("Hello " + this.personName);
    };
    return PersonDetail;
}());
var person1 = new PersonDetail('Selim Reza');
person1.greeting();
//child class
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass(childName) {
        return _super.call(this, childName) || this;
    }
    childClass.prototype.newChild = function () {
        console.log('Hello from child class');
    };
    return childClass;
}(PersonDetail));
var child1 = new childClass('baby');
console.log(child1.personName);
child1.greeting();
child1.newChild();
//Access modifier(public, private, protected)
//default public
var PersonDetail2 = /** @class */ (function () {
    // private personName2:string;//error
    // protected personName2:string;//error
    function PersonDetail2(name2) {
        this.personName2 = name2;
    }
    PersonDetail2.prototype.greeting2 = function () {
        console.log("Hello " + this.personName2);
    };
    return PersonDetail2;
}());
var person2 = new PersonDetail2('Selim Reza');
person2.greeting2();
//child class
var childClass2 = /** @class */ (function (_super) {
    __extends(childClass2, _super);
    function childClass2(childName2) {
        return _super.call(this, childName2) || this;
    }
    childClass2.prototype.newChild2 = function () {
        console.log('Hello from child class parent name is ' + this.personName2);
    };
    return childClass2;
}(PersonDetail2));
var child2 = new childClass2('baby');
console.log(child2.personName2);
child2.greeting2();
child2.newChild2();
