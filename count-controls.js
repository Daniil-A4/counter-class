export { CountControls }

class CountControls extends EventTarget {
  constructor() {
    super();
    this.render();
    this.assignListeners();
  }

  assignListeners() {
    this.incrementButton.addEventListener('click', () => {
      this.dispatchEvent(new Event('increment'));
    });
    this.decrementButton.addEventListener('click', () => {
      this.dispatchEvent(new Event('decrement'));
    });
  }

  render() {
    const container = document.createElement('div');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');

    container.classList.add('counter__button');
    incrementButton.classList.add('counter__button--increase');
    decrementButton.classList.add('counter__button--decrease');
    incrementButton.textContent = '+';
    decrementButton.textContent = '-';

    container.append(decrementButton, incrementButton)

    this.element = container;
    this.incrementButton = incrementButton;
    this.decrementButton = decrementButton;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}