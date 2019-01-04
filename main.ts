export {};

let string = 'hello selim reza swadhin';
console.log(string);

// let a = 10;
// a = 'binoy';
let a;
a = 12;
a = 'hello';
const title = 'hello world';

//type
let var1: boolean = true;
// var1.valueOf();
let var2: string = 'binoy';
// var2.charAt
let var3: null = null;
let var6: string = null;
let var4: undefined = undefined;
let var5: undefined = undefined;

let num1:number = null;
let num2:string = null;
let num3:number = undefined;

let arr1: number[] = [1,2,3,4,5,6];
let arr2: Array<number> = [1,2,7,4,5,6];
let arr3: Array<string> = ['a', 'b', 'c', '2'];

//Tuple mean mix value
let arr4: [string, number] = ['selim', 30];
let arr5: [string, number, boolean] = ['selim', 30, true];

//enum
enum Colors {red, green, blue};
let c: Colors = Colors.green;
console.log(c);

//any
let var7: any = 10;
var7 = 'string';
var7.name;
var7 = false;
// var7();
var7;

//unknown
let var8: unknown = 20;
// var8.name;

// union type
let var9: string | boolean | number;
var9 = 20;
var9 = 'hello world';
var9 = true;

//function
function add(num1:number, num2:number):number{
    return num1 + num2;
}
let value = add(4,5);
console.log(value);

//default parameter/value
function add1(num1:number, num2:number=10):number{
    return num1 + num2;
}
// let value1 = add1(4,5);//overwrite
let value1 = add1(4);
console.log(value1);

//undefined parameter/value

// function add2(num1:number, num2?:number):number//return type{
//     return num1 + num2;
// }

function add2(num1:number, num2?:number):number{
    if(num2){
        return num1 + num2;
    }else{
        return num1;
    }
}

// let value2 = add2(4,5);//overwrite
let value2 = add2(4);
console.log(value2);

//interface
// function fullName(value: {
//     firstName:string;
//     lastName:string;
// }){
// console.log(value);
// }

//start interface
interface Person{
    firstName:string,
    lastName:string,
    age:number
}
function fullName(value: Person){
console.log(value);
}
//call function
fullName({firstName:'Selim', lastName:'REZA Swadhin', age:30});

//parent class
class PersonDetail{
    personName:string;
    constructor(name:string){
        this.personName = name;
    }
    greeting(){
        console.log(`Hello ${this.personName}`);        
    }
}

let person1 = new PersonDetail('Selim Reza');
person1.greeting();

//child class
class childClass extends PersonDetail{
    constructor(childName : string){
super(childName)
    }
    newChild(){
        console.log('Hello from child class');        
    }
}
let child1 = new childClass('baby');
console.log(child1.personName);
child1.greeting();
child1.newChild();

//Access modifier(public, private, protected)
//default public
class PersonDetail2{
    public personName2:string;//no change
    // private personName2:string;//error
    // protected personName2:string;//error
    constructor(name2:string){
        this.personName2 = name2;
    }
    greeting2(){
        console.log(`Hello ${this.personName2}`);        
    }
}

let person2 = new PersonDetail2('Selim Reza');
person2.greeting2();

//child class
class childClass2 extends PersonDetail2{
    constructor(childName2 : string){
super(childName2)
    }
    newChild2(){
        console.log('Hello from child class parent name is ' +this.personName2);        
    }
}
let child2 = new childClass2('baby');
console.log(child2.personName2);
child2.greeting2();
child2.newChild2();


