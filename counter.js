export { Counter };

import { CountMaster } from './count-master.js';
import { CountControls } from './count-controls.js';
import { CountDisplay } from './count-display.js';

class Counter {
  constructor(options = {}) {
    this.countMaster = new CountMaster(options);
    this.countControls = new CountControls();
    this.countDisplay = new CountDisplay();
    this.render();

    this.countDisplay.update(this.countMaster.count);
    this.countControls.incrementButton.disabled = this.countMaster.count === this.countMaster.max;
    this.countControls.decrementButton.disabled = this.countMaster.count === this.countMaster.min;
    this.assignListeners();
  }

  assignListeners() {
    this.countControls.addEventListener('increment',() => this.countMaster.increment());
    this.countControls.addEventListener('decrement',() => this.countMaster.decrement());
    this.countMaster.addEventListener('change', (e) => {
      this.countDisplay.update(e.count);
      this.countControls.incrementButton.disabled = e.maxReached;
      this.countControls.decrementButton.disabled = e.minReached;
    });
  }

  increment() {
  }

  decrement() {
  }

  render() {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    
    container.classList.add('counter');
    heading.textContent = 'Counter';

    this.countDisplay.appendTo(container);
    this.countControls.appendTo(container);
    this.element = container;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}