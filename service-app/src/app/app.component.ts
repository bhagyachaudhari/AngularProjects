import { Component, Inject } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-app';
  welcomeMsg:string = "";
  constructor(@Inject(WelcomeService) private welcomeService:WelcomeService){}

  getMessage(){
    this.welcomeMsg = this.welcomeService.getWelcomeMessage();
  }
}
