import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Board } from '../../../models/board';

@Component({
  selector: 'score-panel',
  templateUrl: './scorepanel.component.html',
  styleUrls: ['./scorepanel.component.scss']
})
export class ScorepanelComponent implements OnInit {

  @Input() board: Board;
  emoji: string;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  newGame() {
    this.gameService.resetGame();
  }
}
