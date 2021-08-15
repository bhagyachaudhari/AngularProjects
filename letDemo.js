var index = 0;
console.log("index value: " + index);
for (var index_1 = 0; index_1 <= 5; index_1++) {
    console.log("inside for loop: " + index_1);
}
console.log("outside for loop: " + index);
function display() {
    var message = "Welcome...";
    {
        var message_1 = "TypeScript";
        console.log("inside block: " + message_1);
    }
    console.log("outside block: " + message);
}
var message = "Java World..";
display();
console.log("outside function: " + message);
