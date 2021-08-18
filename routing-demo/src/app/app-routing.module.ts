import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CustomerrorpageComponent } from './customerrorpage/customerrorpage.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent
  },{
    path:'admin',
    component: AdminComponent
  },{
    path:'**', //wildcard routing
    component: CustomerrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
