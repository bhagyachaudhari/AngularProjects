let fruits:string[];
fruits = ["A","B","C","D","E"];

console.log(fruits);

let animals : Array<string>; //another way of declaring array
animals = ["Tiger", "Lion", 'Dog', "Cat"];
console.log(animals);

let persons : Array<string | number>;
persons = ["BC", 29, "RD", 31];
//persons = ["BC", 29, "RD", 31, true]; // it is not acceptable
console.log(persons);

let genericArr : Array<any>;
genericArr = [23, "Hello", 90.78, true, 'C'];
console.log(genericArr);

console.log(genericArr[2]);
