'use strict'
class Sale {
  constructor(price) {
    ;[this.decoratorsList, this.price] = [[], price]
  }

  decorate(decorator) {
    if (!Sale[decorator]) throw new Error(`decorator not exist: ${decorator}`)
    this.decoratorsList.push(Sale[decorator])
  }

  getPrice() {
    for (let decorator of this.decoratorsList) {
      this.price = decorator(this.price)
    }
    return this.price.toFixed(2)
  }

  static quebec(price) {
    // this is a comment
    return price + price * 7.5 / 100
  }

  static fedtax(price) {
  }

  test() {

  }
}

class EditFishForm extends Component {
  static propTypes = {
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    index: PropTypes.string,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  }
}

let sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
console.log(sale.getPrice()) //112.88

getPrice()

//deeply nested

async function asyncCall() {
  var result = await resolveAfter2Seconds();
}

const test = {
    a: 100,
    b: 'abc',
    c() {

    }
}

const options = {
  connections: {
    compression: false
  }
}

for (let i = 0; i < 10; i++) {
  continue;
}

(() => {
    return {
        a: test.a,
        b: test.b,
        c: test.c
    }
})();