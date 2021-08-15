var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
    }
    return User;
}());
var user = new User(111, "Bhagyashri");
console.log("userId: " + user.userId);
console.log("userName: " + user.userName);
