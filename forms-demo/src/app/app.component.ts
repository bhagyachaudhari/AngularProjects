import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';
  userData = {
      email:"test@test.com",
      address:"mumbai",
      mobile:"9999999999"
  }

  onSubmit(data:any){
    console.warn(data);
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('')
  });

  collectData(){
    console.warn(this.loginForm.value);
  }

  get username(){return this.loginForm.get('username');}
}
