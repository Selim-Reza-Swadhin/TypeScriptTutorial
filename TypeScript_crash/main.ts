export {};
let firstName: string = "samim";
let age: number = 20;
console.log(age);

let web_developer: boolean = true;

//array
// let jobs:any[]=['web_developer', 'programmer', 10];
let jobs: Array<any> = ["web_developer", "programmer", 10];

//tuple
let job: [string, string, number, boolean];
job = ["web_developer", "programmer", 10, true];
console.log(job);
console.log(job[0]);
console.log(job[3]);

//Enum
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}
let chosenColor = Color.Red;
console.log(chosenColor);

// null
let engineer: any = null;
let engineer1: undefined = null;
let engineer2: undefined = undefined;

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
function Bio(self: Self): void {
  console.log(
    `my name is ${self.firstName} ${self.lastName} and I am ${self.age}`
  );
  // return self;
}
Bio({
  firstName: "samim",
  lastName: "fazlu",
  age: 30
});

interface Self {
  firstName: string;
  lastName: string;
  age: number;
}

/*--------------------------------*/
function printNumber(number: number): void {
  for (let i = 0; i < number; i++) {
    //given var, no error i
    console.log(i);
  }
  console.log("-----");
  console.log(i);
}
printNumber(10);

//Type assertion

let firstNam = "selim";
// firstNam.endsWith('m');
console.log(firstNam.endsWith("m"));

let firstName2;
firstName2 = "swadhin";
// (<string>firstName2).endsWith('n');
console.log((<string>firstName2).endsWith("n"));
// (firstName2 as string).endsWith('n');
console.log((firstName2 as string).endsWith("n"));

//Arrow function
let Dio = (fname, age) => {
  console.log(`my name is ${fname} and I am ${age}`);
};
Dio("selim", 22);

let Dio2 = (fname, age) => console.log(`my name is ${fname} and I am ${age}`); //single line

Dio2("selim", 22);

//Class
class Person {
  firtName: string;
  lastName: string;
  age: number;
  constructor(fn, ln, age) {
    this.firtName = fn;
    this.lastName = ln;
    this.age = age;
  }
  showBio() {
    console.log(
      `my name is ${this.firtName} ${this.lastName} and I am ${this.age}`
    );
  }
}
let selff = new Person("selim", "reza", 30);

// let selff = new Person();
// selff.firtName = 'hello';
// selff.lastName = 'world';
// selff.age = 22;

selff.showBio();
//system 2
//Class
class Person2 {
    firtName: string;
    lastName: string;
    age: number;
    constructor(x, y, z) {
      this.firtName = x;
      this.lastName = y;
      this.age = z;
    }
    private showBio2() {
      return `my name is ${this.firtName} ${this.lastName} and I am ${this.age}`
      ;
    }
    get vio(){
        return this.showBio2();
    };
    set vio(firtName:string){
        this.firtName = firtName;
    }
  }
  let mySelf = new Person2("selim", "reza", 30);
  
  mySelf.vio = 'Anas';
  console.log(mySelf.vio)
