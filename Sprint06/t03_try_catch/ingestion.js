const {EatException} = require("./eat-exception");

class Ingestion {
    constructor(meal_type = [], id = 1, day_of_diet = 0, products = []) {
        this.id = id;
        this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
        this.products = products;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(product) {
        return {kcal: this.products.filter( p => p.name === product)[0].kcal_per_portion };
    }

    getFromFridge(product) {
        if (this.products.filter( p => p.name === product)[0].kcal_per_portion > 200)
            throw new EatException(`Too many calories in ${product} for ${this.meal_type}`);
    }
}

module.exports.Ingestion = Ingestion