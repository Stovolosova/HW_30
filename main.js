class Hamburger {
    constructor(size, stuffing, toppings) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = toppings;
    }
  
    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      this.toppings.forEach(topping => {
        price += topping.price;
      });
      return price;
    }
  
    calculateCalories() {
      let calories = this.size.calories + this.stuffing.calories;
      this.toppings.forEach(topping => {
        calories += topping.calories;
      });
      return calories;
    }
}

  const sizes = {
    small: { price: 50, calories: 20 },
    large: { price: 100, calories: 40 }
  };
  
  const stuffings = {
    cheese: { price: 10, calories: 20 },
    salad: { price: 20, calories: 5 },
    potato: { price: 15, calories: 10 }
  };
  
  const toppings = {
    spice: { price: 15, calories: 0 },
    mayo: { price: 20, calories: 5 }
  }; 

  const hamburger = new Hamburger(sizes.large, stuffings.potato,
    [toppings.spice, toppings.mayo]);
  
  console.log('Total Price: ' + hamburger.calculatePrice() + ' tugriks');
  console.log('Total Calories: ' + hamburger.calculateCalories());