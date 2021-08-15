// Named Function
function doWork(x:number, y:number) : number{
    return x+y;
}

let result = doWork(10,20);
console.log(result);

// Anonymous Function
let sum = function(x:number, y:number) : number{
    return x+y;
} 

let value = sum(30,40);
console.log(value);

// optional parameter

function greetings(msg:string, name?:string){
    return msg + " "+name;
}

let v = greetings("Good Morning...", "RD");
console.log(v);
let v1 = greetings("Good Morning..."); //OK
console.log(v1);

// default argument
function wish(msg1:string, name1:string="RD") : string{ 
    return msg1 + " "+name1;
} 

let t = wish("Good Morning...", "BC");
console.log(t);
let t1 = wish("Good Morning..."); //OK
console.log(t1);

//variable arguments or Rest parameters

function greet(msg:string, ...names:string[]){
    console.log(msg + names.join(","));
}

greet("Good Afternoon...", "Raj", "Manthan", "RD");
greet("Good Afternoon...", "Bhagyac", "Sonali", "BC");

