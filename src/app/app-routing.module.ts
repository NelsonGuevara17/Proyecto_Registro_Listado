import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/pages/register/register.component';
import { ListComponent } from './list/pages/list/list.component';

const routes: Routes = [
  { path:'', redirectTo:'/register', pathMatch: 'full'},
  { path: 'register',component:RegisterComponent},
  { path: 'list',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
