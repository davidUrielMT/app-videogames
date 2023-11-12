import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { DownloadedGamesComponent } from './downloaded-games/downloaded-games.component';


const routesChildren: Routes = [
  {path: 'popular-games', component: PopularGamesComponent},
  {path: 'add-game', component: AddGameComponent},
  {path: 'downloaded-games', component: DownloadedGamesComponent},
  {path: 'upcoming-games', component: UpcomingGamesComponent},
  {path: '**', redirectTo: 'popularGames', pathMatch: 'full'},
];

const routes: Routes = [
  {path: 'popular-games', component: PopularGamesComponent, children: routesChildren},
  {path: 'add-game', component: AddGameComponent},
  {path: 'downloaded-games', component: DownloadedGamesComponent},
  {path: 'upcoming-games', component: UpcomingGamesComponent},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
