import { Component } from '@angular/core';
import { Board } from '../models/board';
import { GameService } from '../minesweeper/services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public board: Board;

  constructor(private gameService: GameService) {
    
    gameService.createBoard(9, 9, 10);
    this.board = gameService.getBoard();
  }
}
