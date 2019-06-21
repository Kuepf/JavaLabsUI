import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthHttpClient } from './auth-http-client/auth-http-client';
import { AppHttpClient } from './app-http-client/app-http-client';
import { AuthGuardService } from './guards/auth-guard/auth-guard.service';
import { SignGuardService } from './guards/sign-guard/sign-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers:
    [
      AuthHttpClient,
      AppHttpClient,
      AuthGuardService,
      SignGuardService
    ]
})
export class CoreModule { }
