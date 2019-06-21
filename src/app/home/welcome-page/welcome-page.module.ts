import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { CreatorService } from './services/creator.service';
import { AddCreatorComponent } from './components/add-creator/add-creator.component';
import { EditCreatorComponent } from './components/edit-creator/edit-creator.component';
import { FormsModule } from '@angular/forms';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { AddWeaponComponent } from './components/add-weapon/add-weapon.component';
import { EditWeaponComponent } from './components/edit-weapon/edit-weapon.component';
import { ModificationsComponent } from './components/modifications/modifications.component';
import { AddModificationComponent } from './components/add-modification/add-modification.component';
import { EditModificationComponent } from './components/edit-modification/edit-modification.component';
import { WeaponService } from './services/weapon.service';

@NgModule({
  declarations: [
    WelcomePageComponent,
    CreatorsComponent,
    AddCreatorComponent,
    EditCreatorComponent,
    WeaponsComponent,
    AddWeaponComponent,
    EditWeaponComponent,
    ModificationsComponent,
    AddModificationComponent,
    EditModificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WelcomePageRoutingModule
  ],
  providers: [
    CreatorService,
    WeaponService
  ]
})
export class WelcomePageModule { }
