import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard/auth-guard.service';
import { SignGuardService } from './core/guards/sign-guard/sign-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'auth',
    canActivate: [SignGuardService],
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
