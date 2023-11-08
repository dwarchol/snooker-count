import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  @Input() num: number;
  name: string;
  isEditable = true;
  @Output() nameEvent = new EventEmitter<string>();

  addPlayer(value: string){
    this.isEditable = false;
    this.nameEvent.emit(value)
  }
  edit(){
    this.isEditable = true
  }
}
