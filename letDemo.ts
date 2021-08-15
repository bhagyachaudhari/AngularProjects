var index = 0;
console.log("index value: "+index);

for(let index = 0; index<=5; index++){
    console.log("inside for loop: "+index);
}

console.log("outside for loop: "+index);

function display(){
    let message:string = "Welcome...";
    {
        let message:string = "TypeScript";
        console.log("inside block: "+message);
    }
    console.log("outside block: "+message);
}

let message:string = "Java World..";
display();
console.log("outside function: "+message);