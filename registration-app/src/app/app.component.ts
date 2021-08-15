import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string = "";
  password:string = "";
  confirmPassword:string = "";
  gender:string = "";
  country:string = "";
  msg:string = "";
 
  registerDetails(){
    if(this.password == this.confirmPassword){
      this.msg = "Registered Successfully!";
    }else{
      this.msg = "Error while Registration";
    }
  }
}
