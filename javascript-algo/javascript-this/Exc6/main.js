const PricePerBeans = {
    beans: 10,
    price: 2,
    calculatePrice: function(beansToBuy) {
        return (beansToBuy / this.beans) * this.price;
    }
}

const coffeeShop = {
    beans: 40,
    money: 50,
    
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: { beanRequirement: 5, price: 3 },
        doubleShot: { beanRequirement: 15, price: 7 },
        frenchPress: { beanRequirement: 12, price: 6 }
    },

    makeDrink: function (drinkType) {
    
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we don't make " + drinkType);
            return false;
        }
        
        let required = this.drinkRequirements[drinkType].beanRequirement;
        
        if (this.beans < required){
            console.log("Sorry, we're all out of beans!");
            return false;
        }

        this.beans -= required;
        console.log(`Enjoy your ${drinkType} coffee!`);

        return true;
    },

    buyBeans: function (beansToBuy) {
        let price = PricePerBeans.calculatePrice(beansToBuy);

        if (this.money < price) {
            console.log("Sorry, we don't have enough money");
            return;
        }

        this.money -= price;
        this.beans += beansToBuy;
        console.log(`Bought ${beansToBuy} beans for $${price}. Current money: $${this.money}`);    
    },

    buyDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log(`Sorry, we don't make ${drinkType}`);
            return;
        }
        
        let success = this.makeDrink(drinkType);
        if (success) {
            let price = this.drinkRequirements[drinkType].price;
            this.money += price;
            console.log(`Total money: $${this.money}. Remaining beans: ${this.beans}`);
        }
    }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

coffeeShop.buyDrink("frenchPress");
coffeeShop.buyBeans(30);
coffeeShop.buyDrink("frenchPress");
coffeeShop.buyBeans(500);