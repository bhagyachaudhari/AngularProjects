class User
{
    userId:number;
    userName:string;

    constructor(userId:number, userName:string){
        this.userId = userId;
        this.userName = userName;
    } 
}

let user = new User(111, "Bhagyashri");
console.log("userId: "+user.userId);
console.log("userName: "+user.userName);