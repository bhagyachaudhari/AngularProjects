import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userName:string = "";
  password:string = "";
  msg:string = "";

  checkLogin(){
    if(this.userName == "admin" && this.password == "admin123"){
      this.msg = "Login Successfully!";
    }else{
      this.msg = "Invalid credentials";
    }
  }
}
