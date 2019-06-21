import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'signin',
      loadChildren: './signin/signin.module#SigninModule'
    }, {
      path: 'signup',
      loadChildren: './signup/signup.module#SignupModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
