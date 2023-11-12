import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
