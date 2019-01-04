export{};//tsc --init(tsconfig.json file create)
function ShowMsg(message:string) {
    return "Hello world "+message;
}
var outMessage = ShowMsg('TypeScript');
console.log(outMessage);

let customerName:string = "Akheruzzaman";
let address:string = "Dhaka";
let salary:number = 75000;

console.log(customerName);
console.log(address);
console.log(salary);


function processData(x:any, y:any) {
    return x+y;
}
let result:any;
result=processData('Hello ', 'TypeScript');
console.log(result);
result=processData(10, 20)
console.log(result);


