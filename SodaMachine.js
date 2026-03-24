class SodaMachine {
  constructor({ sodas = [], cash = 1.0 }) {
    this.sodas = sodas;
    this.cash = cash;
    this.count = 5;
  }

  currentInventoryCount() {
    return this.sodas.length;
  }

  get totalSodaCost() {
    let sum = 0;
    for (let i = 0; i < this.sodas.length; i++) {
      sum += this.sodas[i].getPrice();
    }
    return sum;
  }

  findSoda(str) {
    return this.sodas.find((el) => el.brand === str);
  }

  sell(str) {
    const soda = this.sodas.find((el) => el.brand === str);
    if (!soda) {
      return undefined;
    }
    const index = this.sodas.indexOf(soda);
    this.cash += soda.getPrice();
    this.sodas.splice(index, 1);
    return soda;
  }
}

module.exports = SodaMachine;
