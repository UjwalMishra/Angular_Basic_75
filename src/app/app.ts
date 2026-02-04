import { Component } from '@angular/core';
import { CounterControls } from './components/counter-controls/counter-controls';
import { CounterDisplay } from './components/counter-display/counter-display';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterControls,CounterDisplay],
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
