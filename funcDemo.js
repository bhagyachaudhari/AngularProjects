// Named Function
function doWork(x, y) {
    return x + y;
}
var result = doWork(10, 20);
console.log(result);
// Anonymous Function
var sum = function (x, y) {
    return x + y;
};
var value = sum(30, 40);
console.log(value);
// optional parameter
function greetings(msg, name) {
    return msg + " " + name;
}
var v = greetings("Good Morning...", "RD");
console.log(v);
var v1 = greetings("Good Morning..."); //OK
console.log(v1);
// default argument
function wish(msg1, name1) {
    if (name1 === void 0) { name1 = "RD"; }
    return msg1 + " " + name1;
}
var t = wish("Good Morning...", "BC");
console.log(t);
var t1 = wish("Good Morning..."); //OK
console.log(t1);
//variable arguments or Rest parameters
function greet(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + names.join(","));
}
greet("Good Afternoon...", "Raj", "Manthan", "RD");
greet("Good Afternoon...", "Bhagyac", "Sonali", "BC");
