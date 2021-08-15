var petName = "Dog";
function setPetName() {
    var petName = "Cat";
    console.log("Inside Petname: " + petName);
}
setPetName();
console.log("Outside Petname: " + petName);
var index = 0;
for (var index = 0; index <= 5; index++) {
    console.log("inside for loop: " + index);
}
console.log("outside for loop: " + index);
