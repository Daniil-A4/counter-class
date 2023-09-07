export { CountMaster };

class CountMaster extends EventTarget {
  constructor(options = {}) {
    super();
    this.count = options.count || 0;
    this.min = options.min ?? -Infinity;
    this.max = options.max ?? Infinity;
    this.step = options.step || 1;
  }

  increment() {
    this.count += this.step;

    if (this.count > this.max) {
      this.count = this.max;
    }
    const e = new Event('change');
    e.count = this.count;

    e.maxReached = this.count === this.max;
    e.minReached = this.count === this.min;
    this.dispatchEvent(e);
  }

  decrement() {
    this.count -= this.step;

    if (this.count < this.min) {
      this.count = this.min;
    }
    const e = new Event('change');
    e.count = this.count;

    e.maxReached = this.count === this.max;
    e.minReached = this.count === this.min;
    this.dispatchEvent(e);
  } 

  reset() {
    this.count = 0;
    const e = new Event('change');
    e.count = this.count;

    e.maxReached = this.count === this.max;
    e.minReached = this.count === this.min;
    this.dispatchEvent(e);
  }
}