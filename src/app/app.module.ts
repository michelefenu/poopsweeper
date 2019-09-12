import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from '../minesweeper/components/board/board.component';
import { GridComponent } from '../minesweeper/components/grid/grid.component';
import { CellComponent } from '../minesweeper/components/cell/cell.component';
import { ScorepanelComponent } from '../minesweeper/components/scorepanel/scorepanel.component';

import { GameService } from '../minesweeper/services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GridComponent,
    CellComponent,
    ScorepanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
