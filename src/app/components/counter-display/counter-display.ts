import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  templateUrl: './counter-display.html',
  styleUrls: ['./counter-display.scss',]
})
export class CounterDisplay {
  @Input() count!: number;
}
