class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

let grocery_list = [
    new Grocery('Banana', 6),
    new Grocery('Eggs', 12),
    new Grocery('Milk', 1),
    new Grocery('Juice', 2),
    new Grocery('Yogurt', 4)
];

export{}