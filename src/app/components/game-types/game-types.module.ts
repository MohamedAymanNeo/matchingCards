import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTypesRoutingModule } from './game-types-routing.module';
import { GameTypeComponent } from './game-type/game-type.component';


@NgModule({
  declarations: [
    GameTypeComponent
  ],
  imports: [
    CommonModule,
    GameTypesRoutingModule
  ]
})
export class GameTypesModule { }
