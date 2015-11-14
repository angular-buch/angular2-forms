export default class Car {

  id: string;
  driver: string = '';
  tankCapacity: number = 100;
  hasDamage: boolean = false;

  constructor(id: string) {
    this.id = id;
    setInterval(() => this.reduceTankCapacity(), 1000);
  }

  reduceTankCapacity() {
    var newCapacity = this.tankCapacity - Math.floor(Math.random() * 10);
    this.tankCapacity = newCapacity > 0 ? newCapacity : 0;
  }

  refillTank(oil) {
    this.tankCapacity = this.tankCapacity + oil;
  }
}
