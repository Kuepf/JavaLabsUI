import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { AddCreatorComponent } from './components/add-creator/add-creator.component';
import { EditCreatorComponent } from './components/edit-creator/edit-creator.component';
import { WeaponsComponent } from './components/weapons/weapons.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'addcreator', component: AddCreatorComponent },
  { path: 'editcreator', component: EditCreatorComponent },
  { path: 'weapons', component: WeaponsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule { }
