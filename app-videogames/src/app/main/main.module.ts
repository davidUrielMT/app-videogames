import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { DownloadedGamesComponent } from './downloaded-games/downloaded-games.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from "../components/components.module";



@NgModule({
    declarations: [
        PopularGamesComponent,
        DownloadedGamesComponent,
        UpcomingGamesComponent,
        AddGameComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ComponentsModule
    ]
})
export class MainModule { }
 