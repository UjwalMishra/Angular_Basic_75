import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  templateUrl: './counter-controls.html',
  styleUrls: ['./counter-controls.scss',]
})
export class CounterControls {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
