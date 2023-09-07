export { CountDisplay }

class CountDisplay {
  constructor() {
    this.render();
  }

  render() {
    const display = document.createElement('div');

    display.classList.add('counter__value');
    display.textContent = '0';

    this.element = display;
  }

  update(count) {
    this.element.textContent = count;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}