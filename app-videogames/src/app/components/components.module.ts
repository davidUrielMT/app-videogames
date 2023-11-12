import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameCardComponent } from './game-card/game-card.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavBarComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    GameCardComponent
  ]
})
export class ComponentsModule { }
