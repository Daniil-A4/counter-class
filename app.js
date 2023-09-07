import { Counter } from './counter.js';

const counter1 = new Counter();
const counter2 = new Counter({ count: 10, min: -10, max: 10 });
const counter3 = new Counter({ min: 0, step: 3 });

counter1.appendTo(document.body);
counter2.appendTo(document.body);
counter3.appendTo(document.body);