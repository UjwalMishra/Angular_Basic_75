import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  message: string = 'Hello World!';

  count: number = 0;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  reset(){
    this.count = 0;
  }
}
