import { Component } from '@angular/core';

@Component({
  selector: 'app-input-erase',
  templateUrl: './input-erase.component.html',
  styleUrls: ['./input-erase.component.css']
})
export class InputEraseComponent {
  public userInput = "";
  public reset() {
    this.userInput = ""; //erase what you typed 
  }
}
