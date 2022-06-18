import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayGameRoutingModule } from './play-game-routing.module';
import { GameZoneComponent } from './game-zone/game-zone.component';


@NgModule({
  declarations: [
    GameZoneComponent
  ],
  imports: [
    CommonModule,
    PlayGameRoutingModule
  ]
})
export class PlayGameModule { }
