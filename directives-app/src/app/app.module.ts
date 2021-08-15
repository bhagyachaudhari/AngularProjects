import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    ClassComponent,
    IfelseComponent,
    SwitchComponent,
    ForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
