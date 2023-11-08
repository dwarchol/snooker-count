import { Component } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  player1: Player = {
    name: '',
    number: 1
  };
  player2: Player = {
    name: '',
    number: 2
  };
  setPlayer1Name(name: string){
    this.player1.name = name
  };
  setPlayer2Name(name: string){
    this.player2.name = name
  };
  start(){
    console.log("Start " + this.player1.name + " vs " + this.player2.name)
  }
}
