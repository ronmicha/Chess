import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './components/main-menu/main-menu.component'
import { SettingsComponent } from './components/settings/settings.component'
import { GameComponent } from './components/game/game.component'


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }