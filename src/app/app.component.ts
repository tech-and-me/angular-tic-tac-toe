import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tic-tac-toe';
  winMessage : string = '';
  isCross = false;
  itemArray : string[] = new Array(9).fill('');

  constructor(private toastr:ToastrService) {}

  handleClick(itemNumber:number){
    if(this.winMessage){
      return this.toastr.success(this.winMessage)
    }else if (this.itemArray[itemNumber] === ''){
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
      this.checkIsWinner();
      return;
    }else{
      return this.toastr.info('Already filled');
    }
    
    

  }



  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== ''
    ) {
      this.winMessage = `${this.itemArray[0]} won 👏👏👏`;
    } else if (
      this.itemArray[3] !== '' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won 👏👏👏`;
    } else if (
      this.itemArray[6] !== '' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won 👏👏👏`;
    } else if (
      this.itemArray[0] !== '' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won 👏👏👏`;
    } else if (
      this.itemArray[1] !== '' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won 👏👏👏`;
    } else if (
      this.itemArray[2] !== '' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won 👏👏👏`;
    } else if (
      this.itemArray[0] !== '' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won 👏👏👏`;
    } else if (
      this.itemArray[2] !== '' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won 👏👏👏`;
    }else if (this.itemArray.every(item => item !== '')){
      this.winMessage = "Woah !! It's a draw"
    }
    console.log('Winmessage is : ', this.winMessage);
  };

  



  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('');
  }
}
