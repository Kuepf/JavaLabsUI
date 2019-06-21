import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
