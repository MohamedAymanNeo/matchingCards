import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'types',
    loadChildren: ()=> import('./components/game-types/game-types.module').then(m => m.GameTypesModule)
  },
  {
    path: 'game',
    loadChildren: ()=> import('./components/play-game/play-game.module').then(m => m.PlayGameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
